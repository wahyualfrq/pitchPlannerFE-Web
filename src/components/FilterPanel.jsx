import React from 'react';
import { Filter, Search } from 'lucide-react';

const FilterPanel = ({ 
  filterTeam, setFilterTeam, 
  filterVenue, setFilterVenue, 
  filterDate, setFilterDate,
  availableTeams, availableVenues 
}) => {
  return (
    <div className="glass-panel p-6 rounded-2xl mb-10 border border-white/5 shadow-2xl">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex items-center gap-3 text-white font-bold text-lg border-r border-white/10 pr-6 w-full md:w-auto">
          <Filter className="text-accent w-5 h-5" />
          Filters
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="relative">
            <select 
              value={filterTeam}
              onChange={(e) => setFilterTeam(e.target.value)}
              className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            >
              <option value="">All Teams</option>
              {availableTeams?.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <select 
              value={filterVenue}
              onChange={(e) => setFilterVenue(e.target.value)}
              className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 appearance-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            >
              <option value="">All Venues</option>
              {availableVenues?.map(venue => (
                <option key={venue} value={venue}>{venue}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <input 
              type="date" 
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
        </div>

        <button 
          onClick={() => {
            setFilterTeam('');
            setFilterVenue('');
            setFilterDate('');
          }}
          className="w-full md:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 font-semibold"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
