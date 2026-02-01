'use client';

import { Dumbbell, Users, Heart, Clock } from 'lucide-react';
import styles from './Features.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();

    // Map icons to the translated items based on index
    // Note: Dictionary items must match this order: Dumbbell, Users, Heart, Clock
    const icons = [Dumbbell, Users, Heart, Clock];

    return (
        <section id="features" className={styles.features}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.features.title} <span style={{ color: 'var(--primary)' }}>{t.features.brandName}</span></h2>
                    <p className={styles.subtitle}>{t.features.subtitle}</p>
                </div>
                <div className={styles.grid}>
                    {t.features.items.map((feature, index) => {
                        const Icon = icons[index];
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconBox}>
                                    <Icon size={32} />
                                </div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
