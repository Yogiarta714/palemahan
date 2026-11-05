import KeyFacts from "./KeyFacts.jsx";

// heading (H2), subheading (H3), paragraph, list, dan facts.
export default function ArticleContent({ blocks, facts }) {
    if (!blocks || blocks.length === 0) {
        return <p className="text-ink-muted">Konten artikel ini sedang disiapkan.</p>;
    }

    return (
        <div className="space-y-6">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case "heading":
                        return (
                            <h2
                                key={index}
                                className="pt-6 font-display text-2xl font-medium text-forest-800 lg:text-3xl"
                            >
                                {block.text}
                            </h2>
                        );
                    case "subheading":
                        return (
                            <h3
                                key={index}
                                className="pt-2 font-display text-xl font-medium text-forest-700"
                            >
                                {block.text}
                            </h3>
                        );
                    case "list":
                        return (
                            <ul
                                key={index}
                                className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-ink marker:text-forest-400"
                            >
                                {block.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        );
                    case "paragraph":
                        return (
                            <p key={index} className="text-lg leading-relaxed text-ink">
                                {block.text}
                            </p>
                        );
                    case "facts":
                        return (
                            <div key={index} className="py-2">
                                <KeyFacts facts={facts} />
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}
