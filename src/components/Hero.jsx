import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Smooth content fade out on scroll
            gsap.to(contentRef.current, {
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom 30%",
                    scrub: true
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero-bg" ref={bgRef}></div>
            <div className="hero-overlay"></div>

            <div className="hero-content" ref={contentRef}>
                <motion.h1
                    className="hero-names"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        className="script-text hero-name"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                    >Ishika</motion.span>
                    <motion.span
                        className="hero-ampersand"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 1, ease: "back.out(1.7)" }}
                    >&</motion.span>
                    <motion.span
                        className="script-text hero-name"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    >Krishna</motion.span>
                </motion.h1>

                <motion.div
                    className="hero-footer-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
                >
                    <p className="married-text script-text">We are getting married</p>
                    <p className="married-date">February 10, 2026</p>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </motion.div>
        </section>
    );
}

export default Hero;
