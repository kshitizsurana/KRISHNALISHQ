import { useState } from 'react';
import './RSVP.css';

function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for confirming your presence! We look forward to seeing you.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="rsvp section" id="rsvp">
            <div className="container">
                <div className="rsvp-wrapper">
                    <h2 className="section-title">Confirmation at Marriage</h2>
                    <p className="rsvp-subtitle">Please confirm your presence by filling out the form below</p>

                    <form className="rsvp-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="YOUR NAME"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="YOUR EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="YOUR MESSAGE"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RSVP;
