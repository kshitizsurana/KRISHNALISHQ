import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Couple from './components/Couple';
import OurStory from './components/OurStory';
import Events from './components/Events';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

import LoadingScreen from './components/LoadingScreen';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(Math.round(scrollPercent), 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="app">
      <Header scrollProgress={scrollProgress} />
      <Hero />
      <div id="couple"><Couple /></div>
      <div id="story"><OurStory /></div>
      <div id="events"><Events /></div>
      <Timeline />
      <div id="gallery"><Gallery /></div>
      <div id="rsvp"><RSVP /></div>
      <Footer />
    </div>
  );
}

export default App;
