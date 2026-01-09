import './Timeline.css';

function Timeline() {
    const timelineEvents = [
        { day: 'FEB 09', time: '12:00 PM', event: 'Haldi Carnival', description: 'Under the Sea at Mayur Bagh' },
        { day: 'FEB 09', time: '8:00 PM', event: 'Sangeet', description: 'Dance & Magic at Mewar Lawn I' },
        { day: 'FEB 10', time: '9:00 AM', event: 'Gud Chadi', description: 'Mewar Lawn II' },
        { day: 'FEB 10', time: '12:00 PM', event: 'Phere', description: 'Sacred Vows at Amphitheater' },
        { day: 'FEB 10', time: '6:30 PM', event: 'Safa Bhandi', description: 'Groom Preparation' },
        { day: 'FEB 10', time: '7:00 PM', event: 'Baarat', description: 'Grand Procession' },
        { day: 'FEB 10', time: '8:00 PM', event: 'Wedding & Reception', description: 'Mangalam Milanam at Aravali Lawn' }
    ];

    return (
        <section className="timeline-section section" id="timeline">
            <div className="timeline-bg">
                <div className="container">
                    <h2 className="section-title timeline-title">Wedding Celebration Timeline</h2>
                    <div className="timeline-content">
                        <div className="timeline-graphic">
                            <svg viewBox="0 0 200 200" className="timeline-circle">
                                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
                                <text x="100" y="105" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor">9-10</text>
                                <text x="100" y="125" textAnchor="middle" fontSize="14" fill="currentColor">FEB</text>
                            </svg>
                        </div>
                        <div className="timeline-list">
                            {timelineEvents.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-time">
                                        <span className="timeline-day">{item.day}</span>
                                        <span className="timeline-hour">{item.time}</span>
                                    </div>
                                    <div className="timeline-details">
                                        <h4 className="timeline-event">{item.event}</h4>
                                        <p className="timeline-desc">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
