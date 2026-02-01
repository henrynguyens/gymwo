'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';
import { Brain, Camera, Users, Cloud } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    // Icons array to map with tech items
    const techIcons = [Brain, Camera, Users, Cloud];

    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.overlay}></div>
                <Image
                    src="/images/about-hero.png"
                    alt="Mother and Child"
                    fill
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    priority
                />
                <div className={styles.heroContent}>
                    <span className={styles.pageLabel}>{t.about.label}</span>
                    <h1 className={styles.heroTitle}>
                        {t.about.heroTitle}
                    </h1>
                    <p className={styles.heroSubtitle}>
                        {t.about.heroSubtitle}
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* Origin Story Section */}
                <section className={styles.storySection}>
                    <div className={styles.storyGrid}>
                        <div className={styles.storyContent}>
                            <h2>{t.about.storyTitle}</h2>
                            <p>
                                {t.about.storyP1}
                            </p>
                            <p>
                                {t.about.storyP2}
                            </p>
                        </div>
                        <div className={styles.storyImageWrapper}>
                            <Image
                                src="/images/about-story-collage.png"
                                alt="Transformation Journey"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Technology Section */}
            <section className={styles.techSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{t.about.techHeaderTitle}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t.about.techHeaderSubtitle}
                        </p>
                    </div>

                    <div className={styles.techGrid}>
                        {t.about.techItems.map((item, index) => {
                            const Icon = techIcons[index];
                            return (
                                <div key={index} className={styles.techCard}>
                                    <div className={styles.techIcon}>
                                        <Icon size={32} />
                                    </div>
                                    <h3 className={styles.techTitle}>{item.title}</h3>
                                    <p className={styles.techDesc}>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className={styles.closingSection}>
                <div className={styles.container}>
                    <div className={styles.closingContent}>
                        <h2>{t.about.closingTitle}</h2>
                        <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                            {t.about.closingText}
                        </p>

                        <div className={styles.quoteBlock}>
                            {t.about.quote}
                        </div>

                        <Link href="/plan" className={styles.ctaButton}>
                            {t.about.cta}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
