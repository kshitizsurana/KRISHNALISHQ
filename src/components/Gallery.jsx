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
        { src: '/story_meeting_1767951851794.png', layout: 'item-1' }, // Big Portrait (Left)
        { src: '/bride_portrait_1767951817922.png', layout: 'item-2' }, // Small (Top center-right)
        { src: '/groom_portrait_1767951834123.png', layout: 'item-3' }, // Small (Top right)
        { src: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800', layout: 'item-4' }, // Mehndi Hands (Center right)
        { src: '/story_date_1767951873660.png', layout: 'item-5' }, // Small (Lower left)
        { src: '/story_proposal_1767951897199.png', layout: 'item-6' }, // Small (Lower center-left)
        { src: 'https://images.unsplash.com/photo-1627850604058-52e40de1b847?w=800', layout: 'item-7' }, // Sunset Portrait (Bottom left)
        { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', layout: 'item-8' }, // Dog Close-up (Tall Right)
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
