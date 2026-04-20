import React from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Dataset', href: '#dataset' },
    { name: 'Model', href: '#model' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 glass-panel border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center group cursor-pointer" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="h-24 w-auto flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
              <img src="/images/logoPItchPlanner.png" alt="PitchPlanner Logo" className="h-[140px] translate-y-3 max-w-none w-auto object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] transition-all duration-300" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-dark text-navy-900 font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-0.5">
              Run Model
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 absolute w-full left-0 top-20 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-dark text-navy-900 font-bold hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all">
              Run Model
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
