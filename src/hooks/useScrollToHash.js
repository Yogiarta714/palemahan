import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
    }, [hash]);
}
