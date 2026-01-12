import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';
import myWeddingSong from '../assets/myWeddingSong.mp3';

// Using a placeholder wedding-appropriate song. 
// NOTE: You must use a DIRECT link to an audio file (ending in .mp3, .wav, etc.)
// Links to SoundCloud pages or YouTube videos will NOT work with this player.
// To use a local file:
// 1. Place your 'song.mp3' in the 'src/assets' folder
// 2. Import it: import bgMusic from '../assets/song.mp3'
// 3. Use it: const PLAYLIST_URL = bgMusic;

const PLAYLIST_URL = myWeddingSong;
const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(PLAYLIST_URL));
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.4; // Set a pleasant background volume

        const playAudio = () => {
            audio.play().then(() => {
                setIsPlaying(true);
                // Remove listeners once playing
                document.removeEventListener('click', playAudio);
                document.removeEventListener('touchstart', playAudio);
                document.removeEventListener('keydown', playAudio);
            }).catch(err => {
                console.log("Autoplay blocked, waiting for interaction");
            });
        };

        // Try to play immediately
        playAudio();

        // Add global listeners to catch the first interaction if blocked
        document.addEventListener('click', playAudio);
        document.addEventListener('touchstart', playAudio);
        document.addEventListener('keydown', playAudio);

        return () => {
            audio.pause();
            document.removeEventListener('click', playAudio);
            document.removeEventListener('touchstart', playAudio);
            document.removeEventListener('keydown', playAudio);
        };
    }, []);

    // Return null to render nothing (invisible player)
    return null;
};

export default MusicPlayer;
