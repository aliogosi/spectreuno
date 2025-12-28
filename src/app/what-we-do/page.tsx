import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Truck, ShoppingBag, Factory } from "lucide-react";

export default function WhatWeDoPage() {
    const domains = [
        {
            title: "Technology & Equipment",
            desc: "Enterprise hardware, data infrastructure, and specialized industrial computing.",
            icon: Cpu
        },
        {
            title: "Mobility & Transport",
            desc: "Commercial fleets, specialized vehicles, and transport logistics infrastructure.",
            icon: Truck
        },
        {
            title: "Consumer Goods",
            desc: "High-value consumer durables and surplus retail inventories.",
            icon: ShoppingBag
        },
        {
            title: "Industrial & Commercial",
            desc: "Manufacturing machinery, tools, and plant equipment.",
            icon: Factory
        },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            <Navbar />
            <main className="flex-grow pt-24 pb-20">
                <Section>
                    <div className="max-w-3xl mb-20">
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-accent-green mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-6xl font-light text-primary mb-8 leading-tight">
                            Product Agnostic. <br />
                            <span className="font-medium">Execution Focused.</span>
                        </h1>
                        <p className="text-xl font-light text-foreground/70 leading-relaxed">
                            Spectre UNO operates across multiple categories where market inefficiencies exist. We are intentionally product-agnostic, allowing us to pivot capital and operational resources to where value is most trapped.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {domains.map((domain, i) => (
                            <div key={i} className="group p-10 bg-white/50 backdrop-blur-sm border border-white/60 shadow-sm rounded-lg hover:border-primary/20 hover:shadow-md transition-all duration-300">
                                <div className="mb-6 inline-flex p-3 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <domain.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-medium text-primary mb-4">{domain.title}</h3>
                                <p className="text-lg text-foreground/70 leading-relaxed font-light">{domain.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
