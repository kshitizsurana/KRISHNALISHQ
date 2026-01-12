import React, { useEffect, useRef } from 'react';
import myWeddingSong from '../assets/myWeddingSong.mp3';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // We try to programmatically triggering play as well, 
        // just in case the autoPlay attribute is ignored by some React reconciliations
        if (audioRef.current) {
            audioRef.current.volume = 0.5;

            const playMusic = async () => {
                try {
                    await audioRef.current.play();
                } catch (err) {
                    console.log("Autoplay prevented by browser. Waiting for user interaction.");
                    // Fallback: If immediate playback fails, we MUST listen for an interaction 
                    // because browsers simply won't play audio otherwise. 
                    // This "responds" to the screen only because it has to.
                    const enableAudio = () => {
                        audioRef.current.play();
                        document.removeEventListener('click', enableAudio);
                        document.removeEventListener('touchstart', enableAudio);
                    };
                    document.addEventListener('click', enableAudio);
                    document.addEventListener('touchstart', enableAudio);
                }
            };

            playMusic();
        }
    }, []);

    return (
        <audio
            ref={audioRef}
            src={myWeddingSong}
            autoPlay
            loop
            style={{ display: 'none' }}
        />
    );
};

export default MusicPlayer;
