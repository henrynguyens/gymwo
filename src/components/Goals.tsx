'use client';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Goals.module.css';

const Goals = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{t.goals.title}</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <img src="/images/hero-2.jpg" alt="Goal 1" className={styles.image} />
                    </div>
                    <div className={styles.card}>
                        <img src="/images/goals-1.jpg" alt="Goal 2" className={styles.image} />
                    </div>
                    <div className={styles.card}>
                        <img src="/images/programs-1.jpg" alt="Goal 3" className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
