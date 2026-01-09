import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-names">
                    <span className="script-text hero-name">Krishna</span>
                    <span className="hero-ampersand">&</span>
                    <span className="script-text hero-name">Ishika</span>
                </h1>
                <p className="hero-subtitle">Join us in celebrating our special day</p>
                <div className="hero-scroll">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
