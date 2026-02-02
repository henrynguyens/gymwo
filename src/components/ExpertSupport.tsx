'use client';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ExpertSupport.module.css';

const ExpertSupport = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{t.expert.titlePart1}<br />{t.expert.titlePart2}</h2>
                <p className={styles.subtitle}>{t.expert.subtitle}</p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>💬</div>
                        <h3>{t.expert.aiAgent.title}</h3>
                        <p>{t.expert.aiAgent.description}</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>👩‍⚕️</div>
                        <h3>{t.expert.humanSpec.title}</h3>
                        <p>{t.expert.humanSpec.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertSupport;
