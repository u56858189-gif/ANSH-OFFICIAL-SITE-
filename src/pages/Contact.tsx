import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, Instagram, Send, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [name, setName] = useState('');
  const [service, setService] = useState('Complete Digital Marketing');
  const [message, setMessage] = useState('');

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const text = `Hi, I'm ${name}.\nI'm interested in: ${service}\n\nMessage: ${message}`;
    window.open(`https://wa.me/919693768406?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div id="contact" className="pt-24 pb-32 flex flex-col relative w-full overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full point-events-none -translate-y-1/2 translate-x-1/3" />
      
      <AnimatedSection className="text-center pb-12 mt-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-400">Your Future.</span>
        </h1>
        <p className="text-xl text-text-soft max-w-2xl mx-auto">
          Ready to dominate your industry? Contact us to start your digital growth journey.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="pt-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-6">
             <GlassCard glowOnHover className="flex items-center gap-6 p-6">
                <div className="w-16 h-16 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                   <Phone className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-text-soft text-sm uppercase tracking-wider mb-1">WhatsApp / Call</h3>
                   <a href="tel:+919693768406" className="text-2xl font-display font-bold text-white hover:text-brand-pink transition-colors">+91 9693768406</a>
                </div>
             </GlassCard>
             
             <GlassCard glowOnHover className="flex items-center gap-6 p-6">
                <div className="w-16 h-16 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                   <Instagram className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-text-soft text-sm uppercase tracking-wider mb-1">Instagram</h3>
                   <a href="https://instagram.com/anshgrowthpartner" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-bold text-white hover:text-brand-purple transition-colors">@anshgrowthpartner</a>
                </div>
             </GlassCard>

             <GlassCard glowOnHover className="flex items-center gap-6 p-6">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                   <Mail className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-text-soft text-sm uppercase tracking-wider mb-1">Email</h3>
                   <a href="mailto:anshxtd4293@gmail.com" className="text-xl font-display font-bold text-white hover:text-brand-blue transition-colors">anshxtd4293@gmail.com</a>
                </div>
             </GlassCard>
             
              <GlassCard className="mt-8 border-none bg-gradient-to-br from-brand-purple/10 to-brand-blue/10">
                 <h4 className="text-white font-bold mb-2">Quick Response Promise</h4>
                 <p className="text-sm text-gray-400">Our team aims to respond to all inquiries within 2 hours during business operations.</p>
             </GlassCard>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-8 md:p-12">
             <h3 className="text-3xl font-display font-bold text-white mb-8">Send a Message</h3>
             <form className="space-y-6" onSubmit={handleWhatsApp}>
                <div className="space-y-2">
                   <label className="text-sm text-text-soft font-medium">Name</label>
                   <input 
                      type="text" 
                      required 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors" 
                      placeholder="John Doe" 
                   />
                </div>
                
                <div className="space-y-2">
                   <label className="text-sm text-text-soft font-medium">Service Needed</label>
                   <select 
                      value={service} 
                      onChange={e => setService(e.target.value)} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors appearance-none"
                   >
                      <option className="bg-[#0A0512]">Complete Digital Marketing</option>
                      <option className="bg-[#0A0512]">Website Development</option>
                      <option className="bg-[#0A0512]">Performance Ads</option>
                      <option className="bg-[#0A0512]">Video Editing</option>
                      <option className="bg-[#0A0512]">Other</option>
                   </select>
                </div>
                
                <div className="space-y-2">
                   <label className="text-sm text-text-soft font-medium">Message</label>
                   <textarea 
                      rows={4} 
                      required 
                      value={message} 
                      onChange={e => setMessage(e.target.value)} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors resize-none" 
                      placeholder="Tell us about your project..."
                   ></textarea>
                </div>
                
                {/* Changed from href to button to submit form and handle onClick natively */}
                <button type="submit" className="w-full h-14 text-lg mt-4 relative inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-full overflow-hidden group cursor-pointer bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_40px_rgba(0,180,255,0.6)]">
                   <span className="relative z-10 flex items-center gap-2">
                     Send via WhatsApp
                     <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                   </span>
                </button>
             </form>
          </GlassCard>

        </div>
      </AnimatedSection>
    </div>
  );
}
