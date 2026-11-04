import Container from "../layout/Container.jsx";
import Reveal from "../ui/Reveal.jsx";
import { homeFacts } from "../../data/homeFacts.js";

export default function FactsStrip() {
    return (
        <section aria-labelledby="judul-fakta" className="border-y border-line bg-ivory-2">
            <Container className="py-12 lg:py-16">
                <h2
                    id="judul-fakta"
                    className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
                >
                    Fakta lingkungan
                </h2>

                <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
                    {homeFacts.map((fact, index) => (
                        <li key={fact.id} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                            <Reveal delay={index * 0.08}>
                                <p className="font-display text-h1 font-medium text-forest-700">
                                    {fact.value}
                                </p>
                                <p className="mt-2 max-w-56 text-sm leading-relaxed text-ink">
                                    {fact.label}
                                </p>
                                <p className="mt-3 text-xs text-ink-muted">
                                    Sumber: {fact.source}, {fact.year}
                                </p>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
