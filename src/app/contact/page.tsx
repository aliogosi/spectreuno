import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            <Navbar />
            <main className="flex-grow pt-20">
                <Section>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-light text-primary mb-12">Contact Us</h1>
                        <p className="text-xl font-light text-foreground/80 leading-relaxed mb-16">
                            We invite suppliers, buyers, buyers, logistics partners, and capital providers aligned with disciplined and responsible global trade to contact us.
                        </p>

                        <div className="grid md:grid-cols-3 gap-12">
                            <div>
                                <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Email
                                </h3>
                                <a href="mailto:info@spectreuno.com" className="text-lg text-foreground/70 hover:text-primary transition-colors">
                                    info@spectreuno.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </h3>
                                <a href="https://linkedin.com/company/spectreuno" target="_blank" rel="noopener noreferrer" className="text-lg text-foreground/70 hover:text-primary transition-colors">
                                    Spectre UNO
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </h3>
                                <a href="https://wa.me/31612492083" target="_blank" rel="noopener noreferrer" className="text-lg text-foreground/70 hover:text-primary transition-colors">
                                    +31 6 1249 2083
                                </a>
                            </div>
                        </div>

                        <div className="mt-24 pt-8 border-t border-gray-100">
                            <p className="text-sm text-foreground/50">
                                Spectre UNO BV. Registered in The Netherlands.
                            </p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
