import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Zap, Loader2 } from 'lucide-react';

const Hero = ({ onRunDefault, onFileUpload, isLoading }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
    e.target.value = null;
  };

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-900/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
          alt="Cricket Stadium" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
              PitchPlanner
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 font-light"
        >
          AI-powered scheduling using Greedy Algorithm. Experience conflict-free, optimized match allocation across all venues.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-dark text-navy-900 font-bold text-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
            Upload CSV & Run
          </button>
          <button 
            onClick={onRunDefault}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-card text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5 text-accent" />}
            Run Default Setup
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
