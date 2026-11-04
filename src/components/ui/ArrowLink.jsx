import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function ArrowLink({ to, children, className = "" }) {
    return (
        <Link
            to={to}
            className={`group inline-flex items-center gap-2 text-sm font-semibold text-forest-700 ${className}`}
        >
            <span className="underline decoration-clay-500 decoration-2 underline-offset-4">
                {children}
            </span>
            <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none"
            />
        </Link>
    );
}
