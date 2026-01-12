import React, { useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [fading, setFading] = useState(false);

    const handleEnter = () => {
        if (fading) return;
        setFading(true);
        setTimeout(() => {
            onComplete();
        }, 1200);
    };

    return (
        <div className={`loading-screen ${fading ? 'fade-out' : ''}`}>

            <h1 className="welcome-top-text">Welcome to our Wedding</h1>

            <div className="welcome-image-container">
                <img
                    src="/welcome_collage_final.jpg"
                    alt="Ishika & Krishna Collage"
                    className="final-collage-img"
                />
            </div>

            <div className="welcome-bottom-container">
                <button className="open-invitation-btn" onClick={handleEnter}>
                    TAP TO OPEN
                </button>
            </div>

        </div>
    );
};

export default LoadingScreen;
