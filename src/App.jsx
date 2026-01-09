import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
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
import IntroGallery from './components/IntroGallery';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Lenis is updated via gsap.ticker below for better synchronization

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Track scroll progress
    lenis.on('scroll', ({ scroll, limit }) => {
      const progress = Math.min(Math.round((scroll / limit) * 100), 100);
      setScrollProgress(progress);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove();
    };
  }, []);

  useEffect(() => {
    if (!loading && lenisRef.current) {
      // Add entrance animations for sections
      gsap.utils.toArray('.section').forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="app">
      <Header scrollProgress={scrollProgress} />
      <Hero />
      <IntroGallery />
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
