import { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    const images = [
        { src: '/new_laughing.jpg', layout: 'item-1' }, // High energy / Happy start (Big Left)
        { src: '/gallery_bw_couch.jpg', layout: 'item-2' }, // B&W contrast (Small Top)
        { src: '/gallery_smiling_close.jpg', layout: 'item-3' }, // Intimate close-up (Small Top)
        { src: '/gallery_tennis_lying.jpg', layout: 'item-4' }, // Playful wide shot (Wide Mid)
        { src: '/new_rings.jpg', layout: 'item-5' }, // Details (Lower Left Square)
        { src: '/gallery_sitting_lap.jpg', layout: 'item-6' }, // Connection (Lower Center Square)
        { src: '/new_romantic.jpg', layout: 'item-7' }, // Classic Romance (Bottom Left)
        { src: '/gallery_couch_looking.jpg', layout: 'item-8' }, // Cinematic Sunset (Tall Right)
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(".section-title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".section-title",
                        start: "top 85%"
                    }
                }
            );

            gsap.fromTo(".gallery-item",
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.98
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="gallery section" id="gallery" ref={sectionRef}>
            <h2 className="section-title">Picture Perfect Moments</h2>

            <div className="gallery-grid-exact" ref={gridRef}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`gallery-item ${img.layout}`}
                        onClick={() => setSelectedImage(img.src)}
                    >
                        <div className="gallery-overlay">
                            <span className="view-text">Enlarge</span>
                        </div>
                        <img src={img.src} alt={`Gallery moment ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="lightbox"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="close-btn">&times;</button>
                    <img
                        src={selectedImage}
                        alt="Enlarged moment"
                    />
                </div>
            )}
        </section>
    );
}

export default Gallery;
