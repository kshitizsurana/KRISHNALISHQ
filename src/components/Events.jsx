import './Events.css';

function Events() {
    const events = [
        {
            title: 'Under the Sea Carnival',
            date: 'February 09, 2026',
            time: '12:00 PM',
            location: 'Mayur Bagh',
            description: '“Dive into love & laughter”\nA splashy start with games, colours, and carnival vibes.',
            icon: '🎡'
        },
        {
            title: 'Sangeet O’Clock',
            date: 'February 09, 2026',
            time: '8:00 PM',
            location: 'Mewar Lawn I',
            description: '“Dance like no one’s watching”\nAn evening of music, moves, and Bollywood magic.',
            icon: '💃'
        },
        {
            title: 'Gud Chadi',
            date: 'February 10, 2026',
            time: '9:00 AM',
            location: 'Mewar Lawn II',
            description: '"The groom rides in, the saga begins"\nMehndi laga ke rakhna, doli sajakr rakhna, lene tujhe oo gori aayenge teri sajna!!!',
            icon: '🐎'
        },
        {
            title: 'Agnisakshi (Phere)',
            date: 'February 10, 2026',
            time: '12:00 PM',
            location: 'Amphitheater Lawn',
            description: '"Eternal Seven Vows”\nSacred fire, eternal promises, and hearts intertwined.',
            icon: '🔥'
        },
        {
            title: 'Shaan-e-Pagdi (Safa Bhandi)',
            date: 'February 10, 2026',
            time: '6:30 PM',
            location: 'Mewar Lawn II',
            description: '“Jijas in Action: Groom Edition”\nThe jijas tie the safa, fix the look, and get the groom ready… for a lifetime of endless love, chaos and drama!',
            icon: '👳'
        },
        {
            title: 'Beats & Baraat',
            date: 'February 10, 2026',
            time: '7:00 PM',
            location: 'Mewar Lawn II',
            description: '“Where bhabhi steals the show”\nDhol, dance, and the dulhe’s bhabhi saying, “Lo chali main mere devar ki baraat lekr!”',
            icon: '🥁'
        },
        {
            title: 'Wedding & Reception',
            date: 'February 10, 2026',
            time: '8:00 PM',
            location: 'Aravali Lawn',
            description: '“Mangalam Milanam”\nA majestic finale filled with love, laughter, and family blessings (Ishika & Krishna).',
            icon: '✨'
        }
    ];

    return (
        <section className="events section" id="events">
            <div className="container">
                <h2 className="section-title">Wedding Events</h2>
                <div className="events-grid">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <div className="event-icon">{event.icon}</div>
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-date">{event.date}</p>
                            <p className="event-time">{event.time}</p>
                            <p className="event-location">{event.location}</p>
                            <p className="event-address">{event.address}</p>
                            <p className="event-description">{event.description}</p>
                            <button className="event-button">View Location</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Events;
