'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Nutrition.module.css';

const Nutrition = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.mockupContainer}>
                    {/* UI Mockup for Nutrition Dashboard */}
                    <div className={styles.dashboard}>
                        <div className={styles.dashHeader}>
                            <span>{t.nutrition.daily}</span>
                            <div className={styles.avatar}></div>
                        </div>
                        <div className={styles.dashStats}>
                            <div className={styles.statBox}>
                                <span className={styles.val}>2100</span>
                                <span className={styles.label}>{t.nutrition.kcal}</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.val}>140g</span>
                                <span className={styles.label}>{t.nutrition.protein}</span>
                            </div>
                        </div>
                        <div className={styles.dashImage}>
                            <Image
                                src="/images/nutrition-1.jpg"
                                alt="Food"
                                width={500}
                                height={300}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>{t.nutrition.titlePart1}<br />{t.nutrition.titlePart2}</h2>
                    <p className={styles.text}>{t.nutrition.text}</p>
                    <ul className={styles.list}>
                        {t.nutrition.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Nutrition;
