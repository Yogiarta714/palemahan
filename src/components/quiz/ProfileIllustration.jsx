import { motion } from "motion/react";

// Satu daun: pangkal di titik (0,0), ujung menghadap ke atas. Diputar dan diskalakan lewat transform.
const LEAF = "M0 0C-7 -8 -7 -21 0 -30C7 -21 7 -8 0 0Z";

function Leaf({ x, y, angle, scale = 1, className }) {
    return (
        <path
            d={LEAF}
            transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}
            className={className}
        />
    );
}

function Ground() {
    return (
        <>
            <path d="M0 146Q60 132 120 142T240 138V180H0Z" className="fill-sage-300" />
            <path d="M0 158Q70 146 130 154T240 152V180H0Z" className="fill-sage-400" />
            <path d="M0 168Q60 160 120 166T240 164V180H0Z" className="fill-forest-400" />
        </>
    );
}

function Tree({ x, base, scale, canopy, trunk = "fill-clay-700" }) {
    return (
        <g transform={`translate(${x} ${base}) scale(${scale})`}>
            <rect x="-3" y="-24" width="6" height="24" className={trunk} />
            <circle cx="0" cy="-38" r="17" className={canopy} />
            <circle cx="-10" cy="-30" r="11" className={canopy} />
            <circle cx="10" cy="-30" r="11" className={canopy} />
        </g>
    );
}

function Tunas() {
    return (
        <>
            <path
                d="M120 144Q118 118 121 98"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                className="stroke-forest-600"
            />
            <Leaf x={121} y={100} angle={-58} scale={1.3} className="fill-forest-400" />
            <Leaf x={121} y={102} angle={54} scale={1.45} className="fill-forest-500" />
        </>
    );
}

const bibitLeaves = [
    { y: 112, angle: -62, scale: 1, className: "fill-forest-400" },
    { y: 112, angle: 62, scale: 1, className: "fill-forest-500" },
    { y: 94, angle: -52, scale: 1.1, className: "fill-forest-500" },
    { y: 94, angle: 52, scale: 1.1, className: "fill-forest-400" },
    { y: 76, angle: -38, scale: 1, className: "fill-forest-400" },
    { y: 76, angle: 38, scale: 1, className: "fill-forest-300" },
    { y: 64, angle: 0, scale: 0.9, className: "fill-forest-500" },
];

function Bibit() {
    return (
        <>
            <path
                d="M120 146Q118 108 121 66"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                className="stroke-forest-700"
            />
            {bibitLeaves.map((leaf) => (
                <Leaf key={`${leaf.y}-${leaf.angle}`} x={120} {...leaf} />
            ))}
        </>
    );
}

function Pohon() {
    return (
        <>
            <path d="M112 148Q116 122 114 96H127Q125 122 129 148Z" className="fill-clay-700" />
            <circle cx="94" cy="86" r="30" className="fill-forest-500" />
            <circle cx="148" cy="88" r="30" className="fill-forest-400" />
            <circle cx="121" cy="60" r="38" className="fill-forest-600" />
            <circle cx="121" cy="94" r="28" className="fill-forest-500" />
            <circle cx="104" cy="48" r="10" className="fill-forest-300" opacity="0.7" />
        </>
    );
}

// Hutan: tiga lapis pohon, yang jauh lebih terang dan kecil
const hutanTrees = [
    { x: 20, base: 142, scale: 0.9, canopy: "fill-forest-300" },
    { x: 72, base: 140, scale: 0.85, canopy: "fill-forest-300" },
    { x: 124, base: 141, scale: 0.9, canopy: "fill-forest-300" },
    { x: 176, base: 140, scale: 0.85, canopy: "fill-forest-300" },
    { x: 224, base: 141, scale: 0.9, canopy: "fill-forest-300" },
    { x: 46, base: 150, scale: 1.25, canopy: "fill-forest-400" },
    { x: 150, base: 150, scale: 1.3, canopy: "fill-forest-500" },
    { x: 100, base: 156, scale: 1.7, canopy: "fill-forest-600" },
    { x: 205, base: 158, scale: 1.45, canopy: "fill-forest-700" },
    { x: 14, base: 162, scale: 1.3, canopy: "fill-forest-700" },
];

function Hutan() {
    return (
        <>
            {hutanTrees.map((tree) => (
                <Tree key={`${tree.x}-${tree.base}`} {...tree} />
            ))}
        </>
    );
}

const plants = { tunas: Tunas, bibit: Bibit, pohon: Pohon, hutan: Hutan };
const labels = {
    tunas: "Ilustrasi tunas kecil yang baru tumbuh dari tanah",
    bibit: "Ilustrasi bibit pohon dengan beberapa pasang daun",
    pohon: "Ilustrasi pohon rindang dengan tajuk hijau",
    hutan: "Ilustrasi hutan dengan banyak pohon bertingkat",
};

export default function ProfileIllustration({ profileId, className = "" }) {
    const Plant = plants[profileId] ?? Tunas;

    return (
        <svg
            viewBox="0 0 240 180"
            role="img"
            aria-label={labels[profileId] ?? labels.tunas}
            className={`overflow-hidden rounded-2xl bg-sage-100 ${className}`}
        >
            <circle cx="190" cy="44" r="14" className="fill-clay-500" />
            {/* Tanaman tumbuh dari tanah: membesar dari dasarnya */}
            <motion.g
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.4, 0.64, 1] }}
                className="origin-bottom transform-fill"
            >
                <Plant />
            </motion.g>
            <Ground />
        </svg>
    );
}
