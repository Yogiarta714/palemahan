import { useEffect } from "react";

// Mengatur judul tab browser per halaman
export function usePageTitle(title) {
    useEffect(() => {
        document.title = title
            ? `${title} | Palemahan`
            : "Palemahan | Edukasi Lingkungan dari Bali";
    }, [title]);
}
