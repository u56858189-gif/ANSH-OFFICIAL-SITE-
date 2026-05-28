import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Target, Lightbulb, Rocket, Users2 } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <div id="about" className="pt-24 pb-32 flex flex-col relative w-full overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-pink/10 blur-[120px] rounded-full point-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full point-events-none translate-x-1/2" />

      <AnimatedSection className="text-center pb-12 mt-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-widest text-text-soft mb-8">
          OUR STORY
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
          We Build Brands <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue">That Dominate.</span>
        </h1>
        <p className="text-xl text-text-soft max-w-3xl mx-auto leading-relaxed">
          Ansh Growth Partner is more than a marketing agency. It is a futuristic digital growth ecosystem helping businesses dominate online through creativity, strategy, AI-powered systems, and cinematic content experiences.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 mb-24">
          <GlassCard className="p-8 md:p-12 border-l-4 border-l-brand-purple">
             <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-brand-purple" />
             </div>
             <h3 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
             <p className="text-text-soft text-lg leading-relaxed">
               "To help businesses achieve absolute premium branding and real, scalable digital growth. We don't just run campaigns; we engineer digital dominance."
             </p>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 border-l-4 border-l-brand-blue">
             <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-8">
                <Lightbulb className="w-8 h-8 text-brand-blue" />
             </div>
             <h3 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
             <p className="text-text-soft text-lg leading-relaxed">
               "To build one of the world's most trusted, futuristic digital growth brands and communities, empowering the next generation of industry leaders."
             </p>
          </GlassCard>
        </div>

        {/* Brand Personality / Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our DNA</h2>
          <p className="text-text-soft max-w-2xl mx-auto">The principles that drive our high-performance culture.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
           {[
             { title: "Modern & Smart", icon: <Rocket className="w-6 h-6 text-brand-pink" /> },
             { title: "Confident & Premium", icon: <Users2 className="w-6 h-6 text-brand-purple" /> },
             { title: "Creative & Luxury", icon: <Lightbulb className="w-6 h-6 text-brand-blue" /> },
             { title: "Result-Oriented", icon: <Target className="w-6 h-6 text-[#FFB800]" /> },
           ].map((val, i) => (
             <GlassCard key={i} className="text-center p-6 lg:p-8 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10">{val.icon}</div>
                <h4 className="text-white font-medium tracking-wide">{val.title}</h4>
             </GlassCard>
           ))}
        </div>

        <div className="mt-16 flex justify-center">
            <Button size="lg" href="https://wa.me/919693768406" target="_blank" className="shadow-[0_0_30px_rgba(157,78,221,0.4)]">
                Connect With Ansh
            </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
