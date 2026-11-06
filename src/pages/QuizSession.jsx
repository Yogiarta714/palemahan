import { useParams } from "react-router";
import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import QuizRunner from "../components/quiz/QuizRunner.jsx";
import NotFound from "./NotFound.jsx";
import { getCategory } from "../data/categories.js";
import { getQuizByCategory } from "../data/quizzes.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function QuizSession() {
    const { kategori } = useParams();
    const category = getCategory(kategori);
    const quiz = getQuizByCategory(kategori);

    usePageTitle(category ? `Eco Quiz: ${category.name}` : "Halaman tidak ditemukan");

    // Kategori yang tidak dikenal
    if (!category) return <NotFound />;

    // Kategori ada, tapi kuisnya belum ditulis
    if (!quiz || quiz.questions.length === 0) {
        return (
            <Container className="py-24 text-center lg:py-32">
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                    Segera hadir
                </p>
                <h1 className="mt-3 font-display text-h1 font-medium text-forest-800">
                    Kuis {category.name} belum tersedia
                </h1>
                <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                    Kuis ini masih disiapkan. Sementara itu, coba kuis lain atau baca artikelnya
                    dulu.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Button to="/kuis">Lihat semua kuis</Button>
                    <Button to={`/jelajahi?kategori=${category.id}`} variant="outline">
                        Baca artikel
                    </Button>
                </div>
            </Container>
        );
    }

    return <QuizRunner key={quiz.category} quiz={quiz} category={category} />;
}
