import { useEffect, useRef } from "react";
import Button from "../ui/Button.jsx";
import ProfileIllustration from "../quiz/ProfileIllustration.jsx";
import { useProgress } from "../../hooks/useProgress.js";
import { calculateStreak } from "../../lib/streak.js";

// Layar apresiasi saat 7 dari 7 hari selesai.
// focusOnMount: true hanya saat selesai di sesi ini, supaya tidak merebut fokus saat halaman dibuka ulang.
export default function CompletionPanel({ challenge, focusOnMount, onOpenOther }) {
    const { progress } = useProgress();
    const streak = calculateStreak(progress);
    const ref = useRef(null);

    useEffect(() => {
        if (!focusOnMount) return;
        const element = ref.current;
        if (!element) return;
        element.focus({ preventScroll: true });
        element.scrollIntoView({ block: "start" });
    }, [focusOnMount]);

    return (
        <div
            ref={ref}
            tabIndex={-1}
            role="region"
            aria-label="Tantangan selesai"
            className="mb-10 scroll-mt-24 rounded-xl bg-sage-100 p-6 outline-none sm:p-8"
        >
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-700">
                Tantangan selesai
            </p>
            <h3 className="mt-3 font-display text-3xl font-medium text-forest-800">
                Kamu menyelesaikan {challenge.title}!
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-ink">
                Tujuh hari, tujuh langkah kecil. Kebiasaan tumbuh kalau terus diulang, jadi
                pertahankan satu atau dua yang paling mudah buatmu.
            </p>
            {streak > 0 && (
                <p className="mt-3 font-semibold text-forest-800">
                    Runtun harimu: {streak} hari berturut-turut.
                </p>
            )}

            <ProfileIllustration profileId="hutan" className="mt-6 w-full max-w-xs" />

            <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={onOpenOther}>Pilih tantangan lain</Button>
                <Button to="/kuis" variant="outline">
                    Uji pemahamanmu
                </Button>
            </div>
        </div>
    );
}
