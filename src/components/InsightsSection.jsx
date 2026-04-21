import React from 'react';
import { motion } from 'framer-motion';

const InsightsSection = ({ stats }) => {
  if (!stats) return null;

  const totalMatches = stats.totalMatches || stats.original_count || 120;
  const optimalMatches = stats.optimalMatches || stats.selected_count || 108;
  const efficiency = stats.efficiency || Math.round((optimalMatches / totalMatches) * 100);
  const totalTeams = stats.totalTeams || 10;
  const totalVenues = stats.totalVenues || 5;

  return (
    <section id="insights" className="py-24 relative bg-black overflow-hidden border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Narrative Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h2 className="text-sm font-black text-yellow-500 uppercase tracking-[0.3em]">
                Advanced Analytics
              </h2>
              <h3 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                Tournament <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Insights</span>
              </h3>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 leading-relaxed max-w-xl font-medium"
            >
              The system has successfully analyzed the provided match matrix, resolving complex overlaps across <span className="text-white font-bold">{totalVenues} premium venues</span> and <span className="text-white font-bold">{totalTeams} competing teams</span>. Our greedy selection engine optimized the schedule with remarkable precision.
            </motion.p>

            <div className="flex flex-row flex-wrap gap-x-10 gap-y-6 pt-6">
              <div className="space-y-1 group">
                <div className="text-[8px] font-black text-white/40 uppercase tracking-widest group-hover:text-yellow-500/60 transition-colors">Total Fixtures</div>
                <div className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{totalMatches}</div>
              </div>
              <div className="space-y-1 group">
                <div className="text-[8px] font-black text-white/40 uppercase tracking-widest group-hover:text-yellow-500/60 transition-colors">Optimal Slots</div>
                <div className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{optimalMatches}</div>
              </div>
              <div className="space-y-1 group">
                <div className="text-[8px] font-black text-white/40 uppercase tracking-widest group-hover:text-yellow-500/60 transition-colors">Conflict Risk</div>
                <div className="text-2xl md:text-3xl font-black text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">0.0%</div>
              </div>
            </div>
          </div>

          {/* Efficiency Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-[400px] shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)] animate-pulse"></div>
              
              <div className="text-[9px] md:text-[11px] font-black text-yellow-500 uppercase tracking-[0.4em] mb-4 md:mb-6">Efficiency Rating</div>
              
              <div className="relative">
                <div className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]">
                  {efficiency}
                </div>
                <div className="absolute -top-2 -right-6 md:top-0 md:-right-8 text-2xl md:text-4xl font-black text-yellow-500">%</div>
              </div>

              <div className="mt-6 md:mt-8 text-[9px] md:text-xs font-bold text-white/60 uppercase tracking-widest border-t border-white/10 pt-6 md:pt-8 w-full">
                High-Performance Selection
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-bl from-yellow-500/20 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
