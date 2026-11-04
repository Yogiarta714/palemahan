import Hero from "../components/home/Hero.jsx";
import FactsStrip from "../components/home/FactsStrip.jsx";
import LearnTestAct from "../components/home/LearnTestAct.jsx";
import MapPreview from "../components/home/MapPreview.jsx";
import FeaturedArticles from "../components/home/FeaturedArticles.jsx";
import StoryBanner from "../components/home/StoryBanner.jsx";
import QuizActionPreview from "../components/home/QuizActionPreview.jsx";
import ClosingCta from "../components/home/ClosingCta.jsx";

export default function Home() {
    return (
        <>
            <Hero />
            <FactsStrip />
            <LearnTestAct />
            <MapPreview />
            <FeaturedArticles />
            <StoryBanner />
            <QuizActionPreview />
            <ClosingCta />
        </>
    );
}
