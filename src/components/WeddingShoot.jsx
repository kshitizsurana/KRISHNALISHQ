import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WeddingShoot.css';

gsap.registerPlugin(ScrollTrigger);

const WeddingShoot = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".shoot-title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".shoot-title",
                        start: "top 85%",
                    }
                }
            );

            gsap.fromTo(".video-container",
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".video-container",
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="wedding-shoot section" id="wedding-shoot" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title shoot-title">The Pre Wedding Shoot</h2>
                <div className="video-container">
                    <iframe
                        src="https://drive.google.com/file/d/1dC21vLBnttadMCFWFG1IDpJV9VqupNN8/preview"
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        allowFullScreen
                        title="The Wedding Shoot"
                        className="shoot-video"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default WeddingShoot;
