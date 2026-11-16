import { Check, Lock } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function DayTracker({ challenge, started, completed, justDone = null, onComplete }) {
    function statusOf(day) {
        if (!started) return "preview";
        if (day <= completed) return "done";
        if (day === completed + 1) return "next";
        return "locked";
    }

    const circleStyles = {
        preview: "border-line bg-ivory text-ink-muted",
        done: "border-forest-600 bg-forest-600 text-white",
        next: "border-clay-600 bg-ivory text-clay-700",
        locked: "border-line bg-ivory-2 text-ink-muted",
    };
    const labels = { preview: "Tugas", done: "Selesai", next: "Giliranmu", locked: "Terkunci" };

    return (
        <ol className="mt-2">
            {challenge.days.map((item) => {
                const status = statusOf(item.day);
                return (
                    <li
                        key={item.day}
                        className="relative pb-8 pl-14 before:absolute before:bottom-0 before:left-4.5 before:top-10 before:w-px before:bg-line last:pb-0 last:before:hidden"
                    >
                        <span
                            aria-hidden="true"
                            className={`absolute left-0 top-0 flex size-9 items-center justify-center rounded-full border-2 text-sm font-semibold motion-reduce:animate-none ${circleStyles[status]} ${
                                item.day === justDone ? "animate-pop" : ""
                            }`}
                        >
                            {status === "done" && <Check className="size-4" />}
                            {status === "locked" && <Lock className="size-4" />}
                            {(status === "next" || status === "preview") && item.day}
                        </span>

                        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                            Hari {item.day} · {labels[status]}
                        </p>
                        <p
                            className={`mt-1 text-lg leading-snug ${
                                status === "locked" ? "text-ink-muted" : "text-ink"
                            }`}
                        >
                            {item.task}
                        </p>
                        {status !== "locked" && item.tip && (
                            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                                {item.tip}
                            </p>
                        )}

                        {status === "next" && (
                            <Button className="mt-4" onClick={() => onComplete(item.day)}>
                                Tandai selesai
                            </Button>
                        )}
                    </li>
                );
            })}
        </ol>
    );
}
