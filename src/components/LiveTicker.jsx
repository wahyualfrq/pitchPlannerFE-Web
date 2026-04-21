import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const LiveTicker = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 -mt-8 relative z-40">
      <div className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <span className="text-[10px] font-black text-white uppercase tracking-tighter">Live System</span>
          </div>
          <div className="h-4 w-px bg-white/10 mx-2"></div>
        </div>

        <div className="flex-1 overflow-hidden whitespace-nowrap px-8 relative">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 text-[11px] font-bold text-white/80 uppercase tracking-widest"
          >
            <span className="flex items-center gap-2">
              <Trophy className="w-3 h-3 text-yellow-500" />
              Engine Status: <span className="text-yellow-500">Active</span>
            </span>
            <span>Tournament Model: <span className="text-yellow-500">FIFA Championship v2.4</span></span>
            <span>Constraint Resolution: <span className="text-yellow-500">99.9% Efficiency</span></span>
            <span>Real-time Pitch Planning: <span className="text-yellow-500">Online</span></span>
            <span className="flex items-center gap-2">
              <Trophy className="w-3 h-3 text-yellow-500" />
              Engine Status: <span className="text-yellow-500">Active</span>
            </span>
            <span>Tournament Model: <span className="text-yellow-500">FIFA Championship v2.4</span></span>
            <span>Constraint Resolution: <span className="text-yellow-500">99.9% Efficiency</span></span>
            <span>Real-time Pitch Planning: <span className="text-yellow-500">Online</span></span>
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/0 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/0 to-transparent"></div>
        </div>

        <div className="shrink-0 flex items-center gap-4">
          <div className="h-4 w-px bg-white/10 mx-2"></div>
          <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">
            v2.4.0-PRAD
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;
