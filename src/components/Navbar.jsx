import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ hasRun, onLaunch }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Schedule', href: '#schedule', show: hasRun },
    { name: 'Insights', href: '#insights', show: hasRun },
    { name: 'Protocol', href: '#dataset', show: true },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          <div 
            className="flex-shrink-0 flex items-center group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             <div className="flex items-center gap-4">
               <img 
                 src="/images/logoPItchPlanner.png" 
                 alt="PitchPlanner Logo" 
                 className="h-10 md:h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-500"
               />
               <div className="hidden lg:flex flex-col border-l border-white/10 pl-4">
                 <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase leading-none">
                   Pitch<span className="text-yellow-500">Planner</span>
                 </span>
                 <span className="text-[7px] font-black tracking-[0.3em] text-yellow-500/60 uppercase mt-1">
                   AI Powered Match Scheduling
                 </span>
               </div>
             </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.filter(l => l.show).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-yellow-500 transition-all duration-300 font-black text-[10px] uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-yellow-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-4"></div>

            <button 
              onClick={onLaunch}
              className="px-8 py-3 bg-yellow-500 text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]"
            >
              Simulate AI Model
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-500 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-12 space-y-8 text-center">
              {navLinks.filter(l => l.show).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/60 font-black text-xs uppercase tracking-[0.4em] hover:text-yellow-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onLaunch();
                }}
                className="w-full mt-8 px-8 py-4 bg-yellow-500 text-black font-black text-xs uppercase tracking-[0.3em] rounded-full"
              >
                Launch Engine
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
