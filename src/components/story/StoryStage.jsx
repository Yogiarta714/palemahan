import { useEffect, useRef, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "motion/react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { beats, beatStart, chapterOffset, chapters } from "../../data/story.js";
import { Bottle, scenes, VIEWBOX } from "./StoryScenes.jsx";

const N = chapters.length;

// lama kartu teks bertahan sebelum diganti
const MIN_READ_MS = 2600;

const KEY_P = [
    0, 0.08, 0.2, 0.3, 0.38, 0.41, 0.47, 0.5, 0.54, 0.58, 0.59, 0.61, 0.66, 0.72, 0.8, 1,
];
const KEY_X = [176, 156, 150, 232, 236, 200, 190, 172, 174, 230, 250, 232, 220, 208, 200, 200];
const KEY_Y = [262, 330, 332, 346, 350, 40, 250, 372, 374, 470, 580, 120, 176, 178, 384, 268];

function sample(values, p) {
    for (let i = 1; i < KEY_P.length; i++) {
        if (p <= KEY_P[i]) {
            const t = (p - KEY_P[i - 1]) / (KEY_P[i] - KEY_P[i - 1]);
            return values[i - 1] + (values[i] - values[i - 1]) * t;
        }
    }
    return values[values.length - 1];
}

// Jejak digambar per bab (reset tiap pindah adegan) supaya tidak menumpuk.
const TRAILS = chapters.map((_, i) => {
    const steps = 28;
    const pts = Array.from({ length: steps + 1 }, (_, k) => {
        const p = (i + k / steps) / N;
        return [p, sample(KEY_X, p), sample(KEY_Y, p)];
    });
    let len = 0;
    const cum = pts.map((pt, k) => {
        if (k) len += Math.hypot(pt[1] - pts[k - 1][1], pt[2] - pts[k - 1][2]);
        return len;
    });
    return {
        d: pts.map((pt, k) => `${k ? "L" : "M"}${pt[1].toFixed(1)} ${pt[2].toFixed(1)}`).join(" "),
        P: pts.map((pt) => pt[0]),
        L: cum.map((c) => (len ? c / len : 0)),
    };
});

function ChapterTrail({ i, p }) {
    const t = TRAILS[i];
    const drawn = useTransform(p, t.P, t.L);
    return (
        <>
            <path
                d={t.d}
                fill="none"
                strokeDasharray="4 8"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="stroke-clay-500/45"
            />
            <motion.path
                d={t.d}
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                className="stroke-clay-500"
                style={{ pathLength: drawn }}
            />
        </>
    );
}

// Adegan baru memudar masuk DI ATAS adegan sebelumnya.
function SceneLayer({ progress, index, Scene }) {
    const a = index / N;
    const f = 0.05;
    const opacity = useTransform(
        progress,
        index === 0 ? [0, 1] : [a - f, a + f],
        index === 0 ? [1, 1] : [0, 1],
    );
    const local = useTransform(progress, [a, (index + 1) / N], [0, 1]);
    return (
        <motion.div style={{ opacity }} className="absolute inset-0">
            <Scene progress={local} />
        </motion.div>
    );
}

const navButton =
    "inline-flex h-10 items-center gap-1 rounded-full border px-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none";

export default function StoryStage() {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0); // bab menurut posisi gulir (untuk rail)
    const [bottleState, setBottleState] = useState("utuh");
    const [shown, setShown] = useState(0); // kartu yang sedang ditampilkan (bisa tertinggal dari gulir)

    // Penahan baca: kartu baru menunggu sampai kartu sebelumnya sudah tampil cukup lama.
    const target = useRef(0);
    const lastSwap = useRef(0);
    const timer = useRef(0);
    const ignoreUntil = useRef(0);

    const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
    const p = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 22,
        mass: 0.8,
        restDelta: 0.0005,
    });

    const evaluate = (v) => {
        const i = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
        const local = v * N - i;
        let k = 0;
        chapters[i].beats.forEach((b, j) => {
            if (local >= b.at) k = j;
        });
        const idx = chapterOffset[i] + k;
        if (idx === target.current) return;
        target.current = idx;
        window.clearTimeout(timer.current);
        const swap = () => {
            lastSwap.current = performance.now();
            setShown(target.current);
        };
        const wait = MIN_READ_MS - (performance.now() - lastSwap.current);
        if (wait <= 0) swap();
        else timer.current = window.setTimeout(swap, wait);
    };

    useMotionValueEvent(p, "change", (v) => {
        setActive(Math.min(N - 1, Math.max(0, Math.floor(v * N))));
        setBottleState(v < 0.5 ? "utuh" : v < 0.68 ? "retak" : v < 0.8 ? "serpihan" : "utuh");
        if (performance.now() < ignoreUntil.current) return;
        evaluate(v);
    });

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const x = useTransform(p, KEY_P, KEY_X);
    const y = useTransform(p, KEY_P, KEY_Y);
    const sway = useTransform(p, (v) => Math.sin(v * 30) * 5);
    const tilt = useTransform(useVelocity(p), [-0.4, 0.4], [-12, 12]);
    const rotate = useTransform([sway, tilt], ([a, b]) => a + b);
    const cue = useTransform(p, [0, 0.03], [1, 0]);
    // Gorong-gorong: layar gelap saat botol masuk di akhir Bab 2, terang lagi di tukad (Bab 3).
    const dark = useTransform(p, [0.34, 0.38, 0.41, 0.45], [0, 0.88, 0.88, 0]);
    // Botol memudar saat "keluar" dari tukad lalu muncul di permukaan laut.
    const bottleOpacity = useTransform(p, [0.57, 0.59, 0.61, 0.63], [1, 0, 0, 1]);

    // Pindah ke kartu tertentu: kartu langsung tampil, lalu halaman bergulir ke posisinya.
    const goTo = (idx) => {
        const el = trackRef.current;
        if (!el) return;
        const n = Math.max(0, Math.min(beats.length - 1, idx));
        window.clearTimeout(timer.current);
        target.current = n;
        lastSwap.current = performance.now();
        ignoreUntil.current = performance.now() + 1500;
        setShown(n);
        const top0 = el.getBoundingClientRect().top + window.scrollY;
        const span = el.offsetHeight - window.innerHeight;
        window.scrollTo({ top: top0 + span * (beatStart(n) + 0.004), behavior: "smooth" });
        window.setTimeout(() => evaluate(p.get()), 1600);
    };

    // Panah kiri/kanan di keyboard, hanya saat panggung sedang di layar.
    useEffect(() => {
        const onKey = (e) => {
            if (e.altKey || e.ctrlKey || e.metaKey) return;
            if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
            const tag = document.activeElement?.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
            const r = trackRef.current?.getBoundingClientRect();
            if (!r || r.top > window.innerHeight * 0.5 || r.bottom < window.innerHeight * 0.5)
                return;
            e.preventDefault();
            goTo(shown + (e.key === "ArrowRight" ? 1 : -1));
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    const cur = beats[shown];
    const siblings = chapters[cur.chapter].beats;
    const posInChapter = shown - chapterOffset[cur.chapter];
    const heading = cur.title ?? (cur.at === 0 ? cur.chapterTitle : null);
    const eyebrow =
        cur.kind === "akibat"
            ? "Akibatnya"
            : cur.kind === "fakta"
                ? "Fakta"
                : cur.at === 0
                    ? cur.label
                    : `${cur.label}: ${cur.chapterTitle}`;

    return (
        <section
            ref={trackRef}
            aria-label="Jejak Satu Botol"
            className="relative h-[1000svh] md:h-[1200svh]"
        >
            <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden bg-ivory">
                <div aria-hidden="true" className="absolute inset-0">
                    {scenes.map((Scene, i) => (
                        <SceneLayer key={i} progress={p} index={i} Scene={Scene} />
                    ))}

                    <motion.div style={{ opacity: dark }} className="absolute inset-0 z-5 bg-ink" />

                    <svg
                        viewBox={VIEWBOX}
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                        className="absolute inset-0 z-10 h-full w-full"
                    >
                        <ChapterTrail key={active} i={active} p={p} />
                        <motion.g style={{ x, y, rotate, opacity: bottleOpacity }}>
                            <Bottle state={bottleState} />
                        </motion.g>
                    </svg>

                    <motion.div
                        style={{ opacity: cue }}
                        className="absolute inset-x-0 bottom-36 flex flex-col items-center gap-1 text-sm font-medium text-ink-muted md:bottom-8"
                    >
                        Gulir pelan-pelan
                        <ChevronDown
                            aria-hidden="true"
                            className="size-5 animate-bounce motion-reduce:animate-none"
                        />
                    </motion.div>
                </div>

                <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-2 p-3">
                    <a
                        href="#ringkasan"
                        className="rounded-full border border-line bg-ivory/90 px-3 py-1.5 text-xs font-semibold text-forest-700 hover:bg-white"
                    >
                        Lewati ke ringkasan
                    </a>
                    <nav
                        aria-label="Bab cerita"
                        className="flex items-center rounded-full border border-line bg-ivory/90 px-1"
                    >
                        {chapters.map((ch, i) => (
                            <button
                                key={ch.id}
                                type="button"
                                onClick={() => goTo(chapterOffset[i])}
                                aria-label={`${ch.label}: ${ch.title}`}
                                aria-current={i === active ? "step" : undefined}
                                className="grid size-7 place-items-center rounded-full"
                            >
                                <span
                                    className={`size-2.5 rounded-full transition-colors motion-reduce:transition-none ${
                                        i === active ? "bg-clay-600" : "bg-forest-200"
                                    }`}
                                />
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Kartu teks. Bagian teks disembunyikan dari pembaca layar (isinya ada di daftar sr-only);
                    tombol di dalamnya tetap bisa difokus. */}
                <div
                    className={`leaf-cut absolute inset-x-4 bottom-4 z-20 border bg-ivory/95 p-5 md:inset-x-auto md:bottom-auto md:top-1/2 md:w-88 md:-translate-y-1/2 md:p-7 ${
                        cur.kind === "akibat" ? "border-clay-500" : "border-line"
                    } ${cur.chapter % 2 === 0 ? "md:left-10" : "md:right-10"}`}
                >
                    <div
                        key={shown}
                        aria-hidden="true"
                        className="animate-rise [animation-duration:700ms] motion-reduce:animate-none"
                    >
                        <p
                            className={`text-xs font-semibold ${cur.kind === "akibat" ? "text-clay-700" : "text-clay-600"}`}
                        >
                            {eyebrow}
                        </p>
                        {heading && (
                            <p className="mt-1 font-display text-2xl text-forest-700 md:text-3xl">
                                {heading}
                            </p>
                        )}
                        <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                            {cur.text}
                        </p>
                        {cur.fact && (
                            <p className="mt-3 text-xs text-ink-muted">
                                Sumber: {cur.fact.source}, {cur.fact.year}
                            </p>
                        )}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                        <button
                            type="button"
                            onClick={() => goTo(shown - 1)}
                            disabled={shown === 0}
                            aria-label="Bagian sebelumnya"
                            className={`${navButton} border-forest-600 text-forest-700 hover:bg-forest-50`}
                        >
                            <ChevronLeft aria-hidden="true" className="size-4" />
                            Kembali
                        </button>
                        <div aria-hidden="true" className="flex gap-1.5">
                            {siblings.map((_, j) => (
                                <span
                                    key={j}
                                    className={`size-1.5 rounded-full ${j === posInChapter ? "bg-clay-600" : "bg-forest-200"}`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => goTo(shown + 1)}
                            disabled={shown === beats.length - 1}
                            aria-label="Bagian berikutnya"
                            className={`${navButton} border-forest-600 bg-forest-600 text-white hover:bg-forest-700`}
                        >
                            Lanjut
                            <ChevronRight aria-hidden="true" className="size-4" />
                        </button>
                    </div>
                </div>

                <ol className="sr-only">
                    {chapters.map((ch) => (
                        <li key={ch.id}>
                            <h2>{`${ch.label}: ${ch.title}`}</h2>
                            <p>{ch.alt}</p>
                            {ch.beats.map((b, j) => (
                                <p key={j}>
                                    {b.kind === "akibat" ? `Akibatnya: ${b.text}` : b.text}
                                </p>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
