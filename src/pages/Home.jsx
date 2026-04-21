import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroEditorial from '../components/HeroEditorial';
import LiveTicker from '../components/LiveTicker';
import SystemFeedback from '../components/SystemFeedback';
import TimelineView from '../components/TimelineView';
import DatasetPreview from '../components/DatasetPreview';
import InsightsSection from '../components/InsightsSection';
import AlgorithmFlow from '../components/AlgorithmFlow';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import { ArrowUp, Play } from 'lucide-react';

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [stats, setStats] = useState(null);
  const [hasRun, setHasRun] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (selectedMatch) {
        setShowScrollTop(false);
        return;
      }
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;
        setShowScrollTop(isNearBottom);
      } else {
        setShowScrollTop(window.scrollY > 500);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [selectedMatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fetchOptimization = async (file = null) => {
    setIsLoading(true);
    setError(null);
    try {
      const url = 'https://pitchplannerbe-model.onrender.com/api/optimize';
      let options = { method: 'GET' };

      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        options = { method: 'POST', body: formData };
      }

      const fetchPromise = fetch(url, options);
      const minWaitPromise = new Promise(resolve => setTimeout(resolve, 3000));
      
      const [response] = await Promise.all([fetchPromise, minWaitPromise]);
      
      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      }

      if (!response.ok) {
        const errorMsg = result?.error || result?.message || `Error ${response.status}: ${response.statusText}`;
        throw new Error(errorMsg);
      }
      
      if (result && result.success && result.data) {
        setMatches(result.data.optimal_schedule || []);
        setStats({
          totalMatches: result.data.original_count,
          optimalMatches: result.data.selected_count,
          efficiency: result.data.selected_count > 0 ? Math.round((result.data.selected_count / result.data.original_count) * 100) : 0,
          totalTeams: 10,
          totalVenues: 5
        });
        setHasRun(true);
        setTimeout(() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' }), 500);
      } else {
        throw new Error(result.message || 'Optimization failed');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to fetch optimized schedule.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateMatch = (originalMatch, updatedFields) => {
    setMatches(prev => prev.map(m => {
      // Use a robust check to ensure we only update the specific match
      // We check Match_ID if it exists, otherwise we use the unique combination of teams and date
      const isSameMatch = originalMatch.Match_ID 
        ? m.Match_ID === originalMatch.Match_ID
        : (m.Team_A === originalMatch.Team_A && m.Team_B === originalMatch.Team_B && m.DATE === originalMatch.DATE);
      
      return isSameMatch ? { ...m, ...updatedFields } : m;
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar hasRun={hasRun} onLaunch={() => fetchOptimization()} />
      <SystemFeedback isLoading={isLoading} />
      
      <main className="relative z-10 w-full overflow-hidden">
        <HeroEditorial 
          onRunDefault={() => fetchOptimization()} 
          onFileUpload={(file) => fetchOptimization(file)} 
          isLoading={isLoading} 
          hasRun={hasRun}
        />
        
        <LiveTicker />

        {hasRun && <InsightsSection stats={stats} />}

        {/* Global Error Notification */}
        <AnimatePresence>
          {error && !isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-[800px] mx-auto px-6 mt-12 relative z-50"
            >
              <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-xl flex flex-col items-center text-center gap-6 shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                   <Play className="w-6 h-6 rotate-90" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-red-500 uppercase tracking-tighter mb-2">Protocol Interrupted</h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed max-w-md">{error}</p>
                </div>
                <button 
                  onClick={() => setError(null)} 
                  className="px-8 py-3 bg-red-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-red-600 transition-colors"
                >
                  Clear Diagnostics
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Championship Results Section */}
        <div id="schedule" className="relative z-20">
          {hasRun && (
            <TimelineView 
              schedule={matches} 
              onOptimize={() => fetchOptimization()}
              onUpdateMatch={handleUpdateMatch}
              onAdjust={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              selectedMatch={selectedMatch}
              onDetail={setSelectedMatch}
            />
          )}
        </div>

        <HowItWorks />
        
        <DatasetPreview />
        
        <AlgorithmFlow />

      </main>
      
      <Footer />

      <AnimatePresence>
        {selectedMatch && (
          <TimelineView.MatchControlPanel 
            match={selectedMatch} 
            onClose={() => setSelectedMatch(null)} 
            onOptimize={() => fetchOptimization()} 
            onUpdateMatch={handleUpdateMatch}
            schedule={matches}
            venues={Array.from(new Set(matches.map(m => m.Venue || m.VENUE || m.venue).filter(Boolean)))}
          />
        )}
      </AnimatePresence>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-12 right-12 p-4 rounded-full bg-yellow-500 text-black shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500 z-50 hover:scale-110 hover:-translate-y-2 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Home;
