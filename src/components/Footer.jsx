import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const footerRef = useRef(null);

    useEffect(() => {
        const weddingDate = new Date('2026-02-10T11:00:00');

        const timer = setInterval(() => {
            const now = new Date();
            const difference = weddingDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Footer image scale animation
            gsap.fromTo(".footer-image-overlay",
                { scale: 1.1 },
                {
                    scale: 1,
                    duration: 3,
                    scrollTrigger: {
                        trigger: ".footer",
                        start: "top bottom"
                    }
                }
            );

            // Stagger content animation
            gsap.fromTo([".footer-names", ".countdown-section-aesthetic", ".footer-message", ".copyright"],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".footer-content",
                        start: "top 85%"
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer className="footer" ref={footerRef}>
            <div className="footer-image-overlay">
                <img src="/gallery_walking_garden.jpg" alt="Couple" className="footer-bg" />
                <div className="footer-overlay"></div>
            </div>

            <div className="footer-content">
                <h2 className="footer-names script-text">
                    Ishika & Krishna
                </h2>

                <div className="countdown-section-aesthetic">
                    <p className="countdown-top-label">MISSING DAYS TO</p>
                    <h2 className="footer-wedding-title script-text">
                        Our Wedding
                    </h2>

                    <div className="countdown-timer-aesthetic">
                        <div className="timer-circle-item">
                            <span className="timer-value">{timeLeft.days}</span>
                            <span className="timer-label">DAYS</span>
                        </div>
                        <div className="timer-circle-item">
                            <span className="timer-value">{timeLeft.hours}</span>
                            <span className="timer-label">HOURS</span>
                        </div>
                        <div className="timer-circle-item">
                            <span className="timer-value">{timeLeft.minutes}</span>
                            <span className="timer-label">MINUTES</span>
                        </div>
                        <div className="timer-circle-item">
                            <span className="timer-value">{timeLeft.seconds}</span>
                            <span className="timer-label">SECONDS</span>
                        </div>
                    </div>
                </div>

                <p className="footer-message">
                    We can't wait to celebrate with you
                </p>

                <p className="copyright">
                    {/* © 2026 Ishika Weds Krishna. All Rights Reserved. */}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
