import { useEffect, useRef } from "react";
import { useProgress } from "../../hooks/useProgress.js";

export default function ReadMarker({ slug }) {
    const ref = useRef(null);
    const { markArticleRead } = useProgress();

    useEffect(() => {
        const element = ref.current;
        if (!element) return undefined;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                markArticleRead(slug);
                observer.disconnect();
            }
        });
        observer.observe(element);

        return () => observer.disconnect();
    }, [slug, markArticleRead]);

    return <div ref={ref} aria-hidden="true" className="h-px" />;
}
