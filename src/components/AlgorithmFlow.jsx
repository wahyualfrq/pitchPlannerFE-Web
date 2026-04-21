import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Trophy, CheckSquare, Search, Calendar } from 'lucide-react';

const AlgorithmFlow = () => {
  const steps = [
    { title: "Review", icon: Search, desc: "Checking team rest days" },
    { title: "Balance", icon: CheckSquare, desc: "Matching venues to dates" },
    { title: "Finalize", icon: Calendar, desc: "Generating match list" }
  ];

  return (
    <section className="py-10 md:py-24 relative bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.4em] mb-2">
            Our Method
          </h2>
          <h3 className="text-xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Scheduling <span className="text-white/40">Steps</span>
          </h3>
        </div>

        <div className="flex flex-row items-start justify-center gap-3 md:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-white/10 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex-1 relative flex flex-col items-center text-center group z-10"
            >
              <div className="w-14 h-14 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-[#050505] border border-white/10 group-hover:border-yellow-500/50 flex items-center justify-center mb-3 md:mb-6 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-yellow-500/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <step.icon className="w-5 h-5 md:w-8 md:h-8 text-white/40 group-hover:text-yellow-500 transition-colors duration-500" />
              </div>
              
              <div className="space-y-0.5">
                <div className="text-[11px] md:text-xl font-black text-white uppercase tracking-tighter leading-none">{step.title}</div>
                <div className="text-[7px] md:text-[9px] font-bold text-white/30 uppercase tracking-widest leading-tight md:mt-1">{step.desc}</div>
              </div>

              {/* Status Indicator */}
              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-green-500/60"></div>
                <span className="text-[7px] font-black text-white/10 uppercase tracking-widest">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgorithmFlow;
