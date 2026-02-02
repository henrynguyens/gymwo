'use client';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Benefits.module.css';

const Benefits = () => {
    const { t } = useLanguage();

    // Icons for the benefits items (matching the order in the dictionary)
    const icons = ["🏃‍♂️", "💪", "📈"];

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.benefits.eyebrow}</span>
                    <h2 className={styles.title}>{t.benefits.title}</h2>
                    <p className={styles.subtitle}>{t.benefits.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {t.benefits.items.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.icon}>{icons[idx]}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
