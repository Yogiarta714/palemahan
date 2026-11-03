import { useCallback, useEffect, useMemo, useState } from "react";
import { ProgressContext } from "./progressContext.js";
import { createDefaultProgress, loadProgress, saveProgress } from "../lib/storage.js";

const CHALLENGE_LENGTH = 7;

export default function ProgressProvider({ children }) {
    // Fungsi loadProgress dijalankan sekali saat pertama render.
    const [progress, setProgress] = useState(loadProgress);

    // Setiap kali progress berubah, simpan ke localStorage.
    useEffect(() => {
        saveProgress(progress);
    }, [progress]);

    const markArticleRead = useCallback((slug) => {
        setProgress((p) =>
            p.articlesRead.includes(slug) ? p : { ...p, articlesRead: [...p.articlesRead, slug] },
        );
    }, []);

    const saveQuizResult = useCallback((categoryId, score, total) => {
        setProgress((p) => {
            const best = Math.max(p.quizResults[categoryId]?.best ?? 0, score);
            return {
                ...p,
                quizResults: {
                    ...p.quizResults,
                    [categoryId]: { last: score, best, total, date: new Date().toISOString() },
                },
            };
        });
    }, []);

    const startChallenge = useCallback((challengeId) => {
        setProgress((p) => ({
            ...p,
            challenges: {
                ...p.challenges,
                [challengeId]: {
                    startedAt: new Date().toISOString(),
                    completedDays: [],
                    completedAt: null,
                },
            },
        }));
    }, []);

    const completeChallengeDay = useCallback((challengeId, day) => {
        setProgress((p) => {
            const current = p.challenges[challengeId];
            if (!current) return p;
            // Hari hanya bisa ditandai berurutan: hari ke-N setelah hari ke-(N-1).
            if (day !== current.completedDays.length + 1) return p;
            return {
                ...p,
                challenges: {
                    ...p.challenges,
                    [challengeId]: {
                        ...current,
                        completedDays: [...current.completedDays, day],
                        completedAt: day === CHALLENGE_LENGTH ? new Date().toISOString() : null,
                    },
                },
            };
        });
    }, []);

    const resetChallenge = useCallback((challengeId) => {
        setProgress((p) => {
            const { [challengeId]: removed, ...rest } = p.challenges;
            void removed;
            return { ...p, challenges: rest };
        });
    }, []);

    const markHotspotVisited = useCallback((hotspotId) => {
        setProgress((p) =>
            p.mapVisited.includes(hotspotId)
                ? p
                : { ...p, mapVisited: [...p.mapVisited, hotspotId] },
        );
    }, []);

    const resetProgress = useCallback(() => setProgress(createDefaultProgress()), []);

    const value = useMemo(
        () => ({
            progress,
            markArticleRead,
            saveQuizResult,
            startChallenge,
            completeChallengeDay,
            resetChallenge,
            markHotspotVisited,
            resetProgress,
        }),
        [
            progress,
            markArticleRead,
            saveQuizResult,
            startChallenge,
            completeChallengeDay,
            resetChallenge,
            markHotspotVisited,
            resetProgress,
        ],
    );

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
