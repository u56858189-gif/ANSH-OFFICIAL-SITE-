import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Users, Briefcase, TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export function PartnerCircle() {
  return (
    <div id="partner-program" className="pt-24 pb-32 flex flex-col relative w-full overflow-hidden">
      
      {/* Background Cyberpunk grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <AnimatedSection className="text-center pb-12 mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue font-medium tracking-widest text-sm mb-8 shadow-[0_0_20px_rgba(0,180,255,0.2)] mx-auto">
          ELITE BUSINESS COMMUNITY
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
          ANSH <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue">PARTNER PROGRAM</span>
        </h1>
        <p className="text-xl text-text-soft max-w-2xl mx-auto uppercase tracking-widest font-medium">
          BRING CLIENTS • EARN COMMISSION • GROW TOGETHER
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
           <GlassCard className="text-center overflow-visible">
              <div className="w-20 h-20 rounded-full bg-brand-purple/20 border-2 border-brand-purple flex items-center justify-center mx-auto -mt-16 mb-6 shadow-[0_0_30px_rgba(157,78,221,0.5)]">
                 <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-brand-purple text-sm font-bold uppercase tracking-widest mb-2">Registration Fee</h3>
              <div className="text-6xl font-display font-bold text-white mb-2">₹359</div>
              <p className="text-text-soft text-sm uppercase tracking-wider">ONE-TIME</p>
           </GlassCard>
           
           <GlassCard className="text-center overflow-visible">
              <div className="w-20 h-20 rounded-full bg-brand-blue/20 border-2 border-brand-blue flex items-center justify-center mx-auto -mt-16 mb-6 shadow-[0_0_30px_rgba(0,180,255,0.5)]">
                 <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-brand-blue text-sm font-bold uppercase tracking-widest mb-2">Monthly Fee</h3>
              <div className="text-6xl font-display font-bold text-white mb-2">₹537</div>
              <p className="text-text-soft text-sm uppercase tracking-wider">PER MONTH</p>
           </GlassCard>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
               <h2 className="text-3xl lg:text-4xl font-display font-bold text-white flex items-center gap-4">
                 <DollarSign className="text-brand-pink w-10 h-10" /> COMMISSION MODEL
               </h2>
               <div className="space-y-4 pt-4 text-lg text-gray-300">
                  <div className="flex items-center gap-4 border border-white/5 rounded-xl p-4 bg-white/[0.02]">
                    <div className="w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center">
                       <ShieldCheck className="w-4 h-4 text-brand-purple" />
                    </div>
                    Earn Up To <strong className="text-brand-purple text-xl">15%</strong> Commission (On Profit)
                  </div>
                  <div className="flex items-center gap-4 border border-white/5 rounded-xl p-4 bg-white/[0.02]">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                       <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    </div>
                    Unlimited Client Referrals
                  </div>
                  <div className="flex items-center gap-4 border border-white/5 rounded-xl p-4 bg-white/[0.02]">
                    <div className="w-8 h-8 rounded-full bg-brand-pink/20 flex items-center justify-center">
                       <ShieldCheck className="w-4 h-4 text-brand-pink" />
                    </div>
                    <span className="text-brand-pink font-bold">Higher Deals = Higher Earnings</span>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-6">
                <GlassCard className="relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                   
                   <div className="text-center mb-8">
                     <h3 className="text-2xl font-display font-bold text-white mb-2">WHO SHOULD JOIN?</h3>
                     <div className="h-0.5 w-16 bg-brand-pink mx-auto" />
                   </div>

                   <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="p-4 rounded-xl hover:bg-white/5 transition-colors">
                         <Briefcase className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                         <span className="text-sm text-gray-300">Serious & Growth-Oriented People</span>
                      </div>
                      <div className="p-4 rounded-xl hover:bg-white/5 transition-colors">
                         <TrendingUp className="w-8 h-8 mx-auto mb-3 text-brand-purple" />
                         <span className="text-sm text-gray-300">Want to Build Side Income / Business</span>
                      </div>
                      <div className="p-4 rounded-xl hover:bg-white/5 transition-colors">
                         <Users className="w-8 h-8 mx-auto mb-3 text-brand-blue" />
                         <span className="text-sm text-gray-300">Ready to Work Consistently</span>
                      </div>
                      <div className="p-4 rounded-xl hover:bg-white/5 transition-colors">
                         <ShieldCheck className="w-8 h-8 mx-auto mb-3 text-brand-pink" />
                         <span className="text-sm text-gray-300">Build Long-Term Network & Earnings</span>
                      </div>
                   </div>
                </GlassCard>
            </div>
            
        </div>
        
        <div className="mt-16 text-center">
           <Button size="lg" href="https://wa.me/919693768406" target="_blank" className="px-16 py-6 text-lg tracking-wider w-full md:w-auto shadow-[0_0_40px_rgba(157,78,221,0.5)]">
              JOIN NOW & GROW WITH US!
           </Button>
           <p className="mt-4 text-text-soft text-sm">Elite Network Access</p>
        </div>

      </AnimatedSection>
    </div>
  );
}
