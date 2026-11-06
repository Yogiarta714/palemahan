import { Check, X } from "lucide-react";

const letters = ["A", "B", "C", "D"];

const styles = {
    idle: "border-line bg-ivory hover:border-forest-400 hover:bg-forest-50", // belum dijawab
    correct: "border-forest-600 bg-forest-50", // jawaban benar
    wrong: "border-clay-600 bg-clay-100", // jawaban salah
    reveal: "border-forest-600 bg-forest-50", // jawaban yang benar saat salah
    dim: "border-line bg-ivory opacity-60", // pilihan lain setelah jawab
};

const labels = { correct: "Benar", wrong: "Salah", reveal: "Jawaban yang benar" };

export default function AnswerOption({ index, text, state, answered, onSelect }) {
    const label = labels[state];

    return (
        <button
            type="button"
            onClick={() => {
                if (!answered) onSelect(index);
            }}
            aria-disabled={answered}
            className={`flex w-full items-start gap-4 rounded-xl border-2 p-4 text-left transition-colors ${styles[state]} ${
                answered ? "cursor-default" : "cursor-pointer"
            }`}
        >
            <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-forest-600 text-sm font-semibold text-forest-700"
            >
                {letters[index]}
            </span>
            <span className="flex-1 pt-1">
                <span className="block leading-relaxed text-ink">{text}</span>
                {label && (
                    <span
                        className={`mt-2 flex items-center gap-1 text-sm font-semibold ${
                            state === "wrong" ? "text-clay-700" : "text-forest-700"
                        }`}
                    >
                        {state === "wrong" ? (
                            <X aria-hidden="true" className="size-4" />
                        ) : (
                            <Check aria-hidden="true" className="size-4" />
                        )}
                        {label}
                    </span>
                )}
            </span>
        </button>
    );
}
