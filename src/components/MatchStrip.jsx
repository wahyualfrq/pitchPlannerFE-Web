import React from 'react';
import { motion } from 'framer-motion';

const MatchStrip = ({ matches }) => {
  if (!matches || matches.length === 0) return null;

  const stripMatches = matches.slice(0, 5);

  return (
    <div className="w-full bg-[#111111]/80 backdrop-blur-md border-b border-white/10 overflow-hidden py-3 px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto flex items-center">
        <div className="text-[#ffd700] text-[10px] font-bold uppercase tracking-[0.2em] mr-8 shrink-0 flex items-center gap-2 text-glow">
          <div className="w-2 h-2 bg-[#ffd700] rounded-full animate-pulse shadow-[0_0_8px_#ffd700]"></div>
          Live Tracker
        </div>
        
        <div className="flex gap-8 overflow-x-auto custom-scrollbar pb-1 sm:pb-0 hide-scrollbar">
          {stripMatches.map((match, idx) => {
            const teamA = match.Team_A || match["HOME TEAM"] || match.teamA;
            const teamB = match.Team_B || match["AWAY TEAM"] || match.teamB;
            const date = match.START_TIME || match.Date || match.date;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-center gap-4 shrink-0 border-r border-white/10 pr-8 last:border-0"
              >
                <div className="flex flex-col text-right">
                  <span className="text-white font-bold text-sm tracking-tight truncate max-w-[120px]">{teamA}</span>
                </div>
                <div className="bg-[#ffd700]/10 text-[#ffd700] border border-[#ffd700]/30 text-[9px] font-black px-2 py-0.5 rounded shadow-[0_0_10px_rgba(0,209,255,0.2)]">VS</div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-sm tracking-tight truncate max-w-[120px]">{teamB}</span>
                </div>
                <div className="text-yellow-400 text-[10px] font-bold tracking-widest ml-2 opacity-80">
                  {date ? new Date(typeof date === 'string' ? date.replace(' ', 'T') : date).toLocaleDateString('en-US', { day: '2-digit', month: 'short' }) : 'TBD'}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchStrip;
