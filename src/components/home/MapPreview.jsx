import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import ContourPattern from "../ui/ContourPattern.jsx";
import { hotspots } from "../../data/hotspots.js";
import { getCategory } from "../../data/categories.js";

export default function MapPreview() {
    return (
        <section aria-labelledby="judul-peta" className="bg-ivory-2 py-20 lg:py-28">
            <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div>
                    <SectionHeading
                        label="Peta Eco Bali"
                        title="Isu lingkungan, titik demi titik"
                        titleId="judul-peta"
                    >
                        Jelajahi {hotspots.length} lokasi di Bali yang menyimpan cerita lingkungan,
                        dari pesisir sampai hutan dan sawah berundak. Tiap titik membawamu ke
                        artikel, kuis, dan aksi yang terkait.
                    </SectionHeading>
                    <Button to="/peta-bali" className="mt-8">
                        Jelajahi Peta
                    </Button>
                </div>

                <Reveal>
                    <div className="relative overflow-hidden rounded-xl bg-forest-800 p-6 sm:p-8">
                        <ContourPattern
                            seed={3}
                            className="absolute inset-0 h-full w-full text-forest-600"
                        />
                        <ul className="relative divide-y divide-forest-600/60">
                            {hotspots.map((spot) => (
                                <li key={spot.id} className="flex items-center gap-4 py-4">
                                    <span
                                        aria-hidden="true"
                                        className="size-2.5 shrink-0 rounded-full bg-clay-500"
                                    />
                                    <div>
                                        <p className="font-display text-xl text-ivory">
                                            {spot.name}
                                        </p>
                                        <p className="text-sm text-sage-300">
                                            {spot.regency} · {getCategory(spot.category)?.short}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
