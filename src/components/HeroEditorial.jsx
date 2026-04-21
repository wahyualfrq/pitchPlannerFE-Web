import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Play, MoveRight, ChevronDown } from 'lucide-react';

const HeroEditorial = ({ onRunDefault, onFileUpload, isLoading, hasRun }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
    e.target.value = null;
  };

  return (
    <section className="w-full relative min-h-screen flex flex-col justify-between items-center bg-black overflow-hidden py-16 md:py-24">
      
      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#020202]"></div>
        
        {/* Stadium Image */}
        <div 
          className="absolute inset-0 opacity-[0.12] mix-blend-lighten"
          style={{ 
            backgroundImage: "url('/stadium.png')",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>

        {/* Focal Point Glow (Behind Trophy) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/[0.08] rounded-full blur-[140px]"></div>
        
        {/* Perspective Pitch Lines */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.02)_100%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.02)_100%)] bg-[length:100px_100px] transform perspective-[1500px] rotateX-[80deg] origin-bottom opacity-20"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex-1 flex flex-col items-center justify-center">
        
        {/* 2. TITLE SECTION (ELEGANT & SPACED) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
             <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">
               Smart Match Scheduler
             </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-white leading-none">
            Pitch <span className="text-yellow-500/80">Planner</span>
          </h1>
          <p className="text-[10px] md:text-[11px] font-bold text-white/30 uppercase tracking-[0.5em] mt-4">
            Build your perfect championship schedule
          </p>
        </motion.div>

        {/* 3. TROPHY (CENTERPIECE - ELEGANT SCALE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -15, 0],
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 },
            y: { 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="relative z-30 mb-10 md:mb-20 flex items-center justify-center w-full"
        >
          {/* Subtle Radial Glow Behind */}
          <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-yellow-400/5 rounded-full blur-[100px]"></div>
          
          <img 
            src="/trophy.png" 
            alt="Championship Trophy" 
            className="w-auto max-h-[20vh] md:max-h-[35vh] lg:max-h-[40vh] object-contain relative z-10 drop-shadow-[0_0_60px_rgba(255,215,0,0.3)]"
          />
        </motion.div>

        {/* 4. ACTIONS (CLEAN & CENTERED) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <button 
            onClick={onRunDefault}
            className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-yellow-500 text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white transition-all shadow-xl hover:-translate-y-1 active:scale-95"
          >
            <span className="flex items-center justify-center gap-3">
              {isLoading ? 'Simulating...' : 'Run AI Simulation'}
              <Play className="w-3.5 h-3.5 fill-current" />
            </span>
          </button>

          <button 
            onClick={() => fileInputRef.current?.click()}
            className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95"
          >
            <span className="flex items-center justify-center gap-3 text-white/60">
              Import Matches <Upload className="w-3.5 h-3.5" />
            </span>
          </button>

          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </motion.div>
      </div>

      {/* Footer Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10 opacity-20 flex flex-col items-center gap-2 mb-4 md:mb-0"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em]">View Schedule</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>

    </section>
  );
};

export default HeroEditorial;
