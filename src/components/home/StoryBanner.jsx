import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import ContourPattern from "../ui/ContourPattern.jsx";

export default function StoryBanner() {
    return (
        <section aria-labelledby="judul-cerita" className="relative overflow-hidden bg-forest-800">
            <ContourPattern
                seed={2}
                className="pointer-events-none absolute inset-0 h-full w-full text-forest-600/70"
            />
            <Container className="relative py-20 lg:py-28">
                <Reveal>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sage-300">
                        Cerita interaktif
                    </p>
                    <h2
                        id="judul-cerita"
                        className="mt-3 max-w-2xl font-display text-h1 font-medium text-ivory"
                    >
                        Ke mana perginya satu botol plastik?
                    </h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-sage-200">
                        Ikuti perjalanan satu botol plastik dari dapur hingga ke laut, lalu temukan
                        apa yang bisa kamu ubah di tiap langkahnya.
                    </p>
                    <Button to="/cerita/jejak-botol" variant="accent" className="mt-8">
                        Mulai Cerita
                    </Button>
                </Reveal>
            </Container>
        </section>
    );
}
