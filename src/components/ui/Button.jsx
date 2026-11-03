import { Link } from "react-router";

const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50";

const variants = {
    primary: "bg-forest-600 text-white hover:bg-forest-700",
    accent: "bg-clay-600 text-white hover:bg-clay-700",
    outline: "border border-forest-600 text-forest-600 hover:bg-forest-50",
    ghost: "text-forest-600 hover:bg-forest-50",
};

export default function Button({ variant = "primary", to, className = "", children, ...props }) {
    const classes = `${base} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={classes} {...props}>
            {children}
        </button>
    );
}
