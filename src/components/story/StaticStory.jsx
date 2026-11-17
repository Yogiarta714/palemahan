import { useMotionValue } from "motion/react";
import Container from "../layout/Container.jsx";
import { chapters } from "../../data/story.js";
import { scenes } from "./StoryScenes.jsx";

// Versi tanpa gerak: lima panel berurutan, ilustrasi diam + teks bab.
export default function StaticStory() {
    const still = useMotionValue(0.5);

    return (
        <div>
            <Container className="pb-4 pt-14">
                <h1 className="font-display text-h1 text-forest-700">Jejak Satu Botol</h1>
                <p className="mt-3 max-w-xl text-ink-muted">
                    Ikuti satu botol plastik dari rumah di Bali sampai ke laut.
                </p>
            </Container>

            {chapters.map((c, i) => {
                const Scene = scenes[i];
                return (
                    <Container
                        key={c.id}
                        className="grid items-center gap-8 py-8 md:grid-cols-2 md:gap-12"
                    >
                        <div
                            role="img"
                            aria-label={c.alt}
                            className="leaf-cut relative aspect-4/3 overflow-hidden border border-line"
                        >
                            <Scene progress={still} />
                        </div>
                        <div className={i % 2 ? "md:order-first" : ""}>
                            <p className="text-xs font-semibold text-clay-600">{c.label}</p>
                            <h2 className="mt-1 font-display text-h2 text-forest-700">{c.title}</h2>
                            {c.beats
                                .filter((bt) => !bt.kind)
                                .map((bt, j) => (
                                    <p
                                        key={j}
                                        className="mt-3 max-w-md leading-relaxed text-ink-muted"
                                    >
                                        {bt.text}
                                    </p>
                                ))}
                            {c.beats
                                .filter((bt) => bt.kind)
                                .map((bt, j) => (
                                    <div
                                        key={j}
                                        className="mt-5 max-w-md border-l-4 border-clay-500 pl-4"
                                    >
                                        <p className="text-xs font-semibold text-clay-700">
                                            {bt.kind === "akibat" ? "Akibatnya" : "Fakta"}
                                        </p>
                                        <p className="mt-1 font-display text-xl text-forest-700">
                                            {bt.title}
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                                            {bt.text}
                                        </p>
                                        {bt.fact && (
                                            <p className="mt-2 text-xs text-ink-muted">
                                                Sumber: {bt.fact.source}, {bt.fact.year}
                                            </p>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </Container>
                );
            })}
        </div>
    );
}
