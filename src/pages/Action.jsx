import { useRef, useState } from "react";
import { useSearchParams } from "react-router";
import Container from "../components/layout/Container.jsx";
import JourneySummary from "../components/action/JourneySummary.jsx";
import ChallengeRow from "../components/action/ChallengeRow.jsx";
import { challenges } from "../data/challenges.js";
import { useProgress } from "../hooks/useProgress.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Action() {
    usePageTitle("Eco Action");
    const { progress } = useProgress();
    const [params] = useSearchParams();
    const listRef = useRef(null);

    const [openId, setOpenId] = useState(() => {
        const fromUrl = params.get("tantangan");
        if (challenges.some((challenge) => challenge.id === fromUrl)) return fromUrl;
        const inProgress = challenges.find((challenge) => {
            const state = progress.challenges[challenge.id];
            return state && state.completedDays.length < challenge.days.length;
        });
        return inProgress ? inProgress.id : null;
    });

    function openOther() {
        setOpenId(null);
        listRef.current?.scrollIntoView({ block: "start" });
    }

    return (
        <Container className="py-12 lg:py-16">
            <header className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                    Dari tahu menjadi bertindak
                </p>
                <h1 className="mt-3 font-display text-h1 font-medium text-forest-800">
                    Eco Action
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                    Pilih satu tantangan. Setiap hari hanya ada satu tugas kecil, dan hari
                    berikutnya terbuka setelah kamu menandai hari sebelumnya.
                </p>
            </header>

            <div className="mt-10">
                <JourneySummary />
            </div>

            <ul
                ref={listRef}
                className="mt-10 scroll-mt-24 divide-y divide-line border-y border-line"
            >
                {challenges.map((challenge) => (
                    <ChallengeRow
                        key={challenge.id}
                        challenge={challenge}
                        open={openId === challenge.id}
                        onToggle={() => setOpenId(openId === challenge.id ? null : challenge.id)}
                        onOpenOther={openOther}
                    />
                ))}
            </ul>
        </Container>
    );
}
