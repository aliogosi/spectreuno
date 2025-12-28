import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: "base" | "white" | "muted" | "dark";
    id?: string;
}

export default function Section({ children, className = "", background = "base", id }: SectionProps) {
    const bgColors = {
        base: "bg-background",
        white: "bg-white",
        muted: "bg-muted",
        dark: "bg-primary text-white",
    };

    return (
        <section id={id} className={`${bgColors[background]} py-24 md:py-32 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                {children}
            </div>
        </section>
    );
}
