import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: '/story_meeting_1767951851794.png', span: 'col-2 row-2' },
        { src: '/story_date_1767951873660.png', span: 'col-1 row-1' },
        { src: '/story_proposal_1767951897199.png', span: 'col-1 row-2' },
        { src: '/bride_portrait_1767951817922.png', span: 'col-1 row-1' },
        { src: '/groom_portrait_1767951834123.png', span: 'col-2 row-1' },
        { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', span: 'col-1 row-2' },
        { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', span: 'col-2 row-2' },
    ];

    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >Picture Perfect Moments</motion.h2>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className={`gallery-item ${img.span}`}
                            onClick={() => setSelectedImage(img.src)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="gallery-overlay">
                                <span className="view-text">View</span>
                            </div>
                            <img src={img.src} alt={`Gallery moment ${index + 1}`} loading="lazy" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        onClick={() => setSelectedImage(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button className="close-btn">&times;</button>
                        <motion.img
                            src={selectedImage}
                            alt="Enlarged view"
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Gallery;
