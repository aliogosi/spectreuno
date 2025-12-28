import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="h-[85vh] flex flex-col justify-center bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 w-full">
            <div className="max-w-4xl pt-20">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary tracking-tighter mb-8 leading-[1.1]">
                Unlocking Value <br /> <span className="font-medium">Responsibly.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl font-light mb-12 leading-relaxed">
                Driving efficiency, longevity, and responsible global trade.
              </p>
              <Link href="/contact" className="inline-block border border-primary px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Are: White Background */}
        <Section background="white">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary/60 mb-4">Who We Are</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-primary">
                Spectre UNO is a cross-border trading and distribution company that unlocks value from global market inefficiencies.
              </p>
              <p className="mt-8 text-lg text-foreground/70 font-light leading-relaxed max-w-2xl">
                We extend the productive life of goods through disciplined, compliant, and structured international trade. We are not a marketplace; we are a disciplined trading house focused on execution and longevity.
              </p>
            </div>
          </div>
        </Section>

        {/* Differentiation: Base Background */}
        <Section background="base">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-primary mb-2">Our Pillars</h2>
            <div className="h-1 w-20 bg-accent-amber"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: "Lifecycle Value", desc: "Maximizing the useful life of assets across geography." },
              { title: "Responsible Trade", desc: "Ethical, compliant, and sustainable flow of goods." },
              { title: "Market Intelligence", desc: "Data-driven identification of arbitrage and demand." },
              { title: "Operational Discipline", desc: "Best-in-class logistics and risk management." },
              { title: "Cross-Border Execution", desc: "Navigating complexities of international commerce." }
            ].map((pillar, i) => (
              <div key={i} className="group">
                <div className="h-full p-6 bg-white border border-gray-100 hover:border-primary/20 transition-colors duration-300">
                  <div className="text-4xl text-primary/10 font-bold mb-4">{i + 1}</div>
                  <h3 className="text-lg font-medium text-primary mb-3">{pillar.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Closing: White Background */}
        <Section background="white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
              Built for scale. <span className="font-medium">Governed for trust.</span>
            </h2>
            <Link href="/contact" className="inline-block border-b border-primary pb-1 text-primary hover:text-accent-green hover:border-accent-green transition-colors text-lg tracking-wide">
              Get in Touch &rarr;
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
