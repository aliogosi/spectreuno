import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResponsibleTradePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            <Navbar />
            <main className="flex-grow pt-20">
                <Section>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-light text-primary mb-8">Responsibility as a Standard</h1>
                        <p className="text-xl font-light text-foreground/80 leading-relaxed mb-16">
                            For Spectre UNO, responsibility and sustainability are not marketing labels—they are core operating standards. We believe that the most sustainable product is one that is used to its fullest potential.
                        </p>

                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                <div className="w-12 h-1 bg-accent-green md:w-1 md:h-auto shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-medium text-primary mb-3">Extending Productive Life</h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        We actively combat the "take-make-waste" model by finding new markets for goods that others deem redundant. By extending the utility of an asset, we amortize its environmental footprint over a longer useful life.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                <div className="w-12 h-1 bg-accent-green md:w-1 md:h-auto shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-medium text-primary mb-3">Compliance-Aware Sourcing</h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        Cross-border trade requires rigorous adherence to international laws. We operate with strict internal controls to ensure all flows meet export control, sanctions, and regulatory requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                <div className="w-12 h-1 bg-accent-green md:w-1 md:h-auto shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-medium text-primary mb-3">Risk Management</h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        Responsible trade means protecting value. We mitigate risk for our counterparties through insured logistics, secure settlement methods, and transparent chain-of-custody.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20">
                            <p className="text-lg font-medium text-primary">
                                Responsible trade protects value, reduces risk, and builds long-term trust.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
