import React from 'react';
import { Filter, Search } from 'lucide-react';

const FilterPanel = ({ 
  filterTeam, setFilterTeam, 
  filterVenue, setFilterVenue, 
  filterDate, setFilterDate,
  availableTeams, availableVenues 
}) => {
  return (
    <div className="glass-panel p-6 mb-10 border-l-4 border-l-[#ffd700]">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest border-r border-white/10 pr-6 w-full md:w-auto">
          <Filter className="text-[#ffd700] w-5 h-5 text-glow" />
          Filters
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="relative">
            <select 
              value={filterTeam}
              onChange={(e) => setFilterTeam(e.target.value)}
              className="w-full bg-[#111111]/80 border border-[#ffd700]/20 px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#ffd700] transition-all rounded-none"
            >
              <option value="" className="bg-[#0a0a0a]">All Teams</option>
              {availableTeams?.map(team => (
                <option key={team} value={team} className="bg-[#0a0a0a]">{team}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <select 
              value={filterVenue}
              onChange={(e) => setFilterVenue(e.target.value)}
              className="w-full bg-[#111111]/80 border border-[#ffd700]/20 px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#ffd700] transition-all rounded-none"
            >
              <option value="" className="bg-[#0a0a0a]">All Venues</option>
              {availableVenues?.map(venue => (
                <option key={venue} value={venue} className="bg-[#0a0a0a]">{venue}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <input 
              type="date" 
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full bg-[#111111]/80 border border-[#ffd700]/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ffd700] transition-all rounded-none [color-scheme:dark]"
            />
          </div>
        </div>

        <button 
          onClick={() => {
            setFilterTeam('');
            setFilterVenue('');
            setFilterDate('');
          }}
          className="w-full md:w-auto px-6 py-3 bg-transparent hover:bg-[#ffd700]/10 text-slate-300 hover:text-white border border-[#ffd700]/30 hover:border-[#ffd700] transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest rounded-none"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
