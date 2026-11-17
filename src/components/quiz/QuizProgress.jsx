export default function QuizProgress({ current, total }) {
    const percent = Math.round((current / total) * 100);

    return (
        <div>
            <p className="text-sm text-ink-muted">
                Soal <span className="font-semibold text-forest-800">{current}</span> dari {total}
            </p>
            <div
                role="progressbar"
                aria-label="Progres kuis"
                aria-valuemin={1}
                aria-valuemax={total}
                aria-valuenow={current}
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-sage-200"
            >
                <div
                    className="h-full rounded-full bg-forest-600 transition-[width] duration-300 motion-reduce:transition-none"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}
