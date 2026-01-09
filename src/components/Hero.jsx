import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-names">
                    <span className="script-text hero-name">Ishika</span>
                    <span className="hero-ampersand">&</span>
                    <span className="script-text hero-name">Krishna</span>
                </h1>
            </div>

            <div className="hero-footer-text">
                <p className="married-text">We are getting married!</p>
                <p className="married-date">10/02/26</p>
            </div>
        </section>
    );
}

export default Hero;
