import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import { articles } from "../data/articles.js";
import { useProgress } from "../hooks/useProgress.js";

export default function Home() {
    const { progress, markArticleRead, resetProgress } = useProgress();

    return (
        <Container className="py-16">
            <h1 className="font-display text-h1 text-forest-700">Uji data dan progress</h1>
            <p className="mt-4 text-ink-muted">Artikel di data: {articles.length}</p>
            <p className="mt-1 text-ink-muted">Artikel dibaca: {progress.articlesRead.length}</p>
            <div className="mt-6 flex gap-3">
                <Button onClick={() => markArticleRead("contoh-memilah-sampah-dari-sumber")}>
                    Tandai dibaca
                </Button>
                <Button variant="outline" onClick={resetProgress}>
                    Reset
                </Button>
            </div>
        </Container>
    );
}
