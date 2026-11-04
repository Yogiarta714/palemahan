import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import ArrowLink from "../ui/ArrowLink.jsx";
import Reveal from "../ui/Reveal.jsx";

const steps = [
    {
        number: "01",
        name: "Learn",
        description:
            "Pahami isu lingkungan lewat artikel ringkas yang selalu dimulai dari kasus nyata di Bali.",
        to: "/jelajahi",
        cta: "Mulai belajar",
        offset: "",
    },
    {
        number: "02",
        name: "Test",
        description:
            "Uji pemahamanmu lewat Eco Quiz berbasis skenario sehari-hari, lengkap dengan penjelasan tiap jawaban.",
        to: "/kuis",
        cta: "Coba Eco Quiz",
        offset: "lg:mt-12",
    },
    {
        number: "03",
        name: "Act",
        description: "Ubah pengetahuan menjadi kebiasaan lewat tantangan 7 hari di Eco Action.",
        to: "/aksi",
        cta: "Mulai Eco Action",
        offset: "lg:mt-24",
    },
];

export default function LearnTestAct() {
    return (
        <section aria-labelledby="judul-alur" className="py-20 lg:py-28">
            <Container>
                <SectionHeading
                    label="Cara belajar di Palemahan"
                    title="Dari tahu menjadi bertindak"
                    titleId="judul-alur"
                >
                    Tiga langkah yang saling terhubung: belajar, menguji, lalu beraksi.
                </SectionHeading>

                <ol className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
                    {steps.map((step, index) => (
                        <li key={step.name} className={step.offset}>
                            <Reveal delay={index * 0.1}>
                                <div className="border-t border-forest-800 pt-6">
                                    <p className="font-display text-5xl text-sage-300">
                                        {step.number}
                                    </p>
                                    <h3 className="mt-3 font-display text-3xl font-medium text-forest-800">
                                        {step.name}
                                    </h3>
                                    <p className="mt-3 max-w-sm leading-relaxed text-ink-muted">
                                        {step.description}
                                    </p>
                                    <ArrowLink to={step.to} className="mt-5">
                                        {step.cta}
                                    </ArrowLink>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
