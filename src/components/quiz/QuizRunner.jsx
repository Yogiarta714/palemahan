import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Container from "../layout/Container.jsx";
import QuestionView from "./QuestionView.jsx";
import QuizResult from "./QuizResult.jsx";
import { useProgress } from "../../hooks/useProgress.js";
import { getProfile } from "../../lib/quiz.js";
import { articles } from "../../data/articles.js";
import { challenges } from "../../data/challenges.js";

// Menjalankan satu sesi kuis: soal demi soal, lalu hasil
export default function QuizRunner({ quiz, category }) {
    const { progress, saveQuizResult } = useProgress();

    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null); // nomor opsi yang dipilih di soal ini
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(null); // null = masih mengerjakan

    const total = quiz.questions.length;
    const question = quiz.questions[index];

    function handleSelect(optionIndex) {
        setSelected(optionIndex);
        if (optionIndex === question.correctIndex) setScore((value) => value + 1);
    }

    function handleNext() {
        if (index < total - 1) {
            setIndex(index + 1);
            setSelected(null);
            return;
        }
        // soal terakhir, catat skor (skor terbaik dijaga di dalam saveQuizResult)
        const previousBest = progress.quizResults[category.id]?.best ?? null;
        saveQuizResult(category.id, score, total);
        setResult({ score, previousBest });
    }

    function handleRetry() {
        setIndex(0);
        setSelected(null);
        setScore(0);
        setResult(null);
    }

    const recommendedArticles = [
        ...articles.filter((item) => item.category === category.id),
        ...articles.filter((item) => item.category !== category.id),
    ].slice(0, 2);
    const challenge = challenges.find((item) => item.category === category.id) ?? challenges[0];

    return (
        <Container className="py-10 lg:py-16">
            <div className="mx-auto max-w-2xl">
                <Link
                    to="/kuis"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-muted underline-offset-4 hover:underline"
                >
                    <ArrowLeft aria-hidden="true" className="size-4" />
                    Semua kuis
                </Link>

                {result ? (
                    <QuizResult
                        quizTitle={quiz.title}
                        score={result.score}
                        total={total}
                        previousBest={result.previousBest}
                        profile={getProfile(result.score, total)}
                        articles={recommendedArticles}
                        challenge={challenge}
                        onRetry={handleRetry}
                    />
                ) : (
                    <>
                        <h1 className="mb-6 text-sm font-semibold text-forest-800">{quiz.title}</h1>
                        <QuestionView
                            key={question.id}
                            question={question}
                            number={index + 1}
                            total={total}
                            selected={selected}
                            onSelect={handleSelect}
                            onNext={handleNext}
                        />
                    </>
                )}
            </div>
        </Container>
    );
}
