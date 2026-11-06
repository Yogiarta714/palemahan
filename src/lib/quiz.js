import { quizProfiles } from "../data/quizProfiles.js";

// Memilih profil hasil berdasarkan persentase jawaban benar.
export function getProfile(score, total) {
    const percent = total === 0 ? 0 : (score / total) * 100;
    const matches = quizProfiles.filter((profile) => percent >= profile.minPercent);
    return matches[matches.length - 1] ?? quizProfiles[0];
}
