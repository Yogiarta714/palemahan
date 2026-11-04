const SKELETON = "M20 56V12H36A15 15 0 0 1 36 42H20";

const darkBands = [
    [16, "stroke-sage-200"],
    [12.5, "stroke-sage-400"],
    [9, "stroke-forest-400"],
    [5.5, "stroke-forest-500"],
    [2, "stroke-ivory"],
];

const variants = {
    // latar terang
    full: {
        bands: [
            [16, "stroke-forest-800"],
            [12.5, "stroke-forest-600"],
            [9, "stroke-forest-500"],
            [5.5, "stroke-forest-400"],
            [2, "stroke-sage-200"],
        ],
        dot: "fill-clay-500",
    },
    // latar gelap
    fullDark: { bands: darkBands, dot: "fill-clay-500" },
    // Garis satu warna
    line: {
        bands: [
            [16, "stroke-forest-800"],
            [13.2, "stroke-ivory"],
            [10.4, "stroke-forest-800"],
            [7.6, "stroke-ivory"],
            [4.8, "stroke-forest-800"],
            [2, "stroke-ivory"],
        ],
        dot: "fill-forest-800",
    },
    // Garis terbalik
    lineDark: {
        bands: [
            [16, "stroke-ivory"],
            [13.2, "stroke-forest-800"],
            [10.4, "stroke-ivory"],
            [7.6, "stroke-forest-800"],
            [4.8, "stroke-ivory"],
            [2, "stroke-forest-800"],
        ],
        dot: "fill-ivory",
    },
    // Badge bulat
    badge: { bands: darkBands, dot: "fill-clay-500" },
};

export function LogoMark({ variant = "full", className = "", title }) {
    const { bands, dot } = variants[variant];
    const isBadge = variant === "badge";

    return (
        <svg
            viewBox={isBadge ? "0 0 64 64" : "7 3 50 54"}
            className={className}
            role={title ? "img" : undefined}
            aria-hidden={title ? undefined : "true"}
            focusable="false"
        >
            {title && <title>{title}</title>}

            {isBadge && (
                <>
                    <circle cx="32" cy="32" r="31" className="fill-forest-800" />
                    <circle
                        cx="32"
                        cy="32"
                        r="28.5"
                        fill="none"
                        strokeWidth="0.8"
                        className="stroke-sage-400"
                    />
                </>
            )}

            <g transform={isBadge ? "translate(10.76 11.4) scale(0.72)" : undefined}>
                <g transform="translate(-3.5 0)">
                    {bands.map(([width, bandClass]) => (
                        <path
                            key={width}
                            d={SKELETON}
                            fill="none"
                            strokeWidth={width}
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                            className={bandClass}
                        />
                    ))}
                    <circle cx="35.5" cy="27" r="3.6" className={dot} />
                </g>
            </g>
        </svg>
    );
}

const sizes = {
    md: { mark: "h-9", name: "text-2xl" },
    lg: { mark: "h-12", name: "text-3xl" },
};

export default function Logo({ tone = "light", size = "md", showTagline = false, className = "" }) {
    const dark = tone === "dark";

    return (
        <span className={`inline-flex items-center gap-3 ${className}`}>
            <LogoMark
                variant={dark ? "fullDark" : "full"}
                className={`${sizes[size].mark} w-auto shrink-0`}
            />
            <span className="flex flex-col">
                <span
                    className={`font-display font-semibold leading-none tracking-tight ${sizes[size].name} ${
                        dark ? "text-ivory" : "text-forest-800"
                    }`}
                >
                    Palemahan
                </span>
                {showTagline && (
                    <span
                        className={`mt-1.5 text-[0.625rem] font-medium uppercase tracking-[0.18em] ${
                            dark ? "text-sage-300" : "text-ink-muted"
                        }`}
                    >
                        Edukasi lingkungan dari Bali
                    </span>
                )}
            </span>
        </span>
    );
}
