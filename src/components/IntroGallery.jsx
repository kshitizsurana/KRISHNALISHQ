import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './IntroGallery.css';

gsap.registerPlugin(ScrollTrigger);

const IntroGallery = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Reveal
            gsap.from(".card-left", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
                xPercent: -30,
                rotate: -20,
                opacity: 0,
                ease: "none"
            });

            gsap.from(".card-right", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
                xPercent: 30,
                rotate: 20,
                opacity: 0,
                ease: "none"
            });

            // Center card zoom
            gsap.from(".card-center", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: 2,
                },
                scale: 0.8,
                opacity: 0,
            });

            // Floating movement
            gsap.to(".stack-card", {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotate: "random(-5, 5)",
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="intro-gallery section" ref={sectionRef}>
            <div className="container">
                <div className="gallery-stack">
                    <div className="stack-card card-left">
                        <img src="/gallery_left.jpg" alt="Picnic Moment" />
                    </div>
                    <div className="stack-card card-center">
                        <img src="/gallery_center.png" alt="Couple Close-up" />
                    </div>
                    <div className="stack-card card-right">
                        <img src="/gallery_right.png" alt="Proposal" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroGallery;
