import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
            image: 'https://images.unsplash.com/photo-1627850604058-52e40de1b847?q=80&w=1000&auto=format&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1000&auto=format&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1583934555026-17a111400030?q=80&w=1000&auto=format&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000&auto=format&fit=crop',
            mapLink: 'https://maps.app.goo.gl/mDgtNPm9NzrDULzv7?g_st=iw'
        }
    ];

    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            // Floating animation for cards after they appear
            gsap.utils.toArray(".event-card").forEach((card, i) => {
                gsap.to(card, {
                    y: "-15px",
                    duration: 2 + Math.random(),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.5
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="events section" id="events" ref={sectionRef}>
            <div className="container">
                <motion.div
                    className="section-header-styled"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <img src="/logo.png" alt="Logo" className="section-logo" />
                    <div className="divider-line"></div>
                    <h2 className="section-title-serif">Events Schedule</h2>
                    <div className="divider-line"></div>
                    <span className="section-hashtag accent-text">#KrishNalIshq</span>
                </motion.div>

                <div className="events-grid" ref={gridRef} style={{ perspective: "1500px" }}>
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
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
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        <span>{event.venue}</span>
                                    </div>
                                    <div className="meta-item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        <span>{event.time}</span>
                                    </div>
                                    {event.dressCode && (
                                        <div className="meta-item dress-code">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.62 1.96v11.16a2 2 0 0 0 1.62 1.96L8 21a4 4 0 0 0 8 0l4.38-1.46a2 2 0 0 0 1.62-1.96V5.42a2 2 0 0 0-1.62-1.96z"></path></svg>
                                            <span><strong>Dress Code:</strong> {event.dressCode}</span>
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
