import ContourPattern from "../ui/ContourPattern.jsx";

export default function HeroVisual({ image }) {
    return (
        <figure className="m-0">
            <div className="leaf-cut relative aspect-4/3 overflow-hidden bg-sage-100 lg:aspect-4/5">
                {image ? (
                    <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        fetchPriority="high"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <>
                        <ContourPattern className="absolute inset-0 h-full w-full text-forest-400/60" />
                        <span
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay-500"
                        />
                    </>
                )}
            </div>

            {image?.credit && (
                <figcaption className="mt-3 text-xs text-ink-muted">
                    {image.caption} · {image.credit}
                </figcaption>
            )}
        </figure>
    );
}
