import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ShieldAlert, Lock, Handshake } from 'lucide-react';

export function PaymentPolicy() {
  return (
    <div id="pricing" className="pt-24 pb-32 flex flex-col relative w-full overflow-hidden">
      
      <AnimatedSection className="text-center pb-12 mt-12">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
          Professional <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Payment Policy</span>
        </h1>
        <p className="text-xl text-text-soft max-w-2xl mx-auto uppercase tracking-widest font-medium text-brand-pink">
          CLEAR PROCESS • STRONG TRUST • QUALITY RESULTS
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0">
        
        <GlassCard className="mb-12 border-l-4 border-l-brand-blue bg-brand-blue/5">
          <p className="text-gray-300 text-lg flex items-center gap-4">
             <ShieldAlert className="w-8 h-8 text-brand-blue shrink-0" />
             Our payment process is designed to ensure clarity, security, and smooth project delivery for both client and agency.
          </p>
        </GlassCard>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
           
           {/* Tier 1 */}
           <GlassCard className="border-t-[3px] border-t-brand-purple">
              <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">₹0 – ₹1000</h3>
              <p className="text-brand-purple text-sm font-bold tracking-widest text-center mb-8 uppercase">Projects</p>
              
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0" />
                    <span><strong>70%</strong> Advance Payment</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0" />
                    <span><strong>30%</strong> Before Final Delivery</span>
                 </li>
              </ul>
              <div className="mt-8 flex justify-center opacity-50"><Handshake className="w-12 h-12 text-brand-purple" /></div>
           </GlassCard>

           {/* Tier 2 */}
           <GlassCard className="border-t-[3px] border-t-brand-blue">
              <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">₹1000 – ₹5000</h3>
              <p className="text-brand-blue text-sm font-bold tracking-widest text-center mb-8 uppercase">Projects</p>
              
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span><strong>50%</strong> Advance Payment</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span><strong>30%</strong> During Mid-Work</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span><strong>20%</strong> Before Final Delivery</span>
                 </li>
              </ul>
              <div className="mt-8 flex justify-center opacity-50"><Lock className="w-12 h-12 text-brand-blue" /></div>
           </GlassCard>

           {/* Tier 3 */}
           <GlassCard className="border-t-[3px] border-t-brand-pink">
              <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">₹5000+</h3>
              <p className="text-brand-pink text-sm font-bold tracking-widest text-center mb-8 uppercase">Projects</p>
              
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                    <span><strong>40%</strong> Advance Payment</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                    <span><strong>40%</strong> During Work Progress</span>
                 </li>
                 <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0" />
                    <span><strong>20%</strong> Before Final Delivery</span>
                 </li>
              </ul>
           </GlassCard>

        </div>

        <GlassCard className="bg-gradient-to-r from-brand-purple/10 to-transparent border-l-4 border-l-brand-purple p-8">
           <h3 className="text-xl font-bold text-brand-purple uppercase tracking-wider mb-6">Important Notes</h3>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                 <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                 <p className="text-gray-300">Work starts only after advance payment confirmation.</p>
              </div>
              <div className="flex gap-4">
                 <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                 <p className="text-gray-300">Final files shared only after complete payment clearance.</p>
              </div>
           </div>
        </GlassCard>

        <div className="mt-12 text-center">
            <Button href="https://wa.me/919693768406" target="_blank" size="lg">
                Discuss Your Project Options
            </Button>
        </div>
        
      </AnimatedSection>
    </div>
  );
}
