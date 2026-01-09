
import { useState, useEffect } from 'react';
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} `}>
            <div className="header-container">
                <div className="header-logo">
                    <span className="logo-text">KI</span>
                </div>

                <button
                    className={`mobile - menu - btn ${isMenuOpen ? 'open' : ''} `}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header - nav ${isMenuOpen ? 'mobile-open' : ''} `}>
                    <button onClick={() => scrollToSection('couple')}>The Couple</button>
                    <button onClick={() => scrollToSection('story')}>Our Story</button>
                    <button onClick={() => scrollToSection('events')}>Events</button>
                    <button onClick={() => scrollToSection('gallery')}>Gallery</button>
                    <button onClick={() => scrollToSection('rsvp')}>RSVP</button>
                </nav>

                <div className="scroll-indicator desktop-only">
                    <span className="scroll-percent">{scrollProgress}%</span>
                </div>
            </div>
        </header>
    );
}

export default Header;

