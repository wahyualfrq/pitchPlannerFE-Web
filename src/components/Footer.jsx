import React from 'react';
import { Activity, FileCode, Mail, Globe, Link, Share2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-24 border-t border-white/5 text-white/40">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-16 md:mb-24">
          
          {/* Brand Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-5">
               <img 
                 src="/images/logoPItchPlanner.png" 
                 alt="PitchPlanner Logo" 
                 className="h-12 md:h-14 w-auto object-contain brightness-110"
               />
               <div className="flex flex-col border-l border-white/10 pl-5">
                 <span className="text-[11px] md:text-[12px] font-black tracking-[0.2em] text-white uppercase leading-none">
                   Pitch<span className="text-yellow-500">Planner</span>
                 </span>
                 <span className="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-yellow-500/60 uppercase mt-1.5 md:mt-2">
                   AI Powered Match Scheduling
                 </span>
               </div>
             </div>
            <p className="text-[9px] md:text-[10px] font-bold leading-relaxed uppercase tracking-widest text-white/20 max-w-xs">
              The premier algorithmic governance engine for high-stakes tournament match distribution and venue logistics.
            </p>
          </div>

          {/* Combined Secondary Columns for Mobile Efficiency */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:col-span-2">
            {/* Protocol Column */}
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.4em]">
                Protocol Specs
              </h4>
              <ul className="space-y-3 md:space-y-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                <li><a href="#dataset" className="hover:text-yellow-500 transition-colors">Matrix Schema</a></li>
                <li><a href="#insights" className="hover:text-yellow-500 transition-colors">Data Analysis</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Logic Buffer</a></li>
              </ul>
            </div>

            {/* System Column */}
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.4em]">
                Engine Status
              </h4>
              <div className="space-y-3 md:space-y-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-white/20">Active Node</span>
                  <div className="flex items-center gap-2 text-yellow-500">
                    <span className="w-1 h-1 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_#ffd700]"></span>
                    Operational
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-white/20">Version</span>
                  <span className="text-white">v2.0</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-white/20">Solver</span>
                  <span className="text-white">GREEDY_ALPHA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
          <div>
            &copy; {currentYear} PitchPlanner Championship Systems.
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
