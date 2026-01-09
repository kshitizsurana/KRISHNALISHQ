
import './Events.css';

function Events() {
    const events = [
        {
            title: 'HALDI CARNIVAL',
            date: 'February 09, 2026 (12:00 PM)',
            location: 'Mayur Bagh',
            description: '“Dive into love & laughter” — A splashy start with games, colours, and carnival vibes.',
            image: 'https://images.unsplash.com/photo-1627850604058-52e40de1b847?q=80&w=1000&auto=format&fit=crop', // Yellow/Haldi vibe
            mapLink: '#'
        },
        {
            title: 'SANGEET O’CLOCK',
            date: 'February 09, 2026 (8:00 PM)',
            location: 'Mewar Lawn I',
            description: '“Dance like no one’s watching” — An evening of music, moves, and Bollywood magic.',
            image: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1000&auto=format&fit=crop', // Vibrant/Party vibe
            mapLink: '#'
        },
        {
            title: 'GUD CHADI',
            date: 'February 10, 2026 (9:00 AM)',
            location: 'Mewar Lawn II',
            description: '“The groom rides in” — Mehndi laga ke rakhna, doli sajakr rakhna!',
            image: 'https://images.unsplash.com/photo-1588656828591-64d84f937d57?q=80&w=1000&auto=format&fit=crop', // Horse/Groom
            mapLink: '#'
        },
        {
            title: 'AGNISAKSHI (PHERE)',
            date: 'February 10, 2026 (12:00 PM)',
            location: 'Amphitheater Lawn',
            description: '“Eternal Seven Vows” — Sacred fire, eternal promises, and hearts intertwined.',
            image: 'https://images.unsplash.com/photo-1583934555026-17a111400030?q=80&w=1000&auto=format&fit=crop', // Fire/Wedding
            mapLink: '#'
        },
        {
            title: 'SHAAN-E-PAGDI',
            date: 'February 10, 2026 (6:30 PM)',
            location: 'Mewar Lawn II',
            description: '“Jijas in Action” — The jijas tie the safa and get the groom ready.',
            image: 'https://images.unsplash.com/photo-1623945238260-1557022d480e?q=80&w=1000&auto=format&fit=crop', // Turban/Prep
            mapLink: '#'
        },
        {
            title: 'BEATS & BARAAT',
            date: 'February 10, 2026 (7:00 PM)',
            location: 'Mewar Lawn II',
            description: '“Bhabhi steals the show” — Dhol, dance, and the grand procession.',
            image: 'https://images.unsplash.com/photo-1605218427306-635ba2439715?q=80&w=1000&auto=format&fit=crop', // Baraat/Dance
            mapLink: '#'
        },
        {
            title: 'WEDDING & RECEPTION',
            date: 'February 10, 2026 (8:00 PM)',
            location: 'Aravali Lawn',
            description: '“Mangalam Milanam” — A majestic finale filled with love and family blessings.',
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000&auto=format&fit=crop', // Night/Decor
            mapLink: '#'
        }
    ];

    return (
        <section className="events section" id="events">
            <div className="container">
                <div className="section-header-styled">
                    <span className="divider-line"></span>
                    <img src="/hashtag.png" alt="#KrishNaIshq" className="section-logo" />
                    <h2 className="section-title-serif">WEDDING EVENTS</h2>
                    <span className="divider-line"></span>
                </div>

                <div className="events-grid">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <div className="event-image">
                                <img src={event.image} alt={event.title} loading="lazy" />
                            </div>
                            <div className="event-content">
                                <h3 className="event-title">{event.title}</h3>

                                <div className="event-meta">
                                    <div className="meta-item">
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="meta-item">
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8 8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        </svg>
                                        <span>{event.date}</span>
                                    </div>
                                </div>

                                <p className="event-description">{event.description}</p>

                                <a href={event.mapLink} className="view-location-btn">
                                    VIEW LOCATION
                                    <span className="btn-icon">
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
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
