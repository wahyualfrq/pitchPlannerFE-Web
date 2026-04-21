import React, { useState, useRef } from 'react';
import { Upload, Play, FileText, CheckCircle, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UploadSection = ({ onFileUpload, onRunDemo, isLoading }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'text/csv') {
      setUploadedFile(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleUpload = () => {
    if (uploadedFile) {
      onFileUpload(uploadedFile);
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section className="w-full min-h-[600px] flex items-stretch border-y border-white/5 relative overflow-hidden bg-navy-950/20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left: Dominant Drag & Drop Area (65%) */}
        <div 
          className={`flex-[0.65] relative p-8 lg:p-12 transition-all duration-500 flex flex-col ${
            isDragging ? 'bg-[#D4AF37]/5' : 'bg-transparent'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div 
            onClick={() => !uploadedFile && fileInputRef.current?.click()}
            className={`flex-1 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed transition-all duration-300 cursor-pointer group relative ${
              isDragging ? 'border-[#D4AF37] scale-[0.98]' : 'border-white/10 hover:border-[#D4AF37]/50'
            }`}
          >
            <input 
              type="file" 
              accept=".csv" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <AnimatePresence mode="wait">
              {uploadedFile ? (
                <motion.div 
                  key="file-state"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 animate-ping"></div>
                    <FileText className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-2">{uploadedFile.name}</h3>
                  <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.4em]">Dataset Ready for Processing</p>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); clearFile(); }}
                    className="mt-12 flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-xs font-black uppercase tracking-widest transition-all"
                  >
                    <X className="w-4 h-4" /> Remove File
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center text-center px-6"
                >
                  <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-[#D4AF37]/50">
                    <Upload className="w-8 h-8 text-gray-500 group-hover:text-[#D4AF37]" />
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-black text-white italic uppercase tracking-tighter mb-4 leading-none">
                    Drop Raw <span className="text-gradient-accent">Data</span> Here
                  </h2>
                  <p className="text-gray-500 font-bold text-xs lg:text-sm uppercase tracking-[0.3em] max-w-md">
                    Initialize engine with tournament CSV or click to browse system files
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative corners */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-white/10 group-hover:border-[#D4AF37]/30 transition-colors"></div>
            <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-[#D4AF37]/30 transition-colors"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-[#D4AF37]/30 transition-colors"></div>
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-[#D4AF37]/30 transition-colors"></div>
          </div>
        </div>

        {/* Right: Info & Actions (35%) */}
        <div className="flex-[0.35] bg-black/40 backdrop-blur-md p-8 lg:p-12 border-l border-white/5 flex flex-col justify-center">
          <div className="mb-12">
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Section 01</span>
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-6 leading-tight">System Input<br/>Controller</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium uppercase tracking-widest italic opacity-80">
              The engine requires a structured CSV to resolve conflicts. Upload your schedule to begin the greedy optimization pass.
            </p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleUpload}
              disabled={!uploadedFile || isLoading}
              className="w-full group bg-[#D4AF37] hover:bg-white disabled:bg-white/5 disabled:text-gray-600 text-black font-black py-6 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-tighter italic shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] hover:shadow-none"
            >
              {isLoading ? 'Optimizing...' : 'Initialize Engine'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={onRunDemo}
              disabled={isLoading}
              className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black py-6 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-tighter italic"
            >
              <Play className="w-5 h-5 text-[#D4AF37]" />
              Run System Demo
            </button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-loose">
                Supports standard IPL format with <span className="text-white">Date, TeamA, TeamB</span> and <span className="text-white">Venue</span> logical columns.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
