import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Header.css';

function Header({ scrollProgress }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        // GSAP Animations
        gsap.fromTo(".header",
            { y: -100 },
            { y: 0, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo(".header-nav button",
            { opacity: 0, y: -10 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                delay: 0.3,
                duration: 0.5,
                ease: "power2.out"
            }
        );

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
        <header className={`header ${isScrolled ? 'scrolled' : ''} `}>
            <div className="header-container">
                <div className="header-logo">
                    <img src="/logo.png" alt="Logo" className="logo-img" />
                    <span className="header-hashtag accent-text">#KrishNalIshq</span>
                </div>

                <nav className="header-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="scroll-indicator desktop-only">
                    <span className="scroll-percent">{scrollProgress}%</span>
                </div>
            </div>
        </header>
    );
}

export default Header;


