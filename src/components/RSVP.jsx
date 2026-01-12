import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RSVP.css';

import emailjs from '@emailjs/browser';

function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        guests: '1',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_fyk3h1r';
        const TEMPLATE_ID = 'template_tgah0fn';
        const PUBLIC_KEY = 'DIQsIQ1MLrDerUspQ';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            guests: formData.guests,
            message: formData.message,
            to_name: 'Ishika & Krishna'
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', guests: '1', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log('FAILED...', error);
                setStatus('error');
            });
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
                            disabled={status === 'sending' || status === 'success'}
                        >
                            {status === 'sending' ? 'SENDING...' : status === 'success' ? 'SENT WITH LOVE' : 'CONFIRM PRESENCE'}
                        </button>

                        {status === 'success' && (
                            <div className="status-message success">
                                Thank you! We can't wait to see you there.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="status-message error">
                                Oops! Something went wrong. Please try again or email us directly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RSVP;
