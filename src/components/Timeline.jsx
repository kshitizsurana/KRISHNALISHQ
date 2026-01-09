import './Timeline.css';

function Timeline() {
    const timelineEvents = [
        { id: '01', event: 'Haldi Carnival', time: '12:00 PM', desc: 'Feb 09' },
        { id: '02', event: 'Sangeet', time: '8:00 PM', desc: 'Feb 09' },
        { id: '03', event: 'Gud Chadi', time: '9:00 AM', desc: 'Feb 10' },
        { id: '04', event: 'Phere', time: '12:00 PM', desc: 'Feb 10' },
        { id: '05', event: 'Safa Bhandi', time: '6:30 PM', desc: 'Feb 10' },
        { id: '06', event: 'Baarat', time: '7:00 PM', desc: 'Feb 10' },
        { id: '07', event: 'Reception', time: '8:00 PM', desc: 'Feb 10' }
    ];

    return (
        <section className="timeline section" id="timeline">
            <div className="container">
                <div className="section-header-styled">
                    <span className="divider-line"></span>
                    <img src="/hashtag.png" alt="#KrishNaIshq" className="section-logo" />
                    <h2 className="section-title-serif">WEDDING DAY</h2>
                    <span className="divider-line"></span>
                </div>

                <div className="circular-timeline-container">
                    {/* Animated Background Circles */}
                    <div className="circle-ripple c1"></div>
                    <div className="circle-ripple c2"></div>
                    <div className="circle-ripple c3"></div>

                    {/* Central Image */}
                    <div className="center-stage">
                        <div className="center-image-wrapper">
                            <img
                                src="/bride_portrait_1767951817922.png"
                                alt="Couple Center"
                                className="center-img"
                            />
                        </div>
                    </div>

                    {/* Orbital Events */}
                    <div className="orbit-container">
                        {timelineEvents.map((item, index) => {
                            const total = timelineEvents.length;
                            // Start from -90deg (top) and distribute
                            const angle = (360 / total) * index - 90;
                            // Radius for the items
                            const radius = 300; // Adjusted for desktop

                            // Position calculation relies on CSS for cleaner DOM, 
                            // but we need inline styles for dynamic angles.
                            // We'll set the angle as a Custom Property variable.
                            const style = {
                                '--angle': `${angle}deg`,
                                '--radius': `${radius}px`
                            };

                            return (
                                <div
                                    key={index}
                                    className="orbit-item"
                                    style={style}
                                >
                                    <div className="orbit-number-box">
                                        <span>{item.id}</span>
                                    </div>
                                    <div className="orbit-content">
                                        <h3 className="orbit-title">{item.event}</h3>
                                        <p className="orbit-time">{item.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
