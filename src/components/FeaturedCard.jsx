import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Calendar, MapPin, Zap } from 'lucide-react';

const FeaturedCard = ({ stats }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative max-w-4xl mx-auto -mt-24 z-20 group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent-light to-accent-dark rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-500"></div>
      
      <div className="relative glass-card rounded-2xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wider uppercase border border-accent/30">
              <Zap className="w-4 h-4" />
              Machine Learning Model
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Best Optimized <span className="text-gradient-accent">Schedule</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Greedy algorithm approach significantly reduced scheduling conflicts across all participating teams and venues.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">
            <div className="bg-navy-900/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center group-hover:bg-navy-900/80 transition-colors">
              <Calendar className="w-6 h-6 text-gray-400 mb-2" />
              <div className="text-2xl font-bold text-white">{stats.original_count || stats.totalMatches || 0}</div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider text-center mt-1">Original</div>
            </div>

            <div className="bg-navy-900/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center group-hover:bg-navy-900/80 transition-colors">
              <Activity className="w-6 h-6 text-green-400 mb-2" />
              <div className="text-2xl font-bold text-white">{stats.selected_count || 0}</div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider text-center mt-1">Selected</div>
            </div>

            <div className="bg-navy-900/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center group-hover:bg-navy-900/80 transition-colors">
              <MapPin className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-2xl font-bold text-white">{stats.rejected_count || 0}</div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider text-center mt-1">Rejected</div>
            </div>
            
            <div className="bg-navy-900/50 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center group-hover:bg-navy-900/80 transition-colors">
              <Zap className="w-6 h-6 text-accent mb-2" />
              <div className="text-2xl font-bold text-white">
                {stats.original_count ? Math.round((stats.rejected_count / stats.original_count) * 100) : (stats.conflictReduction || 0)}%
              </div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider text-center mt-1">Reduction</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center md:justify-start">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 group/btn">
            View Optimization Details
            <Zap className="w-4 h-4 text-accent group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
