import { useState } from 'react';
import './Gallery.css';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: '/story_meeting_1767951851794.png', span: 'col-2 row-2' },
        { src: '/story_date_1767951873660.png', span: 'col-1 row-1' },
        { src: '/story_proposal_1767951897199.png', span: 'col-1 row-2' },
        { src: '/bride_portrait_1767951817922.png', span: 'col-1 row-1' },
        { src: '/groom_portrait_1767951834123.png', span: 'col-2 row-1' },
        { src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=800', span: 'col-1 row-1' },
        { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', span: 'col-1 row-2' },
        { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', span: 'col-2 row-2' },
    ];

    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <h2 className="section-title">Picture Perfect Moments</h2>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`gallery-item ${img.span}`}
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <div className="gallery-overlay">
                                <span className="view-text">View</span>
                            </div>
                            <img src={img.src} alt={`Gallery moment ${index + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="close-btn">&times;</button>
                    <img src={selectedImage} alt="Enlarged view" />
                </div>
            )}
        </section>
    );
}

export default Gallery;
