import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
    const timelineEvents = [
        { id: '01', event: 'Under the Sea Carnival', time: '12:00 PM', desc: 'Feb 09' },
        { id: '02', event: 'Sangeet O’Clock', time: '8:00 PM', desc: 'Feb 09' },
        { id: '03', event: 'Gud Chadi', time: '9:00 AM', desc: 'Feb 10' },
        { id: '04', event: 'Agnisakshi: Our Forever Begins', time: '12:00 PM', desc: 'Feb 10' },
        { id: '05', event: 'Shaan-e-Pagdi', time: '6:30 PM', desc: 'Feb 10' },
        { id: '06', event: 'Beats & Baraat', time: '7:00 PM', desc: 'Feb 10' },
        { id: '07', event: 'Mangalam Milanam: A Grand Celebration of Ishika & Krishna', time: '8:00 PM', desc: 'Feb 10' }
    ];

    const containerRef = useRef(null);
    const orbitRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header reveal
            gsap.fromTo(".section-header-styled",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Center image entrance
            gsap.fromTo(".center-stage",
                { scale: 0, rotate: -180, opacity: 0 },
                {
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    }
                }
            );

            // Orbit items "explosion" reveal
            gsap.fromTo(".orbit-item",
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: orbitRef.current,
                        start: "top 70%",
                    }
                }
            );

            // Constant gentle floating
            gsap.to(".orbit-item", {
                y: "+=15",
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    amount: 2,
                    from: "random"
                }
            });
        }, containerRef);

        setTimeout(() => ScrollTrigger.refresh(), 600);

        return () => ctx.revert();
    }, []);

    return (
        <section className="timeline section" id="timeline" ref={containerRef}>
            <div className="full-width-timeline-wrapper">
                <div className="section-header-styled">
                    <h2 className="section-title-serif">Wedding Day</h2>
                    <span className="section-hashtag accent-text">#KrishNalIshq</span>
                </div>

                <div className="circular-timeline-container" ref={orbitRef}>
                    <div className="circle-ripple c1"></div>
                    <div className="circle-ripple c2"></div>
                    <div className="circle-ripple c3"></div>
                    <div className="circle-ripple c4"></div>
                    <div className="circle-ripple c5"></div>
                    <div className="circle-ripple c6"></div>

                    <div className="center-stage">
                        <div className="center-image-wrapper">
                            <img src="/bride_portrait_1767951817922.png" alt="Couple" className="center-img" />
                        </div>
                    </div>

                    <div className="orbit-container">
                        {timelineEvents.map((item, index) => {
                            const angle = (index / timelineEvents.length) * 360;
                            const radius = 280; // Optimized to keep all text safely inside screen bounds
                            return (
                                <div
                                    key={item.id}
                                    className="orbit-item"
                                    style={{
                                        '--angle': `${angle}deg`,
                                        '--radius': `${radius}px`
                                    }}
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
