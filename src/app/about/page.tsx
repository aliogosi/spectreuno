import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            <Navbar />
            <main className="flex-grow pt-20">
                <Section>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-light text-primary mb-12">Our Philosophy</h1>
                        <p className="text-xl font-light text-foreground/80 leading-relaxed mb-8">
                            Global markets are inherently inefficient. Assets and goods are often underutilized, undervalued, or retired early in one region while remaining critically viable in another.
                        </p>
                        <p className="text-xl font-light text-foreground/80 leading-relaxed mb-8">
                            Spectre UNO exists to bridge these gaps. We do not simply move goods; we identify structural value disconnects and execute the logistics, compliance, and financial structuring required to resolve them.
                        </p>
                        <hr className="border-t border-gray-100 my-12" />
                        <h2 className="text-2xl font-medium text-primary mb-6">Built on Discipline</h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                            In a world of fast commerce and disruption, we prioritize discipline. Our operations are governed by rigorous compliance frameworks, deep market intelligence, and a commitment to long-term counterparty trust.
                        </p>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We believe that true value is not created by speculation, but by the responsible extension of lifecycle utility.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
