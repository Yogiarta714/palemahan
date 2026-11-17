import ContourPattern from "./ContourPattern.jsx";

export default function Photo({ image, seed = 1, priority = false, className = "" }) {
    return (
        <div className={`relative overflow-hidden bg-sage-100 ${className}`}>
            {image?.src ? (
                <img
                    src={image.src}
                    alt={image.alt}
                    loading={priority ? "eager" : "lazy"}
                    fetchPriority={priority ? "high" : undefined}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
            ) : (
                <ContourPattern
                    seed={seed}
                    className="absolute inset-0 h-full w-full text-forest-400/50"
                />
            )}
        </div>
    );
}
