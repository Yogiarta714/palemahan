export function todayKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function shiftDay(key, delta) {
    const [year, month, day] = key.split("-").map(Number);
    return todayKey(new Date(year, month - 1, day + delta));
}

// Runtun masih hidup kalau ada aktivitas hari ini atau kemarin.
export function calculateStreak(progress, today = todayKey()) {
    const activeDays = new Set();
    for (const challenge of Object.values(progress.challenges ?? {})) {
        for (const key of Object.values(challenge.dates ?? {})) activeDays.add(key);
    }

    let cursor = activeDays.has(today) ? today : shiftDay(today, -1);
    let streak = 0;
    while (activeDays.has(cursor)) {
        streak += 1;
        cursor = shiftDay(cursor, -1);
    }
    return streak;
}
