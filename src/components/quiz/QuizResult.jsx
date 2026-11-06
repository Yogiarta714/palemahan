import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import Button from "../ui/Button.jsx";
import ArrowLink from "../ui/ArrowLink.jsx";
import ProfileIllustration from "./ProfileIllustration.jsx";
import { quizProfiles } from "../../data/quizProfiles.js";
import { getCategory } from "../../data/categories.js";

// Muncul pelan (fade + naik)
function FadeIn({ delay = 0, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export default function QuizResult({
    quizTitle,
    score,
    total,
    previousBest,
    profile,
    articles,
    challenge,
    onRetry,
}) {
    const best = Math.max(previousBest ?? 0, score);
    const isNewBest = previousBest !== null && score > previousBest;

    const topRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const count = useMotionValue(reduceMotion ? score : 0);
    const rounded = useTransform(count, (value) => Math.round(value));

    // Saat hasil muncul, bawa pengguna ke bagian atas hasil (tempat skor)
    useEffect(() => {
        const element = topRef.current;
        if (!element) return;
        element.focus({ preventScroll: true });
        element.scrollIntoView({ block: "start" });
    }, []);

    // Angka skor menghitung naik dari 0
    useEffect(() => {
        if (reduceMotion) {
            count.set(score);
            return undefined;
        }
        const controls = animate(count, score, { duration: 0.9, delay: 0.3, ease: "easeOut" });
        return () => controls.stop();
    }, [count, score, reduceMotion]);

    return (
        <div>
            <div
                ref={topRef}
                tabIndex={-1}
                role="region"
                aria-label="Hasil kuis"
                className="scroll-mt-24 outline-none"
            >
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                    Hasil · {quizTitle}
                </p>

                <div className="mt-4 grid items-center gap-8 sm:grid-cols-[1fr_16rem]">
                    <p className="font-display text-display font-medium text-forest-800">
                        <span className="sr-only">
                            Skor {score} dari {total}
                        </span>
                        <span aria-hidden="true">
                            <motion.span>{rounded}</motion.span>
                            <span className="text-sage-300">/{total}</span>
                        </span>
                    </p>
                    <ProfileIllustration profileId={profile.id} className="w-full max-w-xs" />
                </div>
            </div>

            <FadeIn delay={0.9}>
                <ol aria-label="Tingkat pemahaman" className="mt-8 flex flex-wrap gap-2">
                    {quizProfiles.map((item) => {
                        const current = item.id === profile.id;
                        return (
                            <li
                                key={item.id}
                                aria-current={current ? "step" : undefined}
                                className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                                    current
                                        ? "border-forest-600 bg-forest-600 text-white"
                                        : "border-line text-ink-muted"
                                }`}
                            >
                                {item.name}
                                {current && <span className="sr-only"> (kamu di sini)</span>}
                            </li>
                        );
                    })}
                </ol>

                <h2 className="mt-8 font-display text-3xl font-medium text-forest-800">
                    Profilmu: {profile.name}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">{profile.description}</p>

                <p role="status" className="mt-4 text-sm text-ink-muted">
                    Skor terbaikmu:{" "}
                    <span className="font-semibold text-forest-800">
                        {best}/{total}
                    </span>
                    {isNewBest && (
                        <span className="ml-2 font-semibold text-clay-700">Rekor baru!</span>
                    )}
                </p>
            </FadeIn>

            {articles.length > 0 && (
                <section aria-labelledby="judul-baca-ini" className="mt-12">
                    <h2
                        id="judul-baca-ini"
                        className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
                    >
                        Baca ini
                    </h2>
                    <ul className="mt-4 divide-y divide-line border-y border-line">
                        {articles.map((article) => (
                            <li key={article.id} className="group relative py-4">
                                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                                    {getCategory(article.category)?.short} · {article.readingTime}{" "}
                                    menit baca
                                </p>
                                <p className="mt-1 font-display text-xl font-medium text-forest-800">
                                    <Link
                                        to={`/jelajahi/${article.slug}`}
                                        className="decoration-clay-500 decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                                    >
                                        {article.title}
                                    </Link>
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {challenge && (
                <section aria-labelledby="judul-coba-ini" className="mt-10">
                    <h2
                        id="judul-coba-ini"
                        className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
                    >
                        Coba ini
                    </h2>
                    <p className="mt-4 font-display text-xl font-medium text-forest-800">
                        {challenge.title}
                    </p>
                    <p className="mt-2 text-ink-muted">{challenge.description}</p>
                    <ArrowLink to="/aksi" className="mt-3">
                        Lihat tantangan di Eco Action
                    </ArrowLink>
                </section>
            )}

            <div className="mt-12 flex flex-wrap gap-3">
                <Button onClick={onRetry}>Ulangi kuis</Button>
                <Button to="/kuis" variant="outline">
                    Kuis lain
                </Button>
            </div>
        </div>
    );
}
