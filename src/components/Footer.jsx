import { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

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

    return (
        <footer className="footer">
            <div className="footer-image-overlay">
                <img src="/hero_couple_image_1767951802311.png" alt="Couple" className="footer-bg" />
                <div className="footer-overlay"></div>
            </div>

            <div className="footer-content">
                <h2 className="footer-names script-text">Ishika & Krishna</h2>
                <p className="footer-message">We can't wait to celebrate with you</p>

                <div className="countdown-container">
                    <p className="countdown-label">Missing Days to Wedding Timeline</p>
                    <div className="countdown-timer">
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.days}</span>
                            <span className="timer-label">Days</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.hours}</span>
                            <span className="timer-label">Hours</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.minutes}</span>
                            <span className="timer-label">Mins</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{timeLeft.seconds}</span>
                            <span className="timer-label">Secs</span>
                        </div>
                    </div>
                </div>

                <p className="copyright">© 2026 Ishika Weds Krishna. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
