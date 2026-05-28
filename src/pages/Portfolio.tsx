import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

const PORTFOLIO_ITEMS = [
  {
    title: "Cinematic Video Ads",
    category: "Video Editing & AI",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    results: "3M+ Views generated across Meta & YouTube"
  },
  {
    title: "Luxury E-Commerce Brand",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    results: "215% Increase in conversion rate"
  },
  {
    title: "Performance Meta Campaign",
    category: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    results: "5x ROAS within first 30 days"
  },
  {
    title: "Premium Brand Identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    results: "Complete visual overhaul & positioning"
  }
];

export function Portfolio() {
  return (
    <div id="portfolio" className="pt-24 pb-32 flex flex-col relative w-full">
      <AnimatedSection className="text-center pb-12 mt-12">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Portfolio</span>
        </h1>
        <p className="text-xl text-text-soft max-w-2xl mx-auto tracking-wide">
          Showcasing digital excellence, cinematic aesthetics, and high-conversion strategies.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0">
        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <GlassCard key={idx} glowOnHover className="p-4 group">
              <div className="relative h-[300px] overflow-hidden rounded-xl mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-[1.5s] z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]" 
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10 uppercase tracking-widest">
                  {item.category}
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-brand-blue text-sm font-medium tracking-wide">Impact: <span className="text-gray-300">{item.results}</span></p>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" href="https://wa.me/919693768406" target="_blank" className="shadow-[0_0_30px_rgba(157,78,221,0.4)]">
             Start Your Project
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
