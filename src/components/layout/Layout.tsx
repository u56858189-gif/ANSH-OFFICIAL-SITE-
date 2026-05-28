import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="bg-mesh min-h-screen flex flex-col relative w-full overflow-hidden text-text-main font-body">
      <div className="cursor-glow absolute top-[-100px] right-[-100px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-grow pt-[110px] md:pt-20"> {/* PT for fixed navbar */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
