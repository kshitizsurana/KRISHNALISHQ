import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Events.css';

gsap.registerPlugin(ScrollTrigger);

function Events() {
    const events = [
        {
            title: 'Under the Sea Carnival',
            date: '09.02.2026',
            time: '12:00 PM',
            venue: 'Mayur Bagh, Taj Aravali Udaipur',
            tagline: '“Dive into love & laughter”',
            description: 'A splashy start with games, colours, and carnival vibes.',
            dressCode: 'Pastel hues, men and women both in western attire',
            image: '/event_under_the_sea.jpg',
            mapLink: 'https://maps.app.goo.gl/mDgtNPm9NzrDULzv7?g_st=iw'
        },
        {
            title: 'Sangeet O’Clock',
            date: '09.02.2026',
            time: '8:00 PM',
            venue: 'Mewar Lawn I, Taj Aravali Udaipur',
            tagline: '“Dance like no one’s watching”',
            description: 'An evening of music, moves, and Bollywood magic.',
            dressCode: 'Glitz and glam, men in black tuxedo and women in white/beige/silver shimmer attire',
            image: '/event_sangeet.jpg',
            mapLink: 'https://maps.app.goo.gl/mDgtNPm9NzrDULzv7?g_st=iw'
        },
        {
            title: 'Agnisakshi: Our Forever Begins',
            date: '10.02.2026',
            time: '12:00 PM',
            venue: 'Amphitheater Lawn, Taj Aravali, Udaipur',
            tagline: '“Eternal Seven Vows”',
            description: 'Sacred fire, eternal promises, and hearts intertwined.',
            dressCode: 'Traditional, men in kurta pajama with jacket and women in silk saree or lehnga for our pure mandir',
            image: '/event_wedding.jpg',
            mapLink: 'https://maps.app.goo.gl/mDgtNPm9NzrDULzv7?g_st=iw'
        },
        {
            title: 'Mangalam Milanam',
            date: '10.02.2026',
            time: '8:00 PM',
            venue: 'Aravali Lawn, Taj Aravali, Udaipur',
            tagline: '“Two families, one grand celebration”',
            description: 'A majestic finale filled with love, laughter, and family blessings.',
            dressCode: 'Indian traditional, men in jodhpuri, achkan, bandgala and suit and women in lehnga and saree.',
            image: '/event_reception.jpg',
            mapLink: 'https://maps.app.goo.gl/mDgtNPm9NzrDULzv7?g_st=iw'
        }
    ];

    const sectionRef = useRef(null);
    const gridRef = useRef(null);
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation based on cursor position relative to center
        // Toning down the rotation for a more subtle, premium feel
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
        });
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto"
        });
    };

    const handleMouseEnter = (index) => {
        // Optional: Prepare card for interaction
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(".section-header-styled",
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".section-header-styled",
                        start: "top 80%"
                    }
                }
            );

            // Staggered reveal for cards with scale and rotation
            gsap.fromTo(".event-card",
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    rotateX: -10
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Floating animation REMOVED in favor of interactive tilt
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="events section" id="events" ref={sectionRef}>
            <div className="container">
                <div className="section-header-styled">
                    <img src="/logo.png" alt="Logo" className="section-logo" />
                    <div className="divider-line"></div>
                    <h2 className="section-title-serif">Events Schedule</h2>
                    <div className="divider-line"></div>
                    <span className="section-hashtag accent-text">#KrishNalIshq</span>
                </div>

                <div className="events-grid" ref={gridRef} style={{ perspective: "2000px" }}>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="event-card"
                            ref={el => cardRefs.current[index] = el}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                        >
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                                <div className="event-date-overlay">
                                    <span>{event.date}</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <h3 className="event-title">{event.title}</h3>
                                {event.tagline && <p className="event-tagline">{event.tagline}</p>}
                                <div className="event-meta">
                                    <div className="meta-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        <span>{event.venue}</span>
                                    </div>
                                    <div className="meta-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        <span>{event.time}</span>
                                    </div>
                                    {event.dressCode && (
                                        <div className="meta-item">
                                            <span><strong>DRESS CODE :</strong> {event.dressCode}</span>
                                        </div>
                                    )}
                                </div>
                                <p className="event-description">{event.description}</p>
                                <a href={event.mapLink} className="view-location-btn">
                                    VIEW ON MAP
                                    <span className="btn-icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Events;
