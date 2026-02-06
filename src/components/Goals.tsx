'use client';
import Image from 'next/image';
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
                        <Image src="/images/hero-2.jpg" alt="Goal 1" className={styles.image} width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{t.goals.items[0]}</h3>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src="/images/goals-1.jpg" alt="Goal 2" className={styles.image} width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{t.goals.items[1]}</h3>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src="/images/programs-1.jpg" alt="Goal 3" className={styles.image} width={400} height={300} style={{ width: '100%', height: 'auto' }} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{t.goals.items[2]}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
