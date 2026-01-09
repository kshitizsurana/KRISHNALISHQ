import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
    const storyRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heart Path Animation
            gsap.fromTo(pathRef.current,
                { strokeDashoffset: 300 },
                {
                    strokeDashoffset: 0,
                    scrollTrigger: {
                        trigger: storyRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                }
            );

            // Staggered Item Reveals
            gsap.utils.toArray(".story-item").forEach((item, i) => {
                gsap.fromTo(item,
                    {
                        x: i % 2 === 0 ? -80 : 80,
                        opacity: 0,
                        scale: 0.95
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        }, storyRef);

        // Refresh triggers once all components are likely rendered
        setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => ctx.revert();
    }, []);

    const stories = [
        {
            title: 'First Meeting',
            date: '16 July 2025, The Lalit, Jaipur',
            description: 'Their parents played cupid. She walked in a little nervous, he was calm. They spoke softly, laughed a little, and found comfort in the quiet pauses. Somehow, it felt right, he felt steady and familiar, she felt at home. (Soft note: one day before meeting him, she had spotted someone like him at her favourite café and got slightly ticked off, so she decided to meet him tomorrow and “say no” 😄)',
            image: '/story_meeting_1767951851794.png'
        },
        {
            title: 'First Date',
            date: 'The Verandah, Rambagh Palace',
            description: "She suggested, ‘Let’s go to the verandah.’ He smiled, confident he knew Jaipur like the back of his hand, yet somehow, he didn’t have the faintest idea where she meant. When she added, ‘Rambagh?’ he laughed and said, ‘Ah, of course, let’s go.’ He reached a little early, brimming with curiosity, and she kept him waiting forty minutes. He pretended to be annoyed, grumbling under his breath, but every sigh hid a little smile, he was happy just being there, waiting for her. At that charming place, the world seemed to fade away. Over almond coffee and sparkling water, they talked endlessly, about people, places, food, travel, eight hours passing as if in a heartbeat. No hurry, no agenda, just them. Yet in those quiet, effortless hours, something gentle and unforgettable quietly began.",
            image: '/story_date_1767951873660.png'
        },
        {
            title: 'Engagement',
            date: 'A Promise of Forever',
            description: "On their engagement day, the world around them seemed to blur, though, of course, it didn’t really matter. Mere Sohneya played softly in the background, and with every note, they fell for each other even harder. Silently, on bended knees, they whispered “partners forever”. Her smile lit up the room, his eyes sparkled like stars, and in that moment, time itself felt magical. He held her simply, lifting her heavy lehnga with ease, and in that gentle, effortless touch, their joined hands carried a promise: to always stand by each other, through every tomorrow.",
            image: '/story_proposal_1767951897199.png'
        }
    ];

    return (
        <section className="our-story section" id="story" ref={storyRef}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >Our Story</motion.h2>

                <div className="story-timeline">
                    <svg className="heart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                            ref={pathRef}
                            d="M50,90 C50,90 10,60 10,35 C10,20 20,10 30,10 C40,10 50,20 50,20 C50,20 60,10 70,10 C80,10 90,20 90,35 C90,60 50,90 50,90 Z"
                            fill="none"
                            stroke="var(--color-primary)"
                            strokeWidth="0.5"
                            strokeDasharray="300"
                        />
                    </svg>

                    {stories.map((story, index) => (
                        <div key={index} className={`story-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="story-content">
                                <div className="story-image-wrapper">
                                    <img src={story.image} alt={story.title} className="story-image" />
                                </div>
                                <div className="story-text">
                                    <h3 className="story-title">{story.title}</h3>
                                    <p className="story-date">{story.date}</p>
                                    <p className="story-description">{story.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurStory;
