import { useEffect, useRef, useState } from 'react';
import './OurStory.css';

function OurStory() {
    const [heartPath, setHeartPath] = useState(0);
    const storyRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (storyRef.current) {
                const rect = storyRef.current.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
                    const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
                    setHeartPath(scrollProgress * 100);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stories = [
        {
            title: 'First Meeting',
            date: 'January 2020',
            description: 'Our eyes met across a crowded room, and in that moment, we both knew something special was about to begin. It was a chance encounter that would change our lives forever.',
            image: '/story_meeting_1767951851794.png'
        },
        {
            title: 'First Date',
            date: 'February 2020',
            description: 'A simple walk in the park turned into hours of conversation and laughter. We talked about our dreams, our fears, and everything in between. Time seemed to stand still.',
            image: '/story_date_1767951873660.png'
        },
        {
            title: 'The Proposal',
            date: 'December 2022',
            description: 'Under a sky painted with stars, he got down on one knee and asked the most important question. With tears of joy, she said yes, and our forever began.',
            image: '/story_proposal_1767951897199.png'
        },
        {
            title: 'Engagement',
            date: 'January 2023',
            description: 'Surrounded by family and friends, we celebrated our love and commitment. The joy and blessings we received made our bond even stronger.',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800'
        }
    ];

    return (
        <section className="our-story section" id="story" ref={storyRef}>
            <div className="container">
                <h2 className="section-title">Our Story</h2>

                <div className="story-timeline">
                    <svg className="heart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                            d="M50,90 C50,90 10,60 10,35 C10,20 20,10 30,10 C40,10 50,20 50,20 C50,20 60,10 70,10 C80,10 90,20 90,35 C90,60 50,90 50,90 Z"
                            fill="none"
                            stroke="#ff6b6b"
                            strokeWidth="0.5"
                            strokeDasharray="300"
                            strokeDashoffset={300 - (heartPath * 3)}
                            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
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
