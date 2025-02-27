import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0A1F] via-[#150B38] to-[#1B0B45] scroll-smooth">
      <Header />
      <Hero />
      <div className="py-32 scroll-mt-16" id="features">
        <Features />
      </div>
      <div className="py-32 bg-gradient-to-b from-transparent via-[#0B0A1F]/50 to-transparent scroll-mt-16" id="pricing">
        <Pricing />
      </div>
      <div className="py-32 scroll-mt-16" id="faqs">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
