import { useEffect, useRef } from 'react';

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

            // Entry Animations using Timeline
            const tl = gsap.timeline({ delay: 0.5 });

            tl.fromTo(".hero-name:nth-child(1)",
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
            )
                .fromTo(".hero-name:nth-child(3)",
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
                    "<+0.2"
                )
                .fromTo(".hero-ampersand",
                    { opacity: 0, scale: 0.5 },
                    { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
                    "<+0.3"
                )
                .fromTo(".hero-footer-text",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
                    "-=0.5"
                )
                .fromTo(".hero-scroll-hint",
                    { opacity: 0 },
                    { opacity: 1, duration: 1 },
                    "-=0.5"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero-bg" ref={bgRef}></div>
            <div className="hero-overlay"></div>

            <div className="hero-content" ref={contentRef}>
                <h1 className="hero-names">
                    <span className="script-text hero-name">Ishika</span>
                    <span className="hero-ampersand">&</span>
                    <span className="script-text hero-name">Krishna</span>
                </h1>

                <div className="hero-footer-text">
                    <p className="married-text script-text">We are getting married</p>
                    <p className="married-date">February 10, 2026</p>
                </div>
            </div>

            <div className="hero-scroll-hint">
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}

export default Hero;
