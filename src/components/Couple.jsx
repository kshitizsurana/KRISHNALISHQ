import './Couple.css';

function Couple() {
    return (
        <section className="couple section" id="couple">
            <div className="container">
                <h2 className="section-title">The Couple</h2>
                <div className="couple-grid">
                    <div className="couple-card">
                        <div className="couple-image-wrapper">
                            <img src="/bride_portrait_1767951817922.png" alt="Ishika" className="couple-image" />
                        </div>
                        <h3 className="couple-name script-text">Ishika</h3>
                        <p className="couple-description">
                            A beautiful soul with a heart full of love and dreams. Her grace and kindness light up every room she enters, making the world a better place.
                        </p>
                    </div>

                    <div className="couple-card">
                        <div className="couple-image-wrapper">
                            <img src="/groom_portrait_1767951834123.png" alt="Krishna" className="couple-image" />
                        </div>
                        <h3 className="couple-name script-text">Krishna</h3>
                        <p className="couple-description">
                            A gentleman with a warm smile and a generous spirit. His strength and compassion inspire everyone around him to be their best selves.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
