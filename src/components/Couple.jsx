import { motion } from 'framer-motion';
import './Couple.css';

function Couple() {
    return (
        <section className="couple section" id="couple">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >The Couple</motion.h2>

                <div className="couple-grid">
                    <motion.div
                        className="couple-card"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <div className="couple-image-wrapper">
                            <img src="/bride_portrait_1767951817922.png" alt="Ishika Rajoria" className="couple-image" />
                        </div>
                        <h3 className="couple-name script-text">Ishika Rajoria</h3>
                        <p className="couple-description">
                            By profession a lawyer, by heart a chef.
                            She finds joy in good food, cozy cafés, and little adventures, always better with him by her side. She’s a people’s person, but her heart melts for him. With him, life feels warmer and effortlessly happy. She’s forever cheering for him, smiling softly at his little wins.
                        </p>
                    </motion.div>

                    <motion.div
                        className="couple-card"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                    >
                        <div className="couple-image-wrapper">
                            <img src="/groom_portrait_1767951834123.png" alt="Krishna Akar" className="couple-image" />
                        </div>
                        <h3 className="couple-name script-text">Krishna Akar</h3>
                        <p className="couple-description">
                            A businessman driven by passion and integrity.
                            He steps into each day with quiet ambition and clear vision. His eyes hold dreams, but shine brightest when they find hers. He finds joy in playful teasing and little spats, yet his heart bends to her wishes, always being there for her effortlessly.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
