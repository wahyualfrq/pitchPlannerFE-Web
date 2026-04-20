import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCard from '../components/FeaturedCard';
import FilterPanel from '../components/FilterPanel';
import MatchCard from '../components/MatchCard';
import Footer from '../components/Footer';
import { dummyMatches, summaryStats } from '../data/dummyData';
import { ArrowUp } from 'lucide-react';

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [stats, setStats] = useState(null);
  const [hasRun, setHasRun] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filterTeam, setFilterTeam] = useState('');
  const [filterVenue, setFilterVenue] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fetchOptimization = async (file = null) => {
    setIsLoading(true);
    setError(null);
    try {
      const url = 'http://localhost:5000/api/optimize';
      let options = { method: 'GET' };

      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        options = {
          method: 'POST',
          body: formData,
        };
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      if (result.success && result.data) {
        setMatches(result.data.optimal_schedule || []);
        setStats({
          original_count: result.data.original_count,
          selected_count: result.data.selected_count,
          rejected_count: result.data.rejected_count,
        });
        setHasRun(true);
        setVisibleCount(6);
      } else {
        throw new Error(result.message || 'Optimization failed');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch optimized schedule. Please ensure the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRunDefault = () => {
    fetchOptimization();
  };

  const handleFileUpload = (file) => {
    fetchOptimization(file);
  };

  const availableTeams = [...new Set(matches.flatMap(m => [m.Team_A || m["HOME TEAM"] || m.teamA, m.Team_B || m["AWAY TEAM"] || m.teamB]).filter(Boolean))];
  const availableVenues = [...new Set(matches.map(m => m.Venue || m.VENUE || m.venue).filter(Boolean))];

  const filteredMatches = matches.filter(match => {
    const teamA = match.Team_A || match["HOME TEAM"] || match.teamA || "";
    const teamB = match.Team_B || match["AWAY TEAM"] || match.teamB || "";
    const venue = match.Venue || match.VENUE || match.venue || "";
    const date = match.Date || match.START_TIME || match.date || "";
    
    let matchTeam = true;
    if (filterTeam) {
      matchTeam = teamA === filterTeam || teamB === filterTeam;
    }
    
    let matchVenue = true;
    if (filterVenue) {
      matchVenue = venue === filterVenue;
    }
    
    let matchDate = true;
    if (filterDate) {
      matchDate = date.startsWith(filterDate);
    }
    
    return matchTeam && matchVenue && matchDate;
  });

  const displayedMatches = filteredMatches.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans selection:bg-accent selection:text-navy-900">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero 
            onRunDefault={handleRunDefault} 
            onFileUpload={handleFileUpload} 
            isLoading={isLoading} 
          />
        </section>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {!hasRun && !isLoading ? (
            <div className="py-20 text-center glass-panel rounded-2xl border border-white/10 mt-10">
              <div className="text-6xl mb-4 opacity-50">📊</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Data Loaded</h3>
              <p className="text-gray-400 max-w-lg mx-auto">Upload a dataset or run the default setup from the hero section above to generate and view the optimized schedule.</p>
            </div>
          ) : (
            <>
              <section id="model">
                <FeaturedCard stats={stats || summaryStats} />
              </section>
              
              <section id="schedule" className="mt-24 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                      Scheduled <span className="text-accent">Matches</span>
                    </h2>
                    <p className="text-gray-400">View the highly optimized tournament fixtures</p>
                    {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                  </div>
                </div>
                
                <FilterPanel 
                  filterTeam={filterTeam} setFilterTeam={setFilterTeam}
                  filterVenue={filterVenue} setFilterVenue={setFilterVenue}
                  filterDate={filterDate} setFilterDate={setFilterDate}
                  availableTeams={availableTeams} availableVenues={availableVenues}
                />
                
                {isLoading ? (
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                  </div>
                ) : filteredMatches.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedMatches.map((match, index) => (
                        <MatchCard key={index} match={match} index={index} />
                      ))}
                    </div>
                    <div className="mt-10 flex justify-center gap-4">
                      {visibleCount < filteredMatches.length && (
                        <button 
                          onClick={() => setVisibleCount(prev => prev + 6)}
                          className="px-8 py-3 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-all border border-white/10 hover:border-accent/30"
                        >
                          Load More Matches
                        </button>
                      )}
                      {visibleCount > 6 && (
                        <button 
                          onClick={() => {
                            setVisibleCount(6);
                            document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="px-8 py-3 rounded-full bg-red-500/10 text-red-400 font-semibold hover:bg-red-500/20 transition-all border border-red-500/20 hover:border-red-500/50"
                        >
                          Show Less
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-20 text-gray-500">
                    <p>No matches found with the current filters.</p>
                  </div>
                )}
              </section>
            </>
          )}
        </div>

        <section id="dataset" className="py-20 border-t border-white/5 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold text-white mb-6">
                  Match <span className="text-accent">Dataset</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  The application uses the official match scheduling dataset containing team details, home and away venues, and proposed dates. By analyzing historical constraints, we apply our Greedy Algorithm to minimize travel overhead and avoid venue clashes.
                </p>
                <a href="/dataset/ipl_schedule.csv" download className="inline-flex items-center justify-center px-6 py-3 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-all border border-white/10 hover:border-accent/30 cursor-pointer">
                  Download Sample CSV
                </a>
              </div>
              <div className="flex-1 w-full glass-panel p-6 rounded-2xl border border-white/10">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>
                    MATCH NO,HOME TEAM,AWAY TEAM,VENUE,START_TIME{'\n'}
                    1,CSK,RCB,Chennai,2024-03-22 20:00:00{'\n'}
                    2,PBKS,DC,Mohali,2024-03-23 15:30:00{'\n'}
                    3,KKR,SRH,Kolkata,2024-03-23 19:30:00
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/80 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              About <span className="text-accent">The Project</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              This Machine Learning and Algorithm project is built to demonstrate the efficiency of Greedy Algorithms in resolving complex scheduling constraints. Developed with React, Tailwind CSS, and a Flask Python backend.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-4 glass-card rounded-xl border border-white/10 flex flex-col items-center flex-1 min-w-[120px]">
                <span className="text-2xl font-bold text-white mb-1">React</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Frontend</span>
              </div>
              <div className="px-6 py-4 glass-card rounded-xl border border-white/10 flex flex-col items-center flex-1 min-w-[120px]">
                <span className="text-2xl font-bold text-white mb-1">Flask</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Backend</span>
              </div>
              <div className="px-6 py-4 glass-card rounded-xl border border-white/10 flex flex-col items-center flex-1 min-w-[120px]">
                <span className="text-2xl font-bold text-white mb-1">Greedy</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Algorithm</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-accent text-navy-900 shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all duration-300 z-50 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Home;
