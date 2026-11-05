export default function KeyFacts({ facts }) {
    if (!facts || facts.length === 0) return null;

    return (
        <aside
            aria-labelledby="judul-fakta-penting"
            className="rounded-r-xl border-l-4 border-forest-600 bg-sage-100 p-6 sm:p-8"
        >
            <h2
                id="judul-fakta-penting"
                className="text-xs font-semibold uppercase tracking-widest text-forest-700"
            >
                Fakta penting
            </h2>
            <ul className="mt-4 space-y-5">
                {facts.map((fact) => (
                    <li key={fact.text}>
                        <p className="font-display text-xl leading-snug text-forest-800">
                            {fact.text}
                        </p>
                        <p className="mt-1 text-xs text-ink-muted">
                            Sumber: {fact.source}, {fact.year}
                        </p>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
