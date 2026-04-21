import React from 'react';
import { motion } from 'framer-motion';
import { ListOrdered, CheckCircle, ShieldAlert, ArrowRight, Target, MapPin, CalendarCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      label: "Step 01",
      title: "Analyze Teams",
      desc: "We check team availability and historical data to prioritize the most important match pairings.",
      icon: Target
    },
    {
      label: "Step 02",
      title: "Assign Arenas",
      desc: "Our smart engine finds the best stadium for each match, ensuring no venue overlaps or travel fatigue.",
      icon: MapPin
    },
    {
      label: "Step 03",
      title: "Lock Schedule",
      desc: "The final calendar is generated with perfect balance, ready for the championship to begin.",
      icon: CalendarCheck
    }
  ];

  return (
    <section className="py-20 md:py-32 relative bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          
          <div className="space-y-10 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em]">
                How it works
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                Smart <br/> <span className="text-white/30">Scheduling</span>
              </h3>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 md:gap-8 group"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors">
                      <step.icon className="w-5 h-5 text-yellow-500" />
                    </div>
                    {idx < steps.length - 1 && <div className="w-px h-full bg-gradient-to-b from-yellow-500/20 to-transparent"></div>}
                  </div>
                  
                  <div className="space-y-1 md:space-y-2 pb-6 md:pb-10">
                    <div className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.3em]">{step.label}</div>
                    <div className="text-lg md:text-xl font-black text-white uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">{step.title}</div>
                    <p className="text-xs md:text-sm text-white/50 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decoration side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full border border-white/5 flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)]"></div>
              <div className="w-full h-full border border-yellow-500/5 rounded-full animate-[spin_30s_linear_infinite] border-dashed"></div>
              <div className="absolute w-2/3 h-2/3 border border-yellow-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse] border-dashed"></div>
              
              <div className="relative z-10 text-center space-y-2">
                <div className="text-6xl font-black text-white tracking-tighter">100%</div>
                <div className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">No Conflicts</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
