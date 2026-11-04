export default function SectionHeading({ label, title, titleId, children, className = "" }) {
    return (
        <div className={className}>
            {label && (
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                    {label}
                </p>
            )}
            <h2
                id={titleId}
                className="mt-3 max-w-2xl font-display text-h2 font-medium text-forest-800"
            >
                {title}
            </h2>
            {children && (
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">{children}</p>
            )}
        </div>
    );
}
