import { Check } from "lucide-react";

// Ringkasan
export default function Takeaways({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <section
            aria-labelledby="judul-singkatnya"
            className="rounded-xl border border-line bg-ivory-2 p-6 sm:p-8"
        >
            <h2
                id="judul-singkatnya"
                className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
            >
                Singkatnya
            </h2>
            <ul className="mt-4 space-y-3">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed text-ink">
                        <Check
                            aria-hidden="true"
                            className="mt-1 size-5 shrink-0 text-forest-600"
                        />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
