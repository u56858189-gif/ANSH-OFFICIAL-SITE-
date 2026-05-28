import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArrowRight, Play, Terminal, Zap, Shield, Rocket, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { REVIEWS } from './Testimonials';

export function Home() {
  return (
    <div className="flex flex-col relative w-full overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full point-events-none -translate-y-1/2" />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-purple/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            <span className="text-sm font-medium text-brand-blue tracking-wide">THE FUTURE OF DIGITAL GROWTH</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[1.1]"
          >
            Transforming Brands <br className="hidden md:block"/>
            Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue">Digital Powerhouses</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-lg md:text-xl text-text-soft max-w-3xl mb-12"
          >
            We help businesses scale through AI-powered marketing, branding, content creation, futuristic websites, and performance-driven strategies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
          >
            <Button size="lg" icon={<Zap className="w-4 h-4" />} href="https://wa.me/919693768406" target="_blank">
              Book Strategy Call
            </Button>
          </motion.div>

        </div>
        
        {/* Floating elements background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <motion.div 
             animate={{ y: [0, -50, 0], opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px]"
           />
           <motion.div 
             animate={{ y: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]"
           />
        </div>
      </section>

      {/* STATS / TRUST SECTION */}
      <div className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 opacity-80">
          
          <div className="flex items-center gap-6 md:border-r md:border-white/10 md:pr-12 md:w-1/3">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue p-[2px]">
               <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center overflow-hidden">
                 <img src="https://media-ccu2-2.cdn.whatsapp.net/v/t61.24694-24/676913844_1362067095984698_306422047309144541_n.jpg?ccb=11-4&oh=01_Q5Aa4gFSPi166Z4BdOY5IwHeuBcSbZq2wne2iPHFgoU2QeAUbA&oe=6A250981&_nc_sid=5e03e0&_nc_cat=102" alt="Ansh" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
             </div>
             <div>
                <p className="text-sm text-text-soft uppercase tracking-widest font-bold mb-1">Founded By</p>
                <p className="text-2xl font-display font-medium text-white tracking-wide">ANSH</p>
             </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-around w-full gap-8 md:gap-12">
            {[
              { value: '500+', label: 'Trusted Clients' },
              { value: '98%', label: 'Client Success Rate' },
              { value: '$10M+', label: 'Revenue Generated' },
            ].map((stat, i) => (
               <div key={i} className="text-center">
                 <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2"><AnimatedCounter value={stat.value} /></div>
                 <div className="text-xs md:text-sm tracking-widest text-text-soft uppercase">{stat.label}</div>
               </div>
            ))}
          </div>

        </div>
      </div>

      {/* CORE SERVICES PREVIEW */}
      <AnimatedSection className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our <span className="text-brand-purple">Core Capabilities</span></h2>
          <p className="text-text-soft max-w-2xl mx-auto">From AI video creation to hyper-optimized Google Ads, our suite of luxury digital services is designed for absolute market domination.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "AI Video & Content", desc: "Cinematic, high-retention video synthesis and editing tailored for viral growth.", icon: <Play className="w-8 h-8 text-brand-pink" /> },
            { title: "Performance Marketing", desc: "Data-driven Meta & Google Ads campaigns optimized by advanced automation.", icon: <Zap className="w-8 h-8 text-brand-blue" /> },
            { title: "Futuristic Web Dev", desc: "Award-winning, motion-rich websites built for high-end conversion and luxury branding.", icon: <Terminal className="w-8 h-8 text-brand-purple" /> },
          ].map((srv, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, delay: i * 0.2 }}
            >
              <GlassCard glowOnHover className="flex flex-col gap-6 h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3">{srv.title}</h3>
                  <p className="text-text-soft leading-relaxed">{srv.desc}</p>
                </div>
                <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-brand-blue group-hover:text-brand-purple transition-colors cursor-pointer">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
      
      {/* TESTIMONIALS PREVIEW */}
      <AnimatedSection id="testimonials" className="relative z-10 bg-[#0A0512]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Customer <span className="text-[#FF006E]">Reviews</span></h2>
          <p className="text-text-soft max-w-2xl mx-auto text-lg">Hear from leaders who trust us with their digital growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.slice(0,4).map((review, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.5, delay: i * 0.1 }}
             >
               <GlassCard glowOnHover className="p-8 bg-white/10 text-white border border-white/20 h-full flex flex-col shadow-xl">
                 <div className="flex items-center gap-1 bg-white/10 py-1 px-3 rounded-full border border-white/20 w-fit mb-6">
                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
                   <span className="font-bold text-white text-sm">{review.rating}</span>
                 </div>
                 <p className="text-white text-base md:text-lg leading-relaxed italic mb-8">"{review.text}"</p>
                 <div className="mt-auto pt-4 border-t border-white/10">
                   <h3 className="text-lg font-bold text-white">{review.name}</h3>
                   <p className="text-xs text-gray-300 uppercase mt-1 font-semibold">{review.role}</p>
                 </div>
               </GlassCard>
             </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* PARTNER PROGRAM HIGHLIGHT */}
      <AnimatedSection className="relative">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent pointer-events-none" />
         
         <div className="relative z-10 bg-[#0A0512] border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium mb-6">
                  ANSH PARTNER CIRCLE
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Earn Up To 15% <br/>Commission & Grow.</h2>
                <p className="text-lg text-text-soft mb-8">
                  Join our elite network of business partners. Refer clients, track results globally, and build a recurring side income through our world-class digital services.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {['Unlimited Client Referrals', 'Elite Business Community Access', 'No Hidden Commitments'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center">
                        <Shield className="w-3 h-3 text-brand-purple" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden glass-card p-6 flex flex-col justify-between hidden sm:flex">
                 {/* Decorative mock UI for partner dashboard */}
                 <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-display font-medium">Partner Dashboard</span>
                    <span className="text-brand-blue">Active</span>
                 </div>
                 <div className="flex-grow flex flex-col justify-center gap-4">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/5 flex items-center px-6">
                       <div>
                         <div className="text-sm text-text-soft mb-1">Total Earnings</div>
                         <div className="text-3xl font-display font-bold text-white">₹1,45,000</div>
                       </div>
                       <Rocket className="w-12 h-12 text-brand-pink/50 ml-auto" />
                    </div>
                    <div className="h-32 rounded-xl bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-white/10 p-6">
                       <div className="text-sm text-text-soft mb-3">Live Referrals</div>
                       {/* Animated mock bars */}
                       <div className="flex items-end gap-2 h-12">
                          {[40, 70, 45, 90, 60, 100].map((h, i) => (
                            <motion.div 
                              key={i} 
                              className="w-full bg-brand-blue/50 rounded-t-sm" 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ delay: i * 0.1, duration: 1 }}
                            />
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </AnimatedSection>
    </div>
  );
}
