import Container from "../components/layout/Container.jsx";
import Logo, { LogoMark } from "../components/ui/Logo.jsx";

export default function Home() {
    return (
        <Container className="space-y-6 py-16">
            <div className="flex flex-wrap items-center gap-8 rounded-xl border border-line bg-ivory p-8">
                <LogoMark variant="full" className="h-24 w-auto" title="Logo warna penuh" />
                <LogoMark variant="line" className="h-24 w-auto" title="Logo garis" />
                <LogoMark variant="badge" className="h-24 w-auto" title="Logo badge" />
                <Logo showTagline />
            </div>

            <div className="flex flex-wrap items-center gap-8 rounded-xl bg-forest-800 p-8">
                <LogoMark
                    variant="fullDark"
                    className="h-24 w-auto"
                    title="Logo warna penuh, latar gelap"
                />
                <LogoMark variant="lineDark" className="h-24 w-auto" title="Logo garis terbalik" />
                <Logo tone="dark" size="lg" />
            </div>
        </Container>
    );
}
