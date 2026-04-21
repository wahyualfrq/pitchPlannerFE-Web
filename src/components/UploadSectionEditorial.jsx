import React, { useState, useRef } from 'react';
import { Upload, FileText, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PitchPattern = () => (
  <svg width="100%" height="100%" className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <pattern id="pitch-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#pitch-grid)" />
    <circle cx="50%" cy="50%" r="60" fill="none" stroke="white" strokeWidth="2" />
    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="2" />
  </svg>
);

const FootballIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 12l-3-4 1.5-2.5h3L15 8l-3 4z"></path>
    <path d="M12 12l-4 3-2-1.5M12 12l4 3 2-1.5M12 22v-3.5M2 12h3.5M22 12h-3.5"></path>
  </svg>
);

const UploadSectionEditorial = ({ onFileUpload, isLoading }) => {
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
      onFileUpload(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      onFileUpload(file);
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section className="w-full relative py-24 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Full Width Upload Card */}
        <div className="w-full glass-panel relative overflow-hidden flex flex-col min-h-[400px] group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,209,255,0.15)] hover:scale-[1.01]">
          <PitchPattern />
          
          <div className="flex flex-col lg:flex-row w-full h-full relative z-10">
            {/* Left Context Info */}
            <div className="flex-1 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent flex flex-col justify-center">
              <h2 className="text-sm font-bold text-[#ffd700] uppercase tracking-widest mb-4 text-glow flex items-center gap-2">
                <FootballIcon className="w-4 h-4" /> System Input
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
                Provide raw schedule.<br />We resolve the rest.
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Upload your tournament fixtures in CSV format. The system prepares data for the Greedy Selection Algorithm, ensuring venue constraints are strictly respected.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                  <Check className="w-4 h-4 text-[#ffd700] drop-shadow-[0_0_5px_#ffd700]" /> Date, Time, Venue Columns
                </li>
                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                  <Check className="w-4 h-4 text-[#ffd700] drop-shadow-[0_0_5px_#ffd700]" /> Team A vs Team B Format
                </li>
              </ul>
            </div>

            {/* Right Interactive Upload Area */}
            <div 
              className={`flex-1 flex flex-col items-center justify-center p-10 lg:p-16 transition-all duration-300 relative border-2 border-dashed mx-6 my-6 lg:mx-8 lg:my-8 bg-[#0a0a0a]/30 rounded-xl ${
                isDragging ? 'border-[#ffd700] bg-[#ffd700]/10 scale-105 shadow-[0_0_20px_rgba(0,209,255,0.2)]' : 'border-[#ffd700]/20 hover:border-[#ffd700]/50 hover:bg-[#ffd700]/5'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
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
                    key="file-loaded"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center w-full"
                  >
                    <div className="w-20 h-20 bg-[#ffd700]/10 rounded-full flex items-center justify-center mb-6 border border-[#ffd700]/30 shadow-[0_0_15px_rgba(0,209,255,0.2)] relative">
                      <div className="absolute inset-0 rounded-full border border-[#ffd700] animate-ping opacity-20"></div>
                      <FileText className="w-8 h-8 text-[#ffd700]" />
                    </div>
                    <h4 className="text-xl font-bold text-white truncate max-w-full px-4">{uploadedFile.name}</h4>
                    <p className="text-sm text-slate-300 font-bold mt-2 mb-8">Upload successful. Parsing dataset...</p>
                    
                    {isLoading ? (
                      <div className="w-full max-w-xs h-1.5 bg-[#111111] overflow-hidden rounded-full border border-white/10">
                         <div className="h-full bg-[#ffd700] animate-[pulse_1s_ease-in-out_infinite] w-full origin-left shadow-[0_0_10px_#ffd700]"></div>
                      </div>
                    ) : (
                      <button 
                        onClick={(e) => { e.stopPropagation(); clearFile(); }}
                        className="text-xs font-bold text-slate-300 hover:text-red-400 flex items-center gap-1 transition-colors uppercase tracking-widest px-4 py-2 border border-slate-700 hover:border-red-500/50 rounded bg-black/20"
                      >
                        <X className="w-3 h-3" /> Clear File
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="upload-prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-center cursor-pointer group/upload"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="w-24 h-24 bg-[#0a0a0a]/80 rounded-full flex items-center justify-center mb-6 group-hover/upload:bg-[#ffd700]/10 transition-colors border border-white/10 group-hover/upload:border-[#ffd700]/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover/upload:shadow-[0_0_20px_rgba(0,209,255,0.4)] relative">
                      <FootballIcon className="w-10 h-10 text-slate-300 group-hover/upload:text-[#ffd700] transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover/upload:text-[#ffd700] transition-colors text-glow">Load Match Data</h4>
                    <p className="text-white text-sm font-bold uppercase tracking-widest mt-2 flex flex-col gap-2 items-center">
                      <span>Click to browse</span>
                      <span className="text-[#ffd700]/50">— OR —</span>
                      <span>Drag & Drop CSV</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UploadSectionEditorial;
