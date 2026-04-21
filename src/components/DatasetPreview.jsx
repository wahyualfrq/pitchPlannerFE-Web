import React from 'react';
import { Download, Info, Database } from 'lucide-react';

const DatasetPreview = () => {
  const tableData = [
    { date: "26/03/22", time: "7:30", ampm: "PM", home: "Chennai Super Kings", away: "Kolkata Knight Riders", venue: "Wankhede Stadium" },
    { date: "27/03/22", time: "3:30", ampm: "PM", home: "Delhi Capitals", away: "Mumbai Indians", venue: "Brabourne - CCI" },
    { date: "27/03/22", time: "7:30", ampm: "PM", home: "Punjab Kings", away: "Royal Challengers Bangalore", venue: "DY Patil Stadium" },
    { date: "28/03/22", time: "7:30", ampm: "PM", home: "Gujarat Titans", away: "Lucknow Super Giants", venue: "Wankhede Stadium" },
    { date: "29/03/22", time: "7:30", ampm: "PM", home: "Sunrisers Hyderabad", away: "Rajasthan Royals", venue: "MCA Stadium, Pune" },
  ];

  return (
    <section id="dataset" className="py-20 md:py-32 relative bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,215,0,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
          
          <div className="lg:w-1/3 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em]">
                Data Input
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                Match <br/> <span className="text-white/30">Dataset</span>
              </h3>
            </div>
            
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium">
              We process your match data to create a balanced schedule. You can download the sample template below to see how to structure your match list.
            </p>

            <a 
              href="/dataset/ipl_schedule.csv" 
              download 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:bg-yellow-500 hover:text-black transition-all duration-500 rounded-full group shadow-lg"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Download Template
            </a>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-[#050505] border border-white/10 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="bg-white/[0.03] border-b border-white/5 px-6 md:px-8 py-5 md:py-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Database className="w-3.5 h-3.5 text-yellow-500" />
                  <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.3em]">ipl_schedule.csv</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] text-yellow-500 cursor-help group/info relative font-black uppercase tracking-widest">
                  <Info className="w-3 h-3" />
                  <span>Columns</span>
                  <div className="absolute bottom-full right-0 mb-4 w-64 p-5 bg-black border border-yellow-500/20 shadow-2xl opacity-0 group-hover/info:opacity-100 transition-opacity pointer-events-none z-20 rounded-2xl">
                    <p className="text-yellow-500 mb-3 font-black uppercase tracking-widest text-[9px]">Required Fields:</p>
                    <ul className="space-y-2 text-[10px] font-bold text-white/60">
                      <li className="flex justify-between"><span>DATE</span> <span className="text-white">DD/MM/YY</span></li>
                      <li className="flex justify-between"><span>TIME</span> <span className="text-white">HH:MM</span></li>
                      <li className="flex justify-between"><span>HOME</span> <span className="text-white">Team A</span></li>
                      <li className="flex justify-between"><span>VENUE</span> <span className="text-white">Stadium</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                  <thead>
                    <tr className="text-[8px] md:text-[9px] font-black text-white/40 uppercase tracking-[0.3em] bg-white/[0.02]">
                      <th className="px-6 py-4 md:py-5 border-b border-white/5">DATE</th>
                      <th className="px-6 py-4 md:py-5 border-b border-white/5">TIME</th>
                      <th className="px-6 py-4 md:py-5 border-b border-white/5">HOME TEAM</th>
                      <th className="px-6 py-4 md:py-5 border-b border-white/5">AWAY TEAM</th>
                      <th className="px-6 py-4 md:py-5 border-b border-white/5 text-yellow-500">VENUE</th>
                    </tr>
                  </thead>
                  <tbody className="text-[10px] md:text-[11px] font-bold">
                    {tableData.map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-yellow-500/[0.02] transition-all duration-300 group/row whitespace-nowrap">
                        <td className="px-6 py-4 md:py-5 text-white/50 font-mono tracking-wider">{row.date}</td>
                        <td className="px-6 py-4 md:py-5 text-white/50">{row.time} {row.ampm}</td>
                        <td className="px-6 py-4 md:py-5 text-white">{row.home}</td>
                        <td className="px-6 py-4 md:py-5 text-white">{row.away}</td>
                        <td className="px-6 py-4 md:py-5 text-yellow-500/80 uppercase tracking-widest">{row.venue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-white/[0.02] px-6 md:px-8 py-3 md:py-4 text-[8px] uppercase tracking-[0.3em] font-black text-white/20 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span>Data Preview</span>
                <span>5 matches displayed</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DatasetPreview;
