import { useProgress } from "../../hooks/useProgress.js";
import { calculateStreak } from "../../lib/streak.js";
import { challenges } from "../../data/challenges.js";

// Eco Journey: ringkasan progres gabungan dari semua fitur
export default function JourneySummary() {
    const { progress } = useProgress();

    const finishedChallenges = challenges.filter(
        (challenge) =>
            (progress.challenges[challenge.id]?.completedDays.length ?? 0) >= challenge.days.length,
    ).length;

    const stats = [
        { label: "Runtun hari", value: calculateStreak(progress), note: "berturut-turut" },
        { label: "Artikel dibaca", value: progress.articlesRead.length },
        { label: "Kuis dikerjakan", value: Object.keys(progress.quizResults).length },
        {
            label: "Tantangan selesai",
            value: finishedChallenges,
            note: `dari ${challenges.length}`,
        },
    ];

    return (
        <section aria-labelledby="judul-journey" className="rounded-xl bg-ivory-2 p-6 sm:p-8">
            <h2
                id="judul-journey"
                className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
            >
                Eco Journey-mu
            </h2>
            <dl className="mt-6 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
                {stats.map((stat) => (
                    <div key={stat.label} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                        <dt className="text-sm text-ink-muted">{stat.label}</dt>
                        <dd className="mt-1 font-display text-4xl font-medium text-forest-800">
                            {stat.value}
                            {stat.note && (
                                <span className="ml-2 font-sans text-sm text-ink-muted">
                                    {stat.note}
                                </span>
                            )}
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
