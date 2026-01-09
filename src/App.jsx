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

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  return (
    <div className="app">
      <Header scrollProgress={scrollProgress} />
      <Hero />
      <Couple />
      <OurStory />
      <Events />
      <Timeline />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
