"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                {/* Header Content */}
                <div className={styles.headerContent}>
                    <span className={styles.eyebrow}>The Fitness</span>
                    <h1 className={styles.title}>{t.hero.title}</h1>
                    <p className={styles.subtitle}>
                        {t.hero.subtitle}
                    </p>
                    <button className={styles.ctaButton}>{t.hero.cta}</button>
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
                                <Image src="/images/hero-1.jpg" alt="Goal" className={styles.goalImage} width={300} height={200} style={{ width: '100%', height: 'auto' }} />
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
