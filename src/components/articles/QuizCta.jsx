import Container from "../layout/Container.jsx";
import Button from "../ui/Button.jsx";

export default function QuizCta({ category, hasQuiz }) {
    return (
        <section aria-labelledby="judul-kuis-artikel" className="bg-forest-800 py-16 lg:py-20">
            <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sage-300">
                        Eco Quiz
                    </p>
                    <h2
                        id="judul-kuis-artikel"
                        className="mt-3 max-w-xl font-display text-h2 font-medium text-ivory"
                    >
                        Seberapa paham kamu soal {category.name.toLowerCase()}?
                    </h2>
                    <p className="mt-3 max-w-xl text-sage-200">
                        Uji pemahamanmu lewat skenario sehari-hari, lengkap dengan penjelasan tiap
                        jawaban.
                    </p>
                </div>
                <Button
                    to={hasQuiz ? `/kuis/${category.id}` : "/kuis"}
                    variant="accent"
                    className="shrink-0"
                >
                    Uji pemahamanmu
                </Button>
            </Container>
        </section>
    );
}
