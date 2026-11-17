import { motion, useReducedMotion, useTransform } from "motion/react";
import ContourPattern from "../ui/ContourPattern.jsx";
import { palette } from "../../data/story.js";

// Semua gambar memakai koordinat 400x600 yang diletakkan di tengah viewBox lebar (-200..600),
// supaya di layar lebar tidak ter-zoom. Latar harus membentang dari x=-200 sampai 600 (konstanta W).
export const VIEWBOX = "-200 0 800 600";
const W = { x: -200, width: 800 };
const SKIN = "#C48A5E";
const HAIR = "#1B2A20";
const CAPING = "#D9B77A";

// Satu lapisan parallax. `progress` = progres lokal adegan (0 sampai 1).
function Layer({ progress, shift, children }) {
    const y = useTransform(progress, [0, 1], [shift, -shift]);
    return (
        <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-6">
            <svg
                viewBox={VIEWBOX}
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                focusable="false"
                className="h-full w-full"
            >
                {children}
            </svg>
        </motion.div>
    );
}

const Contours = ({ seed }) => (
    <ContourPattern className="absolute inset-0 h-full w-full text-line" rings={10} seed={seed} />
);

// Gerak naik-turun pelan yang hidup sendiri (mati bila pengguna mengurangi animasi).
function Bob({ amount = 4, duration = 3.5, children }) {
    const reduce = useReducedMotion();
    return (
        <motion.g
            animate={reduce ? undefined : { y: [0, -amount, 0] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        >
            {children}
        </motion.g>
    );
}

// Kelopak jepun yang jatuh pelan.
function Petal({ x, delay = 0 }) {
    const reduce = useReducedMotion();
    if (reduce) return null;
    return (
        <motion.circle
            r="3.5"
            className="fill-ivory"
            initial={{ cx: x, cy: 120, opacity: 0 }}
            animate={{ cx: [x, x + 22, x - 12, x + 18], cy: [120, 360], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 9, repeat: Infinity, delay, ease: "linear" }}
        />
    );
}

// Tokoh manusia sederhana. (x, y) = telapak kaki.
function Person({ x, y, s = 0.9, shirt = "fill-clay-500", caping, umbrella, bottle }) {
    return (
        <g transform={`translate(${x} ${y}) scale(${s})`}>
            <rect x="-9" y="-34" width="7" height="34" rx="3" className="fill-forest-800" />
            <rect x="2" y="-34" width="7" height="34" rx="3" className="fill-forest-800" />
            <rect x="-13" y="-76" width="26" height="46" rx="10" className={shirt} />
            <rect
                x="-16"
                y="-72"
                width="7"
                height="30"
                rx="3.5"
                transform="rotate(8 -13 -72)"
                style={{ fill: SKIN }}
            />
            <rect
                x="9"
                y="-72"
                width="7"
                height="30"
                rx="3.5"
                transform="rotate(-14 12 -72)"
                style={{ fill: SKIN }}
            />
            {bottle && (
                <rect
                    x="18"
                    y="-48"
                    width="7"
                    height="15"
                    rx="2"
                    className="fill-sage-100 stroke-forest-700"
                />
            )}
            <circle cx="0" cy="-88" r="10" style={{ fill: SKIN }} />
            {caping ? (
                <path d="M-25 -92 L0 -116 L25 -92Z" style={{ fill: CAPING }} />
            ) : (
                <path d="M-10 -90 a10 10 0 0 1 20 0 q-10 -6 -20 0Z" style={{ fill: HAIR }} />
            )}
            {umbrella && (
                <g>
                    <path
                        d="M-4 -76 V-126"
                        className="fill-none stroke-forest-800"
                        strokeWidth="2.5"
                    />
                    <path d="M-38 -124 a38 30 0 0 1 76 0Z" className="fill-clay-500" />
                </g>
            )}
        </g>
    );
}

export function Rumah({ progress }) {
    return (
        <div className="absolute inset-0 bg-ivory">
            <Contours seed={2} />
            <Layer progress={progress} shift={6}>
                <circle cx="310" cy="120" r="46" className="fill-clay-100" />
                <path
                    d="M-200 320 Q-60 270 100 318 T400 300 T600 320 V600 H-200Z"
                    className="fill-sage-200"
                />
            </Layer>
            <Layer progress={progress} shift={10}>
                <path d="M26 252 L110 206 L194 252Z" className="fill-clay-600" />
                <rect x="40" y="252" width="30" height="110" className="fill-forest-700" />
                <rect x="150" y="252" width="30" height="110" className="fill-forest-700" />
                <rect x="70" y="292" width="80" height="70" className="fill-ivory-2 stroke-line" />
                <rect x="300" y="250" width="10" height="112" className="fill-forest-800" />
                <Bob amount={3} duration={5}>
                    <circle cx="305" cy="228" r="44" className="fill-sage-400" />
                    <circle cx="272" cy="250" r="28" className="fill-sage-400" />
                    <circle cx="338" cy="250" r="28" className="fill-sage-400" />
                    {[
                        [290, 210],
                        [318, 222],
                        [300, 246],
                        [330, 246],
                    ].map(([x, y]) => (
                        <circle key={x} cx={x} cy={y} r="4" className="fill-ivory" />
                    ))}
                </Bob>
                <Petal x={290} />
                <Petal x={320} delay={3} />
                <Petal x={270} delay={6} />
            </Layer>
            <Layer progress={progress} shift={16}>
                <rect {...W} y="360" height="240" className="fill-ivory-2" />
                <path
                    d="M-200 470 H600"
                    className="fill-none stroke-line"
                    strokeWidth="3"
                    strokeDasharray="14 12"
                />
                <rect x="250" y="398" width="46" height="62" rx="6" className="fill-forest-600" />
                <rect x="245" y="390" width="56" height="12" rx="4" className="fill-forest-700" />
                <Person x={208} y={362} shirt="fill-forest-500" />
            </Layer>
        </div>
    );
}

const RAIN = Array.from(
    { length: 40 },
    (_, i) => `M${-200 + ((i * 37) % 800)} ${(i * 83) % 520} l-8 22`,
).join(" ");

export function Selokan({ progress }) {
    const flow = useTransform(progress, [0, 1], [0, -160]);
    const rain = useTransform(progress, [0, 0.4], [0.25, 0.9]);
    const akibat = useTransform(progress, [0.5, 0.85], [0, 1]);
    return (
        <div className="absolute inset-0 bg-sage-100">
            <Layer progress={progress} shift={6}>
                <rect {...W} height="260" className="fill-sage-100" />
                <path
                    d="M-200 240 Q-60 200 100 235 T400 225 T600 240 V270 H-200Z"
                    className="fill-sage-200"
                />
            </Layer>
            <Layer progress={progress} shift={10}>
                <rect {...W} y="262" height="38" className="fill-line" />
                <rect {...W} y="300" height="96" className="fill-forest-700" />
                <motion.path
                    d="M-200 330 H600 M-200 352 H600 M-200 374 H600"
                    style={{ strokeDashoffset: flow }}
                    strokeDasharray="22 18"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="fill-none stroke-sage-300"
                />
                <ellipse
                    cx="90"
                    cy="344"
                    rx="16"
                    ry="6"
                    transform="rotate(-18 90 344)"
                    className="fill-sage-400"
                />
                <rect x="300" y="332" width="16" height="20" rx="3" className="fill-clay-100" />
                <ellipse cx="220" cy="366" rx="14" ry="5" className="fill-forest-400" />
                <motion.g style={{ opacity: akibat }}>
                    <ellipse cx="120" cy="352" rx="22" ry="8" className="fill-sage-400" />
                    <rect
                        x="138"
                        y="338"
                        width="20"
                        height="26"
                        rx="4"
                        className="fill-clay-100 stroke-forest-700"
                    />
                    <ellipse cx="170" cy="360" rx="26" ry="9" className="fill-forest-400" />
                    <rect
                        x="190"
                        y="340"
                        width="16"
                        height="22"
                        rx="3"
                        className="fill-sage-100 stroke-forest-700"
                    />
                    <ellipse cx="150" cy="372" rx="30" ry="8" className="fill-sage-300" />
                </motion.g>
                {Array.from({ length: 9 }, (_, i) => (
                    <rect
                        key={i}
                        x={30 + i * 42}
                        y="300"
                        width="7"
                        height="96"
                        className="fill-forest-900"
                    />
                ))}
            </Layer>
            <Layer progress={progress} shift={16}>
                <rect {...W} y="396" height="204" className="fill-ivory-2" />
                <rect {...W} y="396" height="8" className="fill-line" />
                <Person x={338} y={298} s={0.85} shirt="fill-forest-500" umbrella />
                <motion.rect
                    {...W}
                    y="262"
                    height="38"
                    opacity="0.8"
                    style={{ scaleY: akibat, originY: 1, fill: palette.air }}
                />
            </Layer>
            <svg
                viewBox={VIEWBOX}
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                focusable="false"
                className="absolute inset-0 h-full w-full"
            >
                <rect {...W} height="600" className="fill-forest-900" opacity="0.1" />
                <motion.path
                    d={RAIN}
                    style={{ opacity: rain }}
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="stroke-forest-400"
                />
            </svg>
        </div>
    );
}

const RIVER =
    "M150 0 C230 130 110 290 205 420 S250 540 225 600 H335 C365 540 310 450 280 380 S345 140 255 0Z";

export function Sungai({ progress }) {
    const akibat = useTransform(progress, [0.4, 0.8], [0, 1]);
    const murk = useTransform(akibat, [0, 1], [0, 0.22]);
    return (
        <div className="absolute inset-0 bg-sage-200">
            <Layer progress={progress} shift={6}>
                <path
                    d="M-200 150 Q-50 110 100 150 T400 130 T600 150 V600 H-200Z"
                    className="fill-sage-300"
                />
                <path
                    d="M-200 230 Q-40 190 120 230 T400 210 T600 230 V600 H-200Z"
                    className="fill-sage-400"
                />
                <Bob amount={6} duration={4.5}>
                    <path
                        d="M300 110 q8 -8 16 0 q8 -8 16 0 M338 128 q6 -6 12 0 q6 -6 12 0"
                        className="fill-none stroke-forest-700"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </Bob>
            </Layer>
            <Layer progress={progress} shift={10}>
                <path d={RIVER} style={{ fill: palette.air }} />
                <motion.path d={RIVER} style={{ opacity: murk }} className="fill-forest-800" />
                {[-60, -48, -36, 340, 354, 368, 500, 512].map((x) => (
                    <rect
                        key={x}
                        x={x}
                        y="90"
                        width="6"
                        height="250"
                        rx="3"
                        className="fill-forest-500"
                    />
                ))}
            </Layer>
            <Layer progress={progress} shift={16}>
                <rect x="60" y="300" width="290" height="16" rx="3" className="fill-clay-700" />
                <rect x="160" y="316" width="14" height="64" className="fill-forest-800" />
                <rect x="250" y="316" width="14" height="64" className="fill-forest-800" />
                <path
                    d="M158 376 l40 -14 M162 392 l36 8 M160 366 l-22 -10 M258 380 l-30 -12"
                    className="fill-none stroke-forest-800"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <motion.g style={{ opacity: akibat }}>
                    <rect
                        x="176"
                        y="372"
                        width="18"
                        height="26"
                        rx="4"
                        className="fill-clay-100 stroke-forest-700"
                    />
                    <ellipse cx="196" cy="394" rx="22" ry="8" className="fill-sage-400" />
                    <rect
                        x="140"
                        y="384"
                        width="22"
                        height="14"
                        rx="3"
                        className="fill-sage-100 stroke-forest-700"
                    />
                    <path
                        d="M150 402 q18 8 44 0"
                        className="fill-none stroke-forest-800"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </motion.g>
                <Person x={104} y={300} s={0.85} shirt="fill-clay-600" caping />
            </Layer>
        </div>
    );
}

export function Laut({ progress }) {
    const akibat = useTransform(progress, [0.5, 0.85], [0, 1]);
    return (
        <div className="absolute inset-0" style={{ backgroundColor: palette.laut }}>
            <Layer progress={progress} shift={6}>
                <rect {...W} height="172" className="fill-ivory-2" />
                <circle cx="320" cy="90" r="30" className="fill-clay-100" />
                <path
                    d="M-200 172 V110 Q-120 80 -60 118 Q0 80 60 122 Q110 98 165 172Z"
                    className="fill-forest-600"
                />
                <motion.g style={{ opacity: akibat }}>
                    <rect
                        x="-40"
                        y="152"
                        width="16"
                        height="22"
                        rx="3"
                        className="fill-clay-100 stroke-forest-700"
                    />
                    <ellipse
                        cx="0"
                        cy="166"
                        rx="18"
                        ry="6"
                        className="fill-sage-100 stroke-forest-700"
                    />
                    <rect
                        x="52"
                        y="156"
                        width="14"
                        height="16"
                        rx="3"
                        className="fill-sage-100 stroke-forest-700"
                    />
                    <ellipse
                        cx="100"
                        cy="168"
                        rx="16"
                        ry="5"
                        className="fill-clay-100 stroke-forest-700"
                    />
                </motion.g>
            </Layer>
            <Layer progress={progress} shift={10}>
                <rect {...W} y="170" height="430" style={{ fill: palette.laut }} />
                <rect {...W} y="330" height="270" style={{ fill: palette.lautDalam }} />
                <Bob amount={3} duration={4}>
                    <path
                        d="M-200 170 q25 -14 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0"
                        className="fill-none stroke-ivory"
                        strokeWidth="3"
                    />
                </Bob>
            </Layer>
            <Layer progress={progress} shift={16}>
                <path
                    d="M60 600 V540 M60 560 l-18 -22 M60 548 l16 -20 M150 600 V520 M150 550 l-20 -26 M150 535 l22 -24 M470 600 V530 M470 555 l-18 -22"
                    className="fill-none stroke-clay-500"
                    strokeWidth="9"
                    strokeLinecap="round"
                />
                <ellipse cx="290" cy="450" rx="22" ry="9" className="fill-sage-300" />
                <path d="M312 450 l16 -9 v18z" className="fill-sage-300" />
                <Bob amount={3} duration={4.5}>
                    <path d="M262 172 q50 22 110 0 l-8 -12 h-94z" className="fill-clay-700" />
                    <path
                        d="M270 166 L246 154 M356 166 L382 154"
                        className="fill-none stroke-clay-700"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <Person x={318} y={162} s={0.7} shirt="fill-sage-400" caping />
                </Bob>
            </Layer>
        </div>
    );
}

export function Aksi({ progress }) {
    const akibat = useTransform(progress, [0.5, 0.85], [0, 1]);
    return (
        <div className="absolute inset-0 bg-ivory">
            <Contours seed={5} />
            <Layer progress={progress} shift={6}>
                <circle cx="90" cy="110" r="40" className="fill-sage-200" />
            </Layer>
            <Layer progress={progress} shift={10}>
                {[
                    [84, "fill-sage-400"],
                    [172, "fill-forest-600"],
                    [260, "fill-clay-500"],
                ].map(([x, tone]) => (
                    <g key={x}>
                        <rect x={x} y="330" width="56" height="78" rx="6" className={tone} />
                        <rect
                            x={x - 4}
                            y="320"
                            width="64"
                            height="12"
                            rx="4"
                            className="fill-forest-800"
                        />
                    </g>
                ))}
            </Layer>
            <Layer progress={progress} shift={16}>
                <rect {...W} y="408" height="192" className="fill-ivory-2" />
                <rect x="334" y="352" width="26" height="56" rx="6" className="fill-forest-700" />
                <rect x="337" y="344" width="20" height="10" rx="3" className="fill-clay-600" />
                <motion.path
                    d="M376 408 V378 M376 394 q-14 -4 -16 -18 q14 0 16 18 M376 388 q12 -4 14 -16 q-12 0 -14 16"
                    style={{ scaleY: akibat, originY: 1 }}
                    className="fill-none stroke-forest-500"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <Person x={40} y={410} shirt="fill-forest-500" bottle />
            </Layer>
        </div>
    );
}

export const scenes = [Rumah, Selokan, Sungai, Laut, Aksi];

// Pecahan botol: [x, y, rotasi, ukuran]
const SHARDS = [
    [8, 40, -20, 8],
    [30, 22, 15, 6],
    [44, 60, 40, 7],
    [14, 78, -35, 9],
    [36, 92, 10, 6],
    [26, 50, 70, 5],
    [50, 34, -10, 5],
    [4, 64, 25, 5],
];

// Botol digambar di dalam SVG yang sama dengan adegan (titik tengah di 0,0), jadi selalu pas dengan ilustrasi.
export function Bottle({ state = "utuh" }) {
    return (
        <svg
            viewBox="0 0 60 110"
            x="-17"
            y="-30"
            width="34"
            height="62"
            overflow="visible"
            aria-hidden="true"
            focusable="false"
        >
            {state === "serpihan" ? (
                SHARDS.map(([x, y, r, s]) => (
                    <polygon
                        key={`${x}-${y}`}
                        points="0,-6 7,4 -5,5"
                        transform={`translate(${x + 8} ${y + 8}) rotate(${r}) scale(${s / 6})`}
                        className="fill-sage-100 stroke-forest-700"
                        strokeWidth="1.5"
                    />
                ))
            ) : (
                <>
                    <rect x="21" y="2" width="18" height="10" rx="3" className="fill-clay-600" />
                    <path
                        d="M23 12 h14 v8 q10 8 10 22 v52 q0 12 -12 12 h-10 q-12 0 -12 -12 v-52 q0 -14 10 -22Z"
                        className="fill-sage-100 stroke-forest-700"
                        strokeWidth="2"
                    />
                    <rect
                        x="13"
                        y="52"
                        width="34"
                        height="20"
                        className="fill-clay-100 stroke-forest-700"
                        strokeWidth="1.5"
                    />
                    {state === "retak" && (
                        <path
                            d="M40 46 l-8 12 l8 10 l-10 14"
                            className="fill-none stroke-forest-800"
                            strokeWidth="2"
                            strokeLinejoin="round"
                        />
                    )}
                </>
            )}
        </svg>
    );
}
