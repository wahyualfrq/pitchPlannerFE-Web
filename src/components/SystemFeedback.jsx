import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Loader2 } from 'lucide-react';

const SystemFeedback = ({ isLoading }) => {
  const [logs, setLogs] = useState([]);
  const messages = [
    "Initializing Optimization Engine...",
    "Loading dataset from memory buffer...",
    "Scanning for venue constraints...",
    "Analyzing team rest periods (min 48h)...",
    "Running Greedy Selection Algorithm...",
    "Heuristic pass: Minimizing travel distance...",
    "Resolving remaining venue clashes...",
    "Verifying slot availability (Evening/Day)...",
    "Finalizing optimal tournament path...",
    "Generating visualization data..."
  ];

  useEffect(() => {
    if (!isLoading) {
      setLogs([]);
      return;
    }

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < messages.length) {
        setLogs(prev => [...prev, {
          text: messages[currentIdx],
          timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 })
        }]);
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-2xl bg-[#050505] border border-yellow-500/20 rounded-2xl shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden relative z-10"
      >
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-[#0a0a0a] to-[#111111] px-6 py-4 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>
            <div className="h-4 w-px bg-white/10 mx-2"></div>
            <span className="text-[10px] font-mono text-yellow-500/60 uppercase tracking-[0.3em]">Neural Solver // v2.4.1</span>
          </div>
          <Cpu className="w-5 h-5 text-yellow-500 animate-pulse" />
        </div>

        {/* Terminal Body */}
        <div className="p-8 h-[350px] overflow-y-auto font-mono text-[12px] leading-relaxed custom-scrollbar bg-black/40">
          <div className="space-y-3">
            {logs.map((log, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={i} 
                className="flex gap-6 group"
              >
                <span className="text-yellow-500/30 shrink-0 font-bold">[{log.timestamp}]</span>
                <span className="text-white/80">
                  <span className="text-yellow-500 mr-3 font-black">»</span>
                  {log.text}
                </span>
              </motion.div>
            ))}
            <div className="flex items-center gap-3 text-yellow-500 mt-6 bg-yellow-500/5 p-4 rounded-xl border border-yellow-500/10">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">Synchronizing match data buffers...</span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-8 py-6 bg-gradient-to-t from-[#0a0a0a] to-transparent flex justify-between items-center border-t border-white/5">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <div className="text-[9px] text-white/40 uppercase font-black tracking-widest">Processing Core</div>
              <div className="text-xs text-white font-bold">GREEDY_ALPHA_V3</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[9px] text-white/40 uppercase font-black tracking-widest">Memory Load</div>
              <div className="text-xs text-white font-bold">128.4 MB</div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-[9px] text-yellow-500 uppercase font-black tracking-widest">Optimization Status</div>
            <div className="text-xs text-yellow-500 font-bold animate-pulse">CALCULATING...</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SystemFeedback;
