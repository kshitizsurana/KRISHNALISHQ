import './IntroGallery.css';

const IntroGallery = () => {
    return (
        <section className="intro-gallery section">
            <div className="container">
                <div className="gallery-stack">
                    {/* Left Card - Picnic */}
                    <div className="stack-card card-left">
                        <img src="/gallery_left.jpg" alt="Picnic Moment" />
                    </div>

                    {/* Center Card - Couple Portrait */}
                    <div className="stack-card card-center">
                        <img src="/gallery_center.png" alt="Couple Close-up" />
                    </div>

                    {/* Right Card - Proposal */}
                    <div className="stack-card card-right">
                        <img src="/gallery_right.png" alt="Proposal" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroGallery;
