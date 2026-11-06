import Container from "../components/layout/Container.jsx";
import QuizListRow from "../components/quiz/QuizListRow.jsx";
import { categories } from "../data/categories.js";
import { getQuizByCategory } from "../data/quizzes.js";
import { useProgress } from "../hooks/useProgress.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function QuizList() {
    usePageTitle("Eco Quiz");
    const { progress } = useProgress();

    return (
        <Container className="py-12 lg:py-16">
            <header className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                    Uji pemahamanmu
                </p>
                <h1 className="mt-3 font-display text-h1 font-medium text-forest-800">Eco Quiz</h1>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                    Soal berbasis situasi sehari-hari, dengan penjelasan singkat di setiap jawaban.
                    Jadi kamu tetap belajar, bahkan saat salah.
                </p>
            </header>

            <ul className="mt-10 divide-y divide-line border-y border-line">
                {categories.map((category) => (
                    <QuizListRow
                        key={category.id}
                        category={category}
                        quiz={getQuizByCategory(category.id)}
                        best={progress.quizResults[category.id]}
                    />
                ))}
            </ul>
        </Container>
    );
}
