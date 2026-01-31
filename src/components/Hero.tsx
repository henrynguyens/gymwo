"use client";

import { motion } from "framer-motion";
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                {/* Header Content */}
                <div className={styles.headerContent}>
                    <span className={styles.eyebrow}>The Fitness</span>
                    <h1 className={styles.title}>Journey Starts Here</h1>
                    <p className={styles.subtitle}>
                        Personalized workout plans and nutrition guides tailored to your specific body type and goals.
                    </p>
                    <button className={styles.ctaButton}>Start Your Journey Today</button>
                </div>

                {/* Central Visual (Phone Mockup) */}
                <div className={styles.visualContainer}>
                    {/* Floating Left Card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`${styles.floatingCard} ${styles.cardLeft}`}
                    >
                        <div className={styles.avatar}></div>
                        <div className={styles.cardText}>
                            <span className={styles.cardName}>Sarah J.</span>
                            <span className={styles.cardStatus}>On Track</span>
                        </div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <div className={styles.phoneMockup}>
                        <div className={styles.notch}></div>
                        <div className={styles.screen}>
                            {/* Placeholder for App Interface */}
                            <div className={styles.goalHeader}>
                                <span className={styles.goalHeaderText}>Today&apos;s Goal</span>
                                <span className={styles.menuIcon}>≡</span>
                            </div>

                            <div className={styles.goalCard}>
                                <img src="/images/hero-1.jpg" alt="Goal" className={styles.goalImage} />
                                <div className={styles.goalOverlay}>
                                    <span className={styles.levelTag}>Level 1</span>
                                    <h3 className={styles.goalTitle}>5-Day Strength Boost</h3>
                                    <button className={styles.startBtn}>Start Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Right Card */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className={`${styles.floatingCard} ${styles.cardRight}`}
                    >
                        <div className={styles.iconStep}>👣</div>
                        <div className={styles.cardText}>
                            <span className={styles.cardVal}>4,200</span>
                            <span className={styles.cardLabel}>Steps today</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
