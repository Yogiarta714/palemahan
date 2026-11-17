// "2026-11-07" menjadi "7 November 2026"
export const formatDate = (iso) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
