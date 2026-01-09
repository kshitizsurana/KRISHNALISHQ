
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header({ scrollProgress }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsMenuOpen(false); // Close menu on scroll
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'couple', label: 'The Couple' },
        { id: 'story', label: 'Our Story' },
        { id: 'events', label: 'Events' },
        { id: 'gallery', label: 'Photos' },
        { id: 'rsvp', label: 'RSVP' }
    ];

    return (
        <motion.header
            className={`header ${isScrolled ? 'scrolled' : ''} `}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="header-container">
                <div className="header-logo">
                    <img src="/logo.png" alt="Ishika & Krishna" className="logo-img" />
                    <img src="/hashtag.png" alt="#KrishNaIshq" className="header-hashtag" />
                </div>

                <div className="header-right">
                    <div className="scroll-indicator desktop-only">
                        <span className="scroll-percent">{scrollProgress}%</span>
                    </div>

                    <nav className={`header-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>

                    <button
                        className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;


