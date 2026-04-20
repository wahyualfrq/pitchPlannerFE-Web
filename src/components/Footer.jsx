import React from 'react';
import { BarChart3 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-navy-900 pt-16 pb-8 mt-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-accent/5 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img src="/images/logoPItchPlanner.png" alt="PitchPlanner Logo" className="h-[140px] max-w-none w-auto object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
          </div>
          
          <p className="text-gray-500 text-sm font-medium">
            © 2026 PitchPlanner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
