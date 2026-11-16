import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button.jsx";
import ProgressRing from "./ProgressRing.jsx";
import DayTracker from "./DayTracker.jsx";
import CompletionPanel from "./CompletionPanel.jsx";
import { useProgress } from "../../hooks/useProgress.js";
import { getCategory } from "../../data/categories.js";

// Satu tantangan
export default function ChallengeRow({ challenge, open, onToggle, onOpenOther }) {
    const { progress, startChallenge, completeChallengeDay, resetChallenge } = useProgress();

    const [announcement, setAnnouncement] = useState("");
    const [justCompleted, setJustCompleted] = useState(false);
    const [lastDone, setLastDone] = useState(null);
    const [confirmingReset, setConfirmingReset] = useState(false);

    const state = progress.challenges[challenge.id];
    const total = challenge.days.length;
    const completed = state?.completedDays.length ?? 0;
    const finished = completed >= total;
    const category = getCategory(challenge.category);
    const panelId = `panel-${challenge.id}`;

    let statusText = "Belum dimulai";
    if (state && finished) statusText = `Selesai, ${total} dari ${total} hari`;
    else if (state) statusText = `${completed} dari ${total} hari selesai`;

    function handleStart() {
        startChallenge(challenge.id);
        setAnnouncement("Tantangan dimulai. Hari pertama sudah terbuka.");
    }

    function handleComplete(day) {
        completeChallengeDay(challenge.id, day);
        setLastDone(day);
        setAnnouncement(day === total ? "Tantangan selesai!" : `Hari ${day} ditandai selesai.`);
        if (day === total) setJustCompleted(true);
    }

    function handleReset() {
        resetChallenge(challenge.id);
        setConfirmingReset(false);
        setJustCompleted(false);
        setLastDone(null);
        setAnnouncement("Tantangan diulang dari awal.");
    }

    return (
        <li>
            <h2>
                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={onToggle}
                    className="flex w-full items-center gap-4 py-6 text-left"
                >
                    <ProgressRing value={completed} total={total} />
                    <span className="flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-widest text-clay-600">
                            {category?.name}
                        </span>
                        <span className="mt-1 block font-display text-2xl font-medium text-forest-800">
                            {challenge.title}
                        </span>
                        <span className="mt-1 block text-sm text-ink-muted">{statusText}</span>
                    </span>
                    <ChevronDown
                        aria-hidden="true"
                        className={`size-5 shrink-0 text-ink-muted transition-transform motion-reduce:transition-none ${
                            open ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </h2>

            {open && (
                <div id={panelId} className="pb-10 sm:pl-18">
                    <p role="status" className="sr-only">
                        {announcement}
                    </p>

                    {!state && (
                        <>
                            <p className="max-w-xl leading-relaxed text-ink-muted">
                                {challenge.description}
                            </p>
                            <Button className="mt-6" onClick={handleStart}>
                                Mulai tantangan 7 hari
                            </Button>
                            <div className="mt-8">
                                <DayTracker challenge={challenge} started={false} completed={0} />
                            </div>
                        </>
                    )}

                    {state && (
                        <>
                            {finished && (
                                <CompletionPanel
                                    challenge={challenge}
                                    focusOnMount={justCompleted}
                                    onOpenOther={onOpenOther}
                                />
                            )}
                            <DayTracker
                                challenge={challenge}
                                started
                                completed={completed}
                                justDone={lastDone}
                                onComplete={handleComplete}
                            />

                            <div className="mt-8 border-t border-line pt-5">
                                {!confirmingReset ? (
                                    <button
                                        type="button"
                                        onClick={() => setConfirmingReset(true)}
                                        className="text-sm text-ink-muted underline underline-offset-4 hover:text-forest-700"
                                    >
                                        Ulangi dari awal
                                    </button>
                                ) : (
                                    <div role="alert">
                                        <p className="text-sm text-ink">
                                            Yakin? Semua tanda hari di tantangan ini akan dihapus.
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-3">
                                            <Button variant="outline" onClick={handleReset}>
                                                Ya, ulangi
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                onClick={() => setConfirmingReset(false)}
                                            >
                                                Batal
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            )}
        </li>
    );
}
