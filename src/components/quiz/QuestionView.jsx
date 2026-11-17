import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import Button from "../ui/Button.jsx";
import QuizProgress from "./QuizProgress.jsx";
import AnswerOption from "./AnswerOption.jsx";

// Satu soal: progres, pertanyaan, pilihan, lalu umpan balik + penjelasan setelah menjawab
export default function QuestionView({ question, number, total, selected, onSelect, onNext }) {
    const headingRef = useRef(null);
    const feedbackRef = useRef(null);

    const answered = selected !== null;
    const isCorrect = answered && selected === question.correctIndex;
    const isLast = number === total;

    // Saat soal baru muncul, fokus pindah ke pertanyaan
    useEffect(() => {
        headingRef.current?.focus();
    }, []);

    // Setelah menjawab, pastikan umpan balik terlihat
    useEffect(() => {
        if (answered) feedbackRef.current?.scrollIntoView({ block: "nearest" });
    }, [answered]);

    function optionState(index) {
        if (!answered) return "idle";
        if (index === selected) return isCorrect ? "correct" : "wrong";
        if (index === question.correctIndex) return "reveal";
        return "dim";
    }

    return (
        <div>
            <QuizProgress current={number} total={total} />

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-clay-600">
                {question.type === "skenario" ? "Skenario" : "Mitos atau fakta"}
            </p>
            <h2
                ref={headingRef}
                tabIndex={-1}
                className="mt-3 scroll-mt-24 font-display text-2xl font-medium leading-snug text-forest-800 outline-none sm:text-3xl"
            >
                {question.prompt}
            </h2>

            <ul aria-label="Pilihan jawaban" className="mt-8 space-y-3">
                {question.options.map((option, index) => (
                    <li key={option}>
                        <AnswerOption
                            index={index}
                            text={option}
                            state={optionState(index)}
                            answered={answered}
                            onSelect={onSelect}
                        />
                    </li>
                ))}
            </ul>

            {/* Wilayah ini selalu ada, jadi pembaca layar mengumumkan isinya saat jawaban masuk */}
            <div ref={feedbackRef} aria-live="polite" className="mt-8 scroll-mb-24">
                {answered && (
                    <div
                        className={`rounded-xl border p-6 ${
                            isCorrect
                                ? "border-forest-600/40 bg-sage-100"
                                : "border-clay-500/40 bg-clay-100"
                        }`}
                    >
                        <p
                            className={`flex items-center gap-2 font-display text-xl font-medium ${
                                isCorrect ? "text-forest-800" : "text-clay-700"
                            }`}
                        >
                            {isCorrect ? (
                                <Check aria-hidden="true" className="size-5" />
                            ) : (
                                <X aria-hidden="true" className="size-5" />
                            )}
                            {isCorrect ? "Benar!" : "Belum tepat."}
                        </p>
                        <p className="mt-3 leading-relaxed text-ink">{question.explanation}</p>
                        {question.source && (
                            <p className="mt-3 text-xs text-ink-muted">Sumber: {question.source}</p>
                        )}
                    </div>
                )}
            </div>

            {answered && (
                <div className="mt-6">
                    <Button onClick={onNext}>{isLast ? "Lihat hasil" : "Soal berikutnya"}</Button>
                </div>
            )}
        </div>
    );
}
