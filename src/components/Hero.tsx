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
                            <div className={styles.appHeader}>
                                <div className={styles.appAvatar}></div>
                                <span>Hello, Guest</span>
                            </div>
                            <div className={styles.appStat}>
                                <span className={styles.statVal}>10,245</span>
                                <span className={styles.statLabel}>Steps</span>
                            </div>
                            <div className={styles.appGraph}></div>
                            <button className={styles.appBtn}>Start Workout</button>
                            {/* Image overlay for realism if we had one, else CSS UI */}
                            <div className={styles.appImageCtn}>
                                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1740&auto=format&fit=crop" alt="Workout" className={styles.appImage} />
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
