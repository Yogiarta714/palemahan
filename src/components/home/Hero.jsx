import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import ContourPattern from "../ui/ContourPattern.jsx";
import HeroVisual from "./HeroVisual.jsx";

// Foto hero belum final. Kalau sudah ada, ganti null dengan objek seperti ini:
//   import heroPhoto from '../../assets/images/hero-beranda.webp'
//   const heroImage = {
//     src: heroPhoto, alt: 'Deskripsi foto', width: 1200, height: 1500,
//     caption: 'Keterangan jujur (lokasi sebenarnya)', credit: 'Foto: Nama / Unsplash',
//   }
const heroImage = null;

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <ContourPattern className="pointer-events-none absolute -left-32 -top-20 size-144 text-line" />

            <Container className="relative grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
                <div>
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                            Edukasi lingkungan dari Bali
                        </p>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h1 className="mt-4 font-display text-display font-medium tracking-tight text-forest-800">
                            Learn Today, Protect Tomorrow.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                            Palemahan mengajak generasi muda memahami isu lingkungan, dimulai dari
                            Bali, menguji pemahaman lewat kuis, lalu mengubahnya menjadi aksi nyata
                            sehari-hari.
                        </p>
                    </Reveal>
                    <Reveal delay={0.24}>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button to="/jelajahi">Mulai Belajar</Button>
                            <Button to="/peta-bali" variant="outline">
                                Lihat Peta Bali
                            </Button>
                        </div>
                    </Reveal>
                </div>

                {/* Di mobile, gambar tampil di atas teks */}
                <div className="order-first lg:order-last">
                    <HeroVisual image={heroImage} />
                </div>
            </Container>
        </section>
    );
}
