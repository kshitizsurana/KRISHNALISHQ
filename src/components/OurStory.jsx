import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

function OurStory() {
    const storyRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (lineRef.current) {
                const pathLength = lineRef.current.getTotalLength();

                gsap.set(lineRef.current, {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength
                });

                gsap.to(lineRef.current, {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: storyRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1.5,
                    }
                });
            }



            gsap.utils.toArray(".story-item").forEach((item, i) => {
                const isLeft = i % 2 === 0;

                gsap.fromTo(item,
                    {
                        x: isLeft ? -100 : 100,
                        opacity: 0,
                        scale: 0.9,
                        rotateY: isLeft ? -15 : 15
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );

                const image = item.querySelector('.story-image');
                if (image) {
                    gsap.to(image, {
                        y: -30,
                        ease: "none",
                        scrollTrigger: {
                            trigger: item,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1
                        }
                    });
                }
            });
        }, storyRef);

        setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => ctx.revert();
    }, []);

    const stories = [
        {
            title: 'First Meeting',
            date: '16 July 2025, The Lalit, Jaipur',
            description: `Their parents played cupid. She walked in a little nervous, he was calm. They spoke softly, laughed a little, and found comfort in the quiet pauses. Somehow, it felt right, he felt steady and familiar, she felt at home. (Soft note: one day before meeting him, she had spotted someone like him at her favourite café and got slightly ticked off, so she decided to meet him tomorrow and "say no" 😄)`,
            image: '/story_meeting_1767951851794.png'
        },
        {
            title: 'First Date',
            date: 'The Verandah, Rambagh Palace',
            description: `She suggested, 'Let's go to Verandah.' He smiled, confident he knew Jaipur like the back of his hand, yet somehow, he didn't have the faintest idea where she meant. When she added, 'Rambagh?' he laughed and said, 'Ah, of course, let's go.' He reached a little early, brimming with curiosity, and she kept him waiting forty minutes. He pretended to be annoyed, grumbling under his breath, but every sigh hid a little smile, he was happy just being there, waiting for her. At that charming place, the world seemed to fade away. Over almond coffee and sparkling water, they talked endlessly, about people, places, food, travel, eight hours passing as if in a heartbeat. No hurry, no agenda, just them. Yet in those quiet, effortless hours, something gentle and unforgettable quietly began.`,
            image: '/story_date_1767951873660.png'
        },
        {
            title: 'Engagement',
            date: 'A Promise of Forever',
            description: `On their engagement day, the world around them seemed to blur, though, of course, it didn't really matter. Mere Sohneya played softly in the background, and with every note, they fell for each other even harder. Silently, on bended knees, they whispered "partners forever". Her smile lit up the room, his eyes sparkled like stars, and in that moment, time itself felt magical. He held her simply, lifting her heavy lehnga with ease, and in that gentle, effortless touch, their joined hands carried a promise: to always stand by each other, through every tomorrow.`,
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
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >Our Story</motion.h2>

                <div className="story-timeline">
                    <svg className="flowing-line" viewBox="0 0 100 2000" preserveAspectRatio="none">
                        <path
                            ref={lineRef}
                            d="M 50 0 Q 30 200 50 400 T 50 800 Q 70 1000 50 1200 T 50 1600 Q 30 1800 50 2000"
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.1)" />
                                <stop offset="50%" stopColor="rgba(0, 0, 0, 0.6)" />
                                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.1)" />
                            </linearGradient>
                        </defs>
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
