import { Link } from "react-router";

export default function QuizListRow({ category, quiz, best }) {
    const available = Boolean(quiz) && quiz.questions.length > 0;

    return (
        <li
            className={`relative flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 ${
                available ? "group" : "opacity-70"
            }`}
        >
            <div>
                <h2 className="font-display text-2xl font-medium text-forest-800 lg:text-3xl">
                    {available ? (
                        <Link
                            to={`/kuis/${category.id}`}
                            className="decoration-clay-500 decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                        >
                            {category.name}
                        </Link>
                    ) : (
                        category.name
                    )}
                </h2>
                <p className="mt-2 max-w-xl text-ink-muted">{category.description}</p>
            </div>

            <div className="shrink-0 text-sm sm:text-right">
                {available ? (
                    <>
                        <p className="font-semibold text-forest-800">
                            {quiz.questions.length} soal
                        </p>
                        <p className="mt-1 text-ink-muted">
                            {best ? `Skor terbaik ${best.best}/${best.total}` : "Belum dicoba"}
                        </p>
                    </>
                ) : (
                    <p className="font-semibold text-ink-muted">Segera hadir</p>
                )}
            </div>
        </li>
    );
}
