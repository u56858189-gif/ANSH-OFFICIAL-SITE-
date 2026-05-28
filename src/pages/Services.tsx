import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';
import { Check, Sparkles, MonitorPlay, Code2, PenTool, LayoutDashboard, Database, Share2, Search, Target, Briefcase } from 'lucide-react';

const SERVICES = [
  {
    title: "Video Editing",
    tagline: "High-retention cinematic edits",
    icon: <MonitorPlay className="w-6 h-6" />,
    items: [
      { name: "1 Minute Reel", price: "₹299 - ₹499" },
      { name: "5 Minutes Video", price: "₹699 - ₹1,199" },
      { name: "10 Minutes Video", price: "₹1,499 - ₹2,499" },
      { name: "Custom On Demand", price: "Price On Request" }
    ],
    includes: "Cut, Trim, Transitions, Effects, Color Grading, Text, Music.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "AI Video Creation",
    tagline: "Synthetic media & avatars",
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      { name: "AI Video (1 Minute)", price: "₹499 - ₹999" },
      { name: "Custom On Demand", price: "Price On Request" }
    ],
    includes: "AI Script, AI Voice, AI Visuals, Captions, Background Music.",
    color: "from-brand-purple to-brand-pink"
  },
  {
    title: "Website Development",
    tagline: "Futuristic digital experiences",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "Landing Page", price: "₹1,999 - ₹3,999" },
      { name: "Business Website", price: "₹4,999 - ₹8,999" },
      { name: "eCommerce Hub", price: "₹9,999 - ₹17,999" },
      { name: "Custom Web App", price: "₹9,999 - ₹25,999+" }
    ],
    includes: "Responsive Design, Basic SEO, Speed Optimization, Modern Stack.",
    color: "from-brand-blue to-emerald-400"
  },
  {
    title: "Graphic Design",
    tagline: "Premium visual identities",
    icon: <PenTool className="w-6 h-6" />,
    items: [
      { name: "Logo Design", price: "₹699 - ₹1,999" },
      { name: "Ad Creative", price: "₹199 - ₹499" },
      { name: "Instagram Post", price: "₹99 - ₹199" },
      { name: "Custom Poster", price: "₹199 - ₹499" }
    ],
    includes: "High Quality, Unique Concepts, Editable Source Files.",
    color: "from-amber-400 to-orange-500"
  }
];

export function Services() {
  return (
    <div id="services" className="pt-24 pb-32 flex flex-col relative w-full">
      
      {/* HEADER */}
      <div className="text-center relative py-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(157,78,221,0.15),transparent_50%)] pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          One Stop Solution For <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">All Digital Needs</span>
        </h1>
        <p className="text-lg text-text-soft max-w-2xl mx-auto tracking-wide">
          STRATEGY • CREATIVITY • PERFORMANCE. WE BUILD BRANDS THAT GROW.
        </p>
      </div>

      <AnimatedSection className="pt-0">
        
        {/* SERVICES BENTO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((srv, idx) => (
            <GlassCard key={idx} glowOnHover className="flex flex-col h-full border-t-2 border-t-white/10 group-hover:border-t-brand-purple transition-all duration-500">
               
               <div className="flex items-center gap-4 mb-8">
                 <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${srv.color} bg-opacity-10 shadow-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
                    <span className="relative z-10 text-white">{srv.icon}</span>
                 </div>
                 <div>
                   <h2 className="text-2xl font-display font-bold text-white">{srv.title}</h2>
                   <p className="text-brand-purple text-sm font-medium">{srv.tagline}</p>
                 </div>
               </div>

               <div className="flex-grow">
                 <div className="bg-black/30 rounded-lg overflow-hidden border border-white/5">
                   {srv.items.map((item, i) => (
                     <div key={i} className="flex justify-between items-center p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                       <span className="text-gray-300 text-sm">{item.name}</span>
                       <span className="text-brand-blue font-mono text-sm">{item.price}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="mt-6 pt-6 border-t border-white/10">
                 <p className="text-xs text-text-soft flex gap-2 w-full leading-relaxed">
                   <span className="text-[#FFB800] shrink-0 font-medium">Includes:</span> {srv.includes}
                 </p>
               </div>
            </GlassCard>
          ))}
        </div>

        {/* FULL PACKAGE PROMOTE */}
        <div className="mt-12 w-full rounded-[2rem] bg-gradient-to-r from-[#0F051D] to-[#0A0512] border border-brand-purple/20 p-1 lg:p-2 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
           <div className="glass-card w-full h-full rounded-[1.8rem] !bg-black/40 p-8 lg:p-12 flex flex-col xl:flex-row items-center justify-between gap-8 relative z-10">
              
              <div className="max-w-xl">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-4 border border-yellow-500/30">
                    🏆 Best Value
                 </div>
                 <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Complete Digital Marketing</h3>
                 <p className="text-text-soft mb-6">Scale your entire brand under one roof. Automated workflows, ad setup, continuous management, and custom ROI tracking.</p>
                 
                 <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-300">
                    {['SMM (Social Media)', 'SEM (Google Ads)', 'Content Marketing', 'Analytics & Reporting', 'Website Creation', 'WhatsApp Automation'].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-purple" /> {feat}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col gap-4 w-full xl:w-auto">
                 <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-text-soft text-sm mb-1 uppercase tracking-wider">Growth Package</div>
                    <div className="text-2xl font-mono text-white">₹55,000 - ₹85,000 / month</div>
                 </div>
                 <div className="bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 border border-brand-purple/30 rounded-xl p-6 text-center relative overflow-hidden shadow-[0_0_30px_rgba(157,78,221,0.2)]">
                    <div className="absolute inset-0 bg-brand-pink/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-brand-blue text-sm mb-1 uppercase tracking-wider font-bold">Premium Scale</div>
                    <div className="text-2xl font-mono text-white font-bold">₹90,000 - 1.5L+ / month</div>
                 </div>
                 <Button href="https://wa.me/919693768406" target="_blank" className="w-full mt-2">
                    Contact to Start Growth
                 </Button>
              </div>

           </div>
        </div>

      </AnimatedSection>
    </div>
  );
}
