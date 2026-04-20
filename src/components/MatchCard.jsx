import React from 'react';
import { MapPin, Calendar, Activity, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MatchCard = ({ match, index }) => {
  const date = match.Date || match.START_TIME || match.date || '';
  const teamA = match.Team_A || match["HOME TEAM"] || match.teamA;
  const teamB = match.Team_B || match["AWAY TEAM"] || match.teamB;
  const venue = match.Venue || match.VENUE || match.venue;
  const optimizationScore = match.optimizationScore || 100;
  const conflictStatus = match.conflictStatus || "Optimal";
  const matchNo = match["MATCH NO"] || index + 1;

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-accent/30 transition-all duration-300 flex flex-col h-full relative"
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-2">
            <div className="inline-block bg-accent text-navy-900 font-black text-xs px-2.5 py-1 rounded-md uppercase tracking-wider w-max shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              Match #{matchNo}
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-navy-900/50 border border-white/5 text-xs font-semibold text-gray-300 w-max">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              {date ? new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : 'TBD'}
            </div>
          </div>
          
          <div className={`text-xs font-bold px-2.5 py-1 rounded-md ${optimizationScore > 95 ? 'bg-green-500/20 text-green-400' : 'bg-accent/20 text-accent'}`}>
            {optimizationScore}% Score
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-white group-hover:text-accent-light transition-colors w-2/5 text-right">{teamA}</h3>
            <div className="text-gray-500 font-black italic text-sm px-2">VS</div>
            <h3 className="font-bold text-lg text-white group-hover:text-accent-light transition-colors w-2/5 text-left">{teamB}</h3>
          </div>
        </div>

        <div className="space-y-3 mt-auto">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="truncate">{venue}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Activity className="w-4 h-4 text-gray-500" />
            <span>{conflictStatus}</span>
          </div>
        </div>

        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center group-hover:border-white/20 transition-colors cursor-pointer"
        >
          <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
            {isExpanded ? 'Hide Details' : 'View Details'}
          </span>
          <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all ${isExpanded ? 'bg-accent text-navy-900 rotate-90' : 'group-hover:bg-accent group-hover:text-navy-900'}`}>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pt-4 border-t border-white/10 text-sm space-y-2 overflow-hidden"
          >
            <div className="flex justify-between text-gray-400">
              <span>Start Time:</span>
              <span className="text-white font-medium">{match.START_TIME ? new Date(match.START_TIME).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'TBA'}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>End Time:</span>
              <span className="text-white font-medium">{match.END_TIME ? new Date(match.END_TIME).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : 'TBA'}</span>
            </div>
          </motion.div>
        )}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default MatchCard;
