import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-main relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(157,78,221,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="flex items-center gap-3 group shrink-0 mb-6 w-fit">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD] to-[#00B4FF] rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-[0_0_30px_rgba(157,78,221,0.5)]" />
                 <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center overflow-hidden">
                   <img src="https://media-ccu2-2.cdn.whatsapp.net/v/t61.24694-24/676913844_1362067095984698_306422047309144541_n.jpg?ccb=11-4&oh=01_Q5Aa4gFSPi166Z4BdOY5IwHeuBcSbZq2wne2iPHFgoU2QeAUbA&oe=6A250981&_nc_sid=5e03e0&_nc_cat=102" alt="A" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-2xl tracking-tighter text-white leading-none">ANSH</span>
                <span className="text-[10px] text-[#B8BCC7] font-medium tracking-[0.2em] leading-none mt-1.5 uppercase">Growth Partner</span>
              </div>
            </Link>
            <p className="text-text-soft mb-8 max-w-sm">
              We help businesses scale through AI-powered marketing, branding, content creation, websites, and automation.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/anshgrowthpartner" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-soft hover:bg-brand-purple hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:anshxtd4293@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-soft hover:bg-brand-blue hover:text-white transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/919693768406" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-soft hover:bg-brand-pink hover:text-white transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-medium text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-sm text-text-soft hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-text-soft hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-sm text-text-soft hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-sm text-text-soft hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-medium text-white mb-6">Programs</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/partner-program" className="text-sm text-brand-purple hover:text-brand-blue transition-colors">Ansh Partner Circle</Link></li>
              <li><Link to="/case-studies" className="text-sm text-text-soft hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-sm text-text-soft hover:text-white transition-colors">Payment Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display font-medium text-white mb-6">Stay Updated</h4>
            <p className="text-sm text-text-soft mb-4">Subscribe to our futuristic growth newsletter.</p>
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10 focus-within:border-brand-purple transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-sm w-full outline-none px-4 text-white"
              />
              <Button href="https://wa.me/919693768406" target="_blank" className="py-2 px-6 h-10">Join</Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-soft">
          <p>© {new Date().getFullYear()} Ansh Growth Partner. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
