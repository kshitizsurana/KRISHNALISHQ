import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="footer">
            <motion.div
                className="footer-image-overlay"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 3 }}
            >
                <img src="/hero_couple_image_1767951802311.png" alt="Couple" className="footer-bg" />
                <div className="footer-overlay"></div>
            </motion.div>

            <motion.div
                className="footer-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.h2 className="footer-names script-text" variants={itemVariants}>
                    Ishika & Krishna
                </motion.h2>
                <motion.p className="footer-message" variants={itemVariants}>
                    We can't wait to celebrate with you
                </motion.p>

                <motion.div className="countdown-container" variants={itemVariants}>
                    <motion.p
                        className="countdown-label"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Missing Days to Wedding Timeline
                    </motion.p>
                    <div className="countdown-timer">
                        <motion.div className="timer-item" whileHover={{ scale: 1.05 }}>
                            <span className="timer-value">{timeLeft.days}</span>
                            <span className="timer-label">Days</span>
                        </motion.div>
                        <motion.div className="timer-item" whileHover={{ scale: 1.05 }}>
                            <span className="timer-value">{timeLeft.hours}</span>
                            <span className="timer-label">Hours</span>
                        </motion.div>
                        <motion.div className="timer-item" whileHover={{ scale: 1.05 }}>
                            <span className="timer-value">{timeLeft.minutes}</span>
                            <span className="timer-label">Mins</span>
                        </motion.div>
                        <motion.div className="timer-item" whileHover={{ scale: 1.05 }}>
                            <span className="timer-value">{timeLeft.seconds}</span>
                            <span className="timer-label">Secs</span>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.p className="copyright" variants={itemVariants}>
                    © 2026 Ishika Weds Krishna. All Rights Reserved.
                </motion.p>
            </motion.div>
        </footer>
    );
}

export default Footer;
