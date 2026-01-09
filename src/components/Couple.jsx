import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Couple.css';

gsap.registerPlugin(ScrollTrigger);

function Couple() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section title
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

            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                // Staggered reveal for cards
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 80,
                        rotateX: -15
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        },
                        delay: i * 0.3
                    }
                );

                // Image reveal/parallax
                const image = card.querySelector('.couple-image');
                if (image) {
                    gsap.fromTo(image,
                        { scale: 1.2 },
                        {
                            scale: 1,
                            duration: 2,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 90%",
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="couple section" id="couple" ref={sectionRef}>
            <div className="container" style={{ perspective: "1000px" }}>
                <h2 className="section-title">The Couple</h2>

                <div className="couple-grid">
                    <div
                        className="couple-card"
                        ref={el => cardsRef.current[0] = el}
                    >
                        <div className="couple-image-wrapper">
                            <img src="/bride_portrait_1767951817922.png" alt="Ishika Rajoria" className="couple-image" />
                        </div>
                        <h3 className="couple-name script-text">Ishika Rajoria</h3>
                        <p className="couple-description">
                            By profession a lawyer, by heart a chef.
                            She finds joy in good food, cozy cafés, and little adventures, always better with him by her side. She’s a people’s person, but her heart melts for him. With him, life feels warmer and effortlessly happy. She’s forever cheering for him, smiling softly at his little wins.
                        </p>
                    </div>

                    <div
                        className="couple-card"
                        ref={el => cardsRef.current[1] = el}
                    >
                        <div className="couple-image-wrapper">
                            <img src="/groom_portrait_1767951834123.png" alt="Krishna Akar" className="couple-image" />
                        </div>
                        <h3 className="couple-name script-text">Krishna Akar</h3>
                        <p className="couple-description">
                            A businessman driven by passion and integrity.
                            He steps into each day with quiet ambition and clear vision. His eyes hold dreams, but shine brightest when they find hers. He finds joy in playful teasing and little spats, yet his heart bends to her wishes, always being there for her effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
