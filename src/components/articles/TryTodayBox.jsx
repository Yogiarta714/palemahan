import { Check } from "lucide-react";
import Button from "../ui/Button.jsx";
import ArrowLink from "../ui/ArrowLink.jsx";
import { useProgress } from "../../hooks/useProgress.js";
import { getChallengeById } from "../../data/challenges.js";

export default function TryTodayBox({ tryToday }) {
    const { progress, startChallenge } = useProgress();

    const challenge = tryToday.challengeId ? getChallengeById(tryToday.challengeId) : null;
    const started = challenge ? Boolean(progress.challenges[challenge.id]) : false;

    return (
        <aside
            id="coba-hari-ini"
            aria-labelledby="judul-coba-hari-ini"
            className="scroll-mt-24 rounded-xl border border-clay-500/40 bg-clay-100 p-6 sm:p-8"
        >
            <h2
                id="judul-coba-hari-ini"
                className="text-xs font-semibold uppercase tracking-widest text-clay-700"
            >
                Coba hari ini
            </h2>
            <p className="mt-3 font-display text-2xl font-medium leading-snug text-forest-800">
                {tryToday.title}
            </p>
            <p className="mt-3 leading-relaxed text-ink">{tryToday.description}</p>

            <div className="mt-6">
                {!challenge && <ArrowLink to="/aksi">Lihat Eco Action</ArrowLink>}

                {challenge && !started && (
                    <>
                        <Button onClick={() => startChallenge(challenge.id)}>
                            Mulai tantangan 7 hari
                        </Button>
                        <p className="mt-3 text-sm text-ink-muted">
                            {challenge.title}. Hari pertama: {challenge.days[0].task}
                        </p>
                    </>
                )}

                {challenge && started && (
                    <div role="status">
                        <p className="flex items-start gap-2 font-semibold text-forest-800">
                            <Check
                                aria-hidden="true"
                                className="mt-0.5 size-5 shrink-0 text-forest-600"
                            />
                            Tantangan “{challenge.title}” sudah kamu mulai.
                        </p>
                        <ArrowLink to="/aksi" className="mt-3">
                            Lanjutkan di Eco Action
                        </ArrowLink>
                    </div>
                )}
            </div>
        </aside>
    );
}
