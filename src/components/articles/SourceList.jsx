export default function SourceList({ sources }) {
    if (!sources || sources.length === 0) return null;

    return (
        <section aria-labelledby="judul-sumber">
            <h2
                id="judul-sumber"
                className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
            >
                Sumber dan referensi
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-ink-muted">
                {sources.map((source) => (
                    <li key={source.label}>
                        {source.url ? (
                            <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-forest-700 underline decoration-clay-500 underline-offset-4"
                            >
                                {source.label}
                                <span className="sr-only"> (membuka tab baru)</span>
                            </a>
                        ) : (
                            source.label
                        )}
                    </li>
                ))}
            </ol>
        </section>
    );
}
