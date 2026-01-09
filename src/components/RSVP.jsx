import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RSVP.css';

function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        guests: '1',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your RSVP!');
        setFormData({ name: '', email: '', guests: '1', message: '' });
    };

    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.fromTo(".rsvp-card",
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".rsvp-card",
                        start: "top 85%"
                    }
                }
            );

            gsap.fromTo([".form-group", ".submit-btn"],
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: ".rsvp-form",
                        start: "top 85%"
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="rsvp section" id="rsvp" ref={sectionRef}>
            <div className="container">
                <div className="rsvp-card">
                    <div className="rsvp-header">
                        <span className="rsvp-ornament">✧</span>
                        <h2 className="rsvp-main-title">Confirmation At Wedding</h2>
                        <p className="rsvp-subtitle">
                            It would be our greatest honor to have you with us as we begin our new journey. Please kindly confirm your presence below.
                        </p>
                    </div>

                    <form className="rsvp-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message for the Couple</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RSVP;
