import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

export function CaseStudies() {
  return (
    <div id="case-studies" className="pt-24 pb-32 flex flex-col relative w-full">
      <AnimatedSection className="text-center pb-12 mt-12">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
          Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-400">Case Studies</span>
        </h1>
        <p className="text-xl text-text-soft max-w-2xl mx-auto tracking-wide">
          Deep dives into how we've scaled global brands using AI, automation, and premium design.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0">
        <GlassCard glowOnHover className="p-8 md:p-12 border-l-4 border-l-brand-blue mb-8">
           <h3 className="text-3xl font-display font-bold text-white mb-4">scaling an AI SaaS from 0 to 10k MRR</h3>
           <p className="text-text-soft text-lg mb-6">
             Through a combination of high-converting cinematic web design and targeted Meta/Google Ads, we established a dominating market presence for a new tech startup within 3 months.
           </p>
           <ul className="grid md:grid-cols-3 gap-6 opacity-80 mb-8 border-t border-white/10 pt-6">
             <li><strong className="text-brand-blue text-xl block mb-1">300%</strong> Increase in CTR</li>
             <li><strong className="text-brand-blue text-xl block mb-1">CPA Reduced</strong> by 45%</li>
             <li><strong className="text-brand-blue text-xl block mb-1">Brand Identity</strong> Completely Rebuilt</li>
           </ul>
           <Button variant="outline" href="https://wa.me/919693768406" target="_blank">Discuss Similar Growth</Button>
        </GlassCard>

        <GlassCard glowOnHover className="p-8 md:p-12 border-l-4 border-l-[#FF006E]">
           <h3 className="text-3xl font-display font-bold text-white mb-4">Viral Content System For Fashion Brand</h3>
           <p className="text-text-soft text-lg mb-6">
             Implemented an AI video creation and cinematic editing workflow that produced 3 viral reels, rocketing the brand's social reach and directly driving e-commerce sales.
           </p>
           <ul className="grid md:grid-cols-3 gap-6 opacity-80 mb-8 border-t border-white/10 pt-6">
             <li><strong className="text-[#FF006E] text-xl block mb-1">12M+</strong> Organic Reach</li>
             <li><strong className="text-[#FF006E] text-xl block mb-1">45k+</strong> New Followers</li>
             <li><strong className="text-[#FF006E] text-xl block mb-1">Engagement Rate</strong> Doubled</li>
           </ul>
           <Button variant="outline" href="https://wa.me/919693768406" target="_blank">Discuss Similar Growth</Button>
        </GlassCard>
      </AnimatedSection>
    </div>
  );
}
