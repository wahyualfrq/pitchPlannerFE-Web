import React, { useState } from 'react';
import { MapPin, Calendar, Activity, ChevronRight, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MatchCard = ({ match, index }) => {
  const date = match.START_TIME || match.Date || match.date || '';
  const teamA = match.Team_A || match["HOME TEAM"] || match.teamA;
  const teamB = match.Team_B || match["AWAY TEAM"] || match.teamB;
  const venue = match.Venue || match.VENUE || match.venue;
  const matchNo = match["MATCH NO"] || index + 1;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full group cursor-pointer overflow-hidden rounded-2xl transition-all duration-500"
    >
      {/* Cinematic Card Base */}
      <div className="bg-[#0a0a0a] border border-white/5 group-hover:border-yellow-500/30 p-8 shadow-2xl relative overflow-hidden group-hover:shadow-[0_0_50px_rgba(255,215,0,0.1)] transition-all duration-500">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>

        {/* Header Info */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,215,0,0.8)]"></div>
             <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Match #{String(matchNo).padStart(2, '0')}</span>
          </div>
          <div className="text-[10px] font-black text-yellow-500 uppercase tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
            Confirmed
          </div>
        </div>

        {/* Teams Area */}
        <div className="flex flex-col items-center gap-6 relative z-10">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-black text-xl md:text-2xl text-white tracking-tighter uppercase w-[40%] text-left line-clamp-2">
              {teamA}
            </h3>
            
            <div className="relative flex flex-col items-center">
               <div className="text-2xl font-black text-yellow-500 italic transform skew-x-[-15deg] group-hover:scale-125 transition-transform duration-500">VS</div>
               <div className="absolute -inset-4 bg-yellow-500/5 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform"></div>
            </div>

            <h3 className="font-black text-xl md:text-2xl text-white tracking-tighter uppercase w-[40%] text-right line-clamp-2">
              {teamB}
            </h3>
          </div>
        </div>

        {/* Footer Data */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
          <div className="flex items-center gap-4 group/venue">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/venue:bg-yellow-500/10 transition-colors">
              <MapPin className="w-4 h-4 text-white/40 group-hover/venue:text-yellow-500 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Venue</span>
              <span className="text-xs font-bold text-white group-hover/venue:text-yellow-500 transition-colors uppercase tracking-wide">{venue}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group/date">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/date:bg-yellow-500/10 transition-colors">
                <Calendar className="w-4 h-4 text-white/40 group-hover/date:text-yellow-500 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Kick-off</span>
                <span className="text-xs font-bold text-white uppercase tracking-wide">
                  {date ? new Date(typeof date === 'string' ? date.replace(' ', 'T') : date).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }) : 'TBD'}
                </span>
              </div>
            </div>
            
            <div className="text-2xl font-black text-white/20 group-hover:text-yellow-500 transition-colors tracking-tighter">
               {match.START_TIME ? new Date(typeof match.START_TIME === 'string' ? match.START_TIME.replace(' ', 'T') : match.START_TIME).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) : '19:30'}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MatchCard;
