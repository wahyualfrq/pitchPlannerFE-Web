import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldAlert, Activity } from 'lucide-react';

const HeroStatsOverlay = ({ stats }) => {
  const data = [
    { label: "Total Matches", value: stats?.original_count || 120, icon: Database },
    { label: "Conflicts Detected", value: stats?.rejected_count || 12, icon: ShieldAlert, color: "text-red-500" },
    { label: "Optimized Output", value: stats?.selected_count || 108, icon: Activity, color: "text-[#D4AF37]" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="hidden lg:flex items-center gap-8 px-8 py-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 mt-12 w-fit mx-auto"
    >
      {data.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/5 rounded-lg">
              <item.icon className={`w-4 h-4 ${item.color || 'text-gray-400'}`} />
            </div>
            <div>
              <div className="text-xl font-black text-white italic tracking-tighter leading-none">{item.value}</div>
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">{item.label}</div>
            </div>
          </div>
          {idx < data.length - 1 && (
            <div className="w-px h-8 bg-white/10"></div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default HeroStatsOverlay;
