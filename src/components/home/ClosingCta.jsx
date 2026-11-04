import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import ContourPattern from "../ui/ContourPattern.jsx";

export default function ClosingCta() {
    return (
        <section aria-labelledby="judul-cta" className="relative overflow-hidden bg-sage-100">
            <ContourPattern
                seed={7}
                className="pointer-events-none absolute inset-0 h-full w-full text-sage-300"
            />
            <Container className="relative py-20 text-center lg:py-28">
                <Reveal>
                    <h2
                        id="judul-cta"
                        className="mx-auto max-w-2xl font-display text-h1 font-medium text-forest-800"
                    >
                        Mulai dari satu langkah kecil hari ini.
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                        Pelajari satu isu, uji pemahamanmu, lalu coba satu kebiasaan baru.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Button to="/jelajahi">Mulai Belajar</Button>
                        <Button to="/aksi" variant="outline">
                            Lihat Eco Action
                        </Button>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
