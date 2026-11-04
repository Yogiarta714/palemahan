const STORAGE_KEY = "palemahan:v1";

export function createDefaultProgress() {
    return {
        articlesRead: [], // daftar slug artikel yang sudah dibaca
        quizResults: {}, // { [kategori]: { last, best, total, date } }
        challenges: {}, // { [id]: { startedAt, completedDays: [], completedAt } }
        mapVisited: [], // daftar id titik peta yang sudah dibuka
    };
}

const isPlainObject = (value) =>
    typeof value === "object" && value !== null && !Array.isArray(value);

// Memastikan data dari localStorage bentuknya benar
function normalize(raw) {
    const base = createDefaultProgress();
    if (!isPlainObject(raw)) return base;
    return {
        articlesRead: Array.isArray(raw.articlesRead) ? raw.articlesRead : base.articlesRead,
        quizResults: isPlainObject(raw.quizResults) ? raw.quizResults : base.quizResults,
        challenges: isPlainObject(raw.challenges) ? raw.challenges : base.challenges,
        mapVisited: Array.isArray(raw.mapVisited) ? raw.mapVisited : base.mapVisited,
    };
}

export function loadProgress() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return normalize(raw ? JSON.parse(raw) : null);
    } catch {
        // Mode privat, penyimpanan diblokir, atau JSON rusak
        return createDefaultProgress();
    }
}

export function saveProgress(progress) {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
        // Penyimpanan penuh atau diblokir
    }
}
