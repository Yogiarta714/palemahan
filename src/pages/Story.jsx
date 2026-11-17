import { Link } from "react-router";
import { useReducedMotion } from "motion/react";
import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import StoryStage from "../components/story/StoryStage.jsx";
import StaticStory from "../components/story/StaticStory.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { actions, chapters } from "../data/story.js";

const akibatOf = (c) => c.beats.find((bt) => bt.kind === "akibat");

// Ringkasan teks 5 bab + tiga aksi. Juga menjadi tujuan tombol "Lewati ke ringkasan".
function StoryClosing() {
    return (
        <section id="ringkasan" className="scroll-mt-20 bg-ivory-2 py-20">
            <Container>
                <h2 className="font-display text-h2 text-forest-700">
                    Perjalanan ini bisa berbeda.
                </h2>

                <ol className="mt-8 max-w-2xl space-y-3 text-ink-muted">
                    {chapters.map((c) => (
                        <li key={c.id}>
                            <span className="font-semibold text-forest-700">{c.title}.</span>{" "}
                            {c.ringkas}
                            {akibatOf(c) && <> Akibatnya: {akibatOf(c).text}</>}
                        </li>
                    ))}
                </ol>

                <ul className="mt-12 grid gap-5 md:grid-cols-3">
                    {actions.map((a) => (
                        <li key={a.title} className="leaf-cut border border-line bg-ivory p-6">
                            <h3 className="font-display text-xl text-forest-700">{a.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.text}</p>
                            {a.fact && (
                                <p className="mt-3 text-xs text-ink-muted">
                                    {a.fact.text} Sumber: {a.fact.source}, {a.fact.year}.
                                </p>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Button to="/aksi">Mulai Tantangan 7 Hari</Button>
                    <Link
                        to="/kuis"
                        className="inline-flex items-center rounded-full border border-forest-600 px-5 py-2.5 text-sm font-semibold text-forest-700 transition hover:bg-forest-50"
                    >
                        Uji pemahamanmu
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default function Story() {
    usePageTitle("Jejak Satu Botol");
    const reduceMotion = useReducedMotion();

    return (
        <>
            {reduceMotion ? (
                <StaticStory />
            ) : (
                <>
                    <h1 className="sr-only">Jejak Satu Botol</h1>
                    <StoryStage />
                </>
            )}
            <StoryClosing />
        </>
    );
}
