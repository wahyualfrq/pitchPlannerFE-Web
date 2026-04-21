import React from 'react';
import { motion } from 'framer-motion';

const OptimizationPanel = ({ stats }) => {
  if (!stats) return null;

  const original = stats.original_count || 1;
  const selected = stats.selected_count || 0;
  const rejected = stats.rejected_count || 0;
  const yieldRate = Math.round((selected / original) * 100);

  return (
    <div className="w-full relative z-20 py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl"></div>
      
      <div className="max-w-[1600px] mx-auto px-8 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
          
          {/* Left Title Area */}
          <div className="flex items-center gap-10 lg:w-1/4">
            <div className="text-right">
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Metrics</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
                Data<br/>Yield
              </h2>
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent opacity-50"></div>
          </div>

          {/* Right Metrics Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 w-full">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center md:items-start group">
              <span className="text-6xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl group-hover:text-[#D4AF37] transition-colors duration-500">{original}</span>
              <span className="text-gray-500 text-[11px] uppercase font-black tracking-[0.4em] mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-white/20"></div> Total Inputs
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center md:items-start group">
              <span className="text-6xl lg:text-9xl font-black text-[#D4AF37] tracking-tighter drop-shadow-2xl group-hover:text-white transition-colors duration-500">{yieldRate}<span className="text-4xl lg:text-5xl">%</span></span>
              <span className="text-gray-500 text-[11px] uppercase font-black tracking-[0.4em] mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4AF37]/40"></div> Efficiency
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center md:items-start group">
              <span className="text-6xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl group-hover:text-red-500 transition-colors duration-500">{rejected}</span>
              <span className="text-gray-500 text-[11px] uppercase font-black tracking-[0.4em] mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500/40"></div> Conflicts
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationPanel;
