import { useState } from 'react';
import { motion } from 'framer-motion';
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

    return (
        <section className="rsvp section" id="rsvp">
            <div className="container">
                <motion.div
                    className="rsvp-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="rsvp-header">
                        <span className="rsvp-ornament">✧</span>
                        <h2 className="rsvp-main-title">CONFIRMATION AT WEDDING</h2>
                        <p className="rsvp-subtitle">
                            It would be our greatest honor to have you with us as we begin our new journey. Please kindly confirm your presence below.
                        </p>
                    </div>

                    <form className="rsvp-form" onSubmit={handleSubmit}>
                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </motion.div>

                        <motion.div
                            className="form-group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <label htmlFor="message">Message for the Couple</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="submit-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            SUBMIT
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

export default RSVP;
