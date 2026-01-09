import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <motion.h1
                    className="hero-names"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <motion.span
                        className="script-text hero-name"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    >Ishika</motion.span>
                    <motion.span
                        className="hero-ampersand"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                    >&</motion.span>
                    <motion.span
                        className="script-text hero-name"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                    >Krishna</motion.span>
                </motion.h1>
            </div>

            <motion.div
                className="hero-footer-text"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
            >
                <p className="married-text">We are getting married!</p>
                <p className="married-date">10 / 02 / 26</p>
            </motion.div>
        </section>
    );
}

export default Hero;
