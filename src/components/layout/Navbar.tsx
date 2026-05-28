import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Customer Reviews', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
  { name: 'Ansh Partner Circle', path: '/partner-program' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Payment Policy', path: '/pricing' },
  { name: 'Terms & Conditions', path: '/terms'}
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const borderColor = useTransform(scrollY, [0, 50], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.05)']);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      style={{
        backgroundColor: useTransform(scrollY, [0, 50], ['rgba(5,5,5,0)', 'rgba(5,5,5,0.8)']),
        borderBottomColor: borderColor,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-3 md:py-0 md:h-20 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8">
        <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD] to-[#00B4FF] rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-[0_0_20px_rgba(157,78,221,0.5)]" />
                 <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center overflow-hidden">
                     <img src="https://media-ccu2-2.cdn.whatsapp.net/v/t61.24694-24/676913844_1362067095984698_306422047309144541_n.jpg?ccb=11-4&oh=01_Q5Aa4gFSPi166Z4BdOY5IwHeuBcSbZq2wne2iPHFgoU2QeAUbA&oe=6A250981&_nc_sid=5e03e0&_nc_cat=102" alt="A" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl tracking-tighter text-white leading-none">ANSH</span>
                <span className="text-[8px] md:text-[9px] text-[#B8BCC7] font-medium tracking-[0.2em] leading-none mt-1 uppercase">Growth Partner</span>
              </div>
            </Link>
            
            <div className="md:hidden flex items-center gap-4">
              <Button size="sm" variant="outline" href="https://wa.me/919693768406" target="_blank" className="px-4 py-1.5 h-8 text-xs shrink-0 pt-0 pb-0">
                Contact
              </Button>
              <button className="text-white p-1" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
        </div>
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center justify-end flex-wrap gap-2 xl:gap-4 w-full flex-1 md:pl-2">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "whitespace-nowrap text-[10px] xl:text-[11px] uppercase tracking-wide font-semibold transition-colors hover:text-white",
                location.pathname === link.path ? "text-white" : "text-text-soft"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" href="https://wa.me/919693768406" target="_blank" className="hidden md:inline-flex px-4 py-1.5 h-8 ml-2 text-[10px] uppercase font-bold tracking-widest shrink-0 pt-0 pb-0">
            Contact
          </Button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0512] border-b border-white/10 overflow-hidden"
          >
             <div className="flex flex-col gap-1 p-4">
               {NAV_LINKS.map(link => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={cn(
                      "text-sm font-medium px-4 py-3 rounded-lg transition-colors",
                      location.pathname === link.path ? "text-white bg-white/5" : "text-text-soft hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
               ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
