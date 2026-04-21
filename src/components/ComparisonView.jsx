import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ArrowRightLeft, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const ComparisonView = ({ stats }) => {
  // Use provided stats or default demo data
  const originalCount = stats?.original_count || 120;
  const selectedCount = stats?.selected_count || 108;
  const rejectedCount = stats?.rejected_count || 12;
  const efficiency = stats ? Math.round((selectedCount / originalCount) * 100) : 90;

  const originalMatches = [
    { teamA: "Mumbai Indians", teamB: "Chennai Super Kings", date: "Apr 25", status: "Conflict", venue: "Wankhede Stadium" },
    { teamA: "Delhi Capitals", teamB: "Kolkata Knight Riders", date: "Apr 25", status: "Conflict", venue: "Wankhede Stadium" },
    { teamA: "Royal Challengers", teamB: "Sunrisers Hyderabad", date: "Apr 26", status: "Overbooked", venue: "M. Chinnaswamy" },
  ];

  const optimizedMatches = [
    { teamA: "Mumbai Indians", teamB: "Chennai Super Kings", date: "Apr 25", status: "Optimal", venue: "Wankhede Stadium" },
    { teamA: "Delhi Capitals", teamB: "Kolkata Knight Riders", date: "Apr 26", status: "Adjusted", venue: "Arun Jaitley Stadium" },
    { teamA: "Royal Challengers", teamB: "Sunrisers Hyderabad", date: "Apr 27", status: "Optimal", venue: "M. Chinnaswamy" },
  ];

  return (
    <div className="w-full relative py-12">
      
      {/* Summary Stats Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-black/20 border border-white/5 rounded-3xl overflow-hidden shadow-2xl mb-24">
        <div className="p-10 flex items-center gap-8 border-r border-white/5 relative group">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500 opacity-30 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-5 bg-red-500/10 rounded-2xl border border-red-500/20">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <div className="text-5xl font-black text-white italic tracking-tighter">{rejectedCount}</div>
            <div className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] mt-2">Conflicts Resolved</div>
          </div>
        </div>
        
        <div className="p-10 flex items-center gap-8 border-r border-white/5 relative group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37] opacity-30 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-5 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20">
            <ArrowRightLeft className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-5xl font-black text-white italic tracking-tighter">{selectedCount}</div>
            <div className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] mt-2">Matches Validated</div>
          </div>
        </div>

        <div className="p-10 flex items-center gap-8 relative group">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-30 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-5 bg-green-500/10 rounded-2xl border border-green-500/20">
            <ShieldCheck className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <div className="text-5xl font-black text-white italic tracking-tighter">{efficiency}%</div>
            <div className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] mt-2">Engine Efficiency</div>
          </div>
        </div>
      </div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter italic leading-none">
          Logic <span className="text-gradient-accent">Validation</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 uppercase tracking-[0.5em] text-[10px] font-bold">
          Algorithmic scheduling pass comparison
        </p>
      </div>

      <div className="flex flex-col xl:flex-row items-stretch gap-6 justify-center">
        {/* Before */}
        <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-3xl p-10 lg:p-16 relative overflow-hidden group border border-white/5 border-b-red-500/50 border-b-4">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <h3 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter relative z-10 italic">
            Raw Input
            <span className="block text-[10px] text-red-500 tracking-[0.4em] mt-2 not-italic font-black">High Conflict Density</span>
          </h3>
          
          <div className="space-y-4 relative z-10">
            {originalMatches.map((m, i) => (
              <div key={i} className="bg-white/[0.03] p-6 flex justify-between items-center border-l-2 border-red-500/30 rounded-r-xl">
                <div>
                  <div className="font-black text-white text-base uppercase tracking-tight">{m.teamA} <span className="text-gray-600 px-1 italic">VS</span> {m.teamB}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-2 font-bold">{m.venue} | {m.date}</div>
                </div>
                <div className="text-[9px] font-black px-3 py-1.5 bg-red-500/10 text-red-500 uppercase tracking-widest border border-red-500/20 rounded">
                  Conflict
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-3xl p-10 lg:p-16 relative overflow-hidden group border border-white/5 border-b-[#D4AF37]/50 border-b-4">
          <div className="absolute inset-0 bg-[#D4AF37]/5 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <h3 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter relative z-10 italic">
            Engine Output
            <span className="block text-[10px] text-[#D4AF37] tracking-[0.4em] mt-2 not-italic font-black">Clash-Free Optimized</span>
          </h3>
          
          <div className="space-y-4 relative z-10">
            {optimizedMatches.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] p-6 flex justify-between items-center border-l-2 border-[#D4AF37] rounded-r-xl"
              >
                <div>
                  <div className="font-black text-white text-base uppercase tracking-tight">{m.teamA} <span className="text-gray-600 px-1 italic">VS</span> {m.teamB}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-2 font-bold">{m.venue} | {m.date}</div>
                </div>
                <div className={`text-[9px] font-black px-3 py-1.5 uppercase tracking-widest border rounded ${
                  m.status === 'Optimal' 
                    ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                    : 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20'
                }`}>
                  {m.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;
