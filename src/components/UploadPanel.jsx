import React, { useState, useRef } from 'react';
import { Upload, Play, FileText, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UploadPanel = ({ onFileUpload, onRunDemo, isLoading }) => {
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
    <div className="w-full max-w-4xl mx-auto mt-12 px-4">
      <div className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Interactive Drop Zone */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => !uploadedFile && fileInputRef.current?.click()}
              className={`relative aspect-video lg:aspect-square flex flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden ${
                isDragging ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-white/10 hover:border-white/20 bg-white/5'
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
                    key="file"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <span className="text-white font-bold mb-1 truncate max-w-[200px]">{uploadedFile.name}</span>
                    <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">CSV Loaded</span>
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); clearFile(); }}
                      className="mt-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-white font-bold mb-2 uppercase tracking-tighter italic text-xl">Drop CSV Here</p>
                    <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">or click to browse</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Actions & Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">System Input Panel</h3>
                <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-widest font-bold">
                  Initialize the scheduling engine by providing raw match data. Our Greedy algorithm will resolve all venue and team proximity conflicts automatically.
                </p>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleUpload}
                  disabled={!uploadedFile || isLoading}
                  className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/80 disabled:bg-gray-800 disabled:text-gray-600 text-black font-black py-5 px-8 rounded-xl flex items-center justify-center gap-3 transition-all uppercase tracking-tighter italic"
                >
                  <Upload className="w-5 h-5" />
                  {isLoading ? 'Processing...' : 'Upload & Optimize'}
                </button>

                <div className="flex items-center gap-4">
                  <div className="h-px bg-white/10 flex-1"></div>
                  <span className="text-gray-600 text-[10px] uppercase font-black tracking-[0.4em]">or</span>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>

                <button 
                  onClick={onRunDemo}
                  disabled={isLoading}
                  className="w-full bg-[#1A1A1A] hover:bg-[#222] text-white border border-white/10 font-black py-5 px-8 rounded-xl flex items-center justify-center gap-3 transition-all uppercase tracking-tighter italic"
                >
                  <Play className="w-5 h-5 text-[#D4AF37]" />
                  Execute System Demo
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="p-2 bg-[#D4AF37]/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                  Required Format: CSV with Date, Team_A, Team_B, and Venue columns.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPanel;
