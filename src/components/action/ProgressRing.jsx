// Lingkaran progres: berapa hari yang sudah selesai dari total.
export default function ProgressRing({ value, total }) {
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - (total === 0 ? 0 : value / total));

    return (
        <div className="relative size-14 shrink-0">
            <svg
                viewBox="0 0 56 56"
                role="img"
                aria-label={`${value} dari ${total} hari selesai`}
                className="size-14 -rotate-90"
            >
                <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    strokeWidth="5"
                    className="stroke-sage-200"
                />
                <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="stroke-forest-600 transition-[stroke-dashoffset] duration-500 motion-reduce:transition-none"
                />
            </svg>
            <span
                aria-hidden="true"
                className="absolute inset-0 grid place-items-center text-xs font-semibold text-forest-800"
            >
                {value}/{total}
            </span>
        </div>
    );
}
