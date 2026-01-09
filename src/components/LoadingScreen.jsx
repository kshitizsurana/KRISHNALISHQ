import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        // Show loading screen for 3.5 seconds
        const timer = setTimeout(() => {
            setFading(true);
            // Wait for fade out animation to finish before unmounting
            setTimeout(onComplete, 800);
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${fading ? 'fade-out' : ''}`}>
            <div className="hearts-container">
                <div className="heart">♡</div>
                <div className="heart">♡</div>
                <div className="heart">♡</div>
                <div className="heart">♡</div>
            </div>
            <h1 className="loading-text">Welcome to Our Wedding</h1>
        </div>
    );
};

export default LoadingScreen;
