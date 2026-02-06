'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Analysis.module.css';

// Points are now in the dictionary


const Analysis = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t.analysis.titlePart1}<br />{t.analysis.titlePart2}</h2>
                    <div className={styles.points}>
                        {t.analysis.points.map((p, i) => (
                            <div key={i} className={styles.point}>
                                <div className={styles.pointIcon}></div>
                                <div>
                                    <h4 className={styles.pointTitle}>{p.title}</h4>
                                    <p className={styles.pointDesc}>{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.imageCard}>
                        {/* Placeholder for person being analyzed */}
                        <Image
                            src="/images/analysis-1.jpg"
                            alt="Analysis"
                            className={styles.image}
                            width={600}
                            height={400}
                            style={{ width: '100%', height: 'auto' }}
                        />

                        {/* Overlay UI Mockup */}
                        <div className={styles.glassOverlay}>
                            <div className={styles.scanLine}></div>
                            <span className={styles.scanLabel}>{t.analysis.analyzing}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analysis;
