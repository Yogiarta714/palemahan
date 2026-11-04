const TWO_PI = Math.PI * 2;

function ringPath(cx, cy, radius, seed) {
    const steps = 18;
    const points = [];
    for (let i = 0; i < steps; i++) {
        const angle = (i / steps) * TWO_PI;
        const wobble =
            1 +
            0.11 * Math.sin(2 * angle + seed) +
            0.07 * Math.sin(3 * angle + seed * 1.7) +
            0.04 * Math.sin(5 * angle + seed * 2.3);
        points.push([
            cx + Math.cos(angle) * radius * wobble * 1.2,
            cy + Math.sin(angle) * radius * wobble,
        ]);
    }

    const n = points.length;
    const f = (value) => value.toFixed(1);
    let d = `M${f(points[0][0])} ${f(points[0][1])}`;
    for (let i = 0; i < n; i++) {
        const p0 = points[(i - 1 + n) % n];
        const p1 = points[i];
        const p2 = points[(i + 1) % n];
        const p3 = points[(i + 2) % n];
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
    }
    return `${d}Z`;
}

export default function ContourPattern({ className = "", rings = 9, seed = 1 }) {
    const paths = Array.from({ length: rings }, (_, i) =>
        ringPath(50, 50, 6 + i * 6.5, seed + i * 0.35),
    );

    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            focusable="false"
            className={className}
        >
            <g fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
                {paths.map((d, i) => (
                    <path key={i} d={d} vectorEffect="non-scaling-stroke" />
                ))}
            </g>
        </svg>
    );
}
