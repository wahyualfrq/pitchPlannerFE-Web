import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Play, Database, Cpu } from 'lucide-react';
import HeroStatsOverlay from './HeroStatsOverlay';

const Hero = ({ onRunDefault, onFileUpload, onClear, isLoading, hasRun, stats }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
    e.target.value = null;
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden bg-navy-950">
      {/* Cinematic Stadium Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/40 to-navy-950 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Title Section */}
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-accent text-[12px] font-black uppercase tracking-[0.4em] mb-4 border-b border-accent/30 pb-2"
          >
            Official Match Scheduling Engine
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black text-white leading-none tracking-tighter uppercase drop-shadow-2xl"
          >
            PITCH<span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#B45309]">PLANNER</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-6 font-medium tracking-wide uppercase"
          >
            Algorithmic tournament synchronization and clash resolution
          </motion.p>
        </div>

        {/* Slanted Action Panels (Sports Dashboard Style) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 lg:gap-0 mt-8">
          
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          {/* Left Panel: Upload Action */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="group relative w-full md:w-auto flex-1 max-w-sm bg-white hover:bg-gray-100 transition-colors clip-slanted md:clip-slanted text-navy-950 font-black px-10 py-8 disabled:opacity-50 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-navy-900/60 mb-1">Step 01</span>
              <div className="flex items-center gap-2 text-xl md:text-2xl uppercase tracking-tight">
                <Upload className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                Upload Data
              </div>
            </div>
          </motion.button>

          {/* Center Panel: Primary Action (Run) */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onRunDefault}
            disabled={isLoading}
            className="group relative w-full md:w-auto flex-none z-20 bg-gradient-to-b from-[#D4AF37] to-[#D97706] hover:from-[#FCD34D] hover:to-[#D4AF37] clip-tab text-navy-950 font-black px-16 py-10 shadow-[0_0_50px_rgba(245,158,11,0.3)] transition-all md:-mx-6 disabled:opacity-50"
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-navy-900/70 mb-2 font-bold">Execute Engine</span>
              <div className="flex items-center gap-3 text-2xl md:text-3xl uppercase tracking-tighter">
                <Cpu className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
                {isLoading ? 'Processing' : 'Run Demo'}
              </div>
            </div>
          </motion.button>

          {/* Right Panel: Clear / Status */}
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onClick={hasRun ? onClear : undefined}
            disabled={!hasRun || isLoading}
            className={`group relative w-full md:w-auto flex-1 max-w-sm transition-colors clip-slanted md:clip-slanted-right font-black px-10 py-8 ${
              hasRun 
                ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer' 
                : 'bg-navy-800/80 backdrop-blur-md text-gray-500 cursor-not-allowed border border-white/5'
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest opacity-60 mb-1">
                {hasRun ? "System Action" : "System Status"}
              </span>
              <div className="flex items-center gap-2 text-xl md:text-2xl uppercase tracking-tight">
                {hasRun ? 'Clear Data' : 'Awaiting Input'}
              </div>
            </div>
          </motion.button>

        </div>

        {hasRun && <HeroStatsOverlay stats={stats} />}

      </div>
    </div>
  );
};

export default Hero;
