
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header({ scrollProgress }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
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
                    <img src="/logo.png" alt="Logo" className="logo-img" />
                    <span className="header-hashtag accent-text">#KrishNalIshq</span>
                </div>

                <nav className="header-nav">
                    {navItems.map((item, i) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </nav>

                <div className="scroll-indicator desktop-only">
                    <span className="scroll-percent">{scrollProgress}%</span>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;


