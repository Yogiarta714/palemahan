import ContourPattern from "./ContourPattern.jsx";

export default function Photo({ image, seed = 1, className = "" }) {
    return (
        <div className={`relative overflow-hidden bg-sage-100 ${className}`}>
            {image?.src ? (
                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
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
