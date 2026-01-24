import styles from './Nutrition.module.css';

const Nutrition = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.mockupContainer}>
                    {/* UI Mockup for Nutrition Dashboard */}
                    <div className={styles.dashboard}>
                        <div className={styles.dashHeader}>
                            <span>Daily Nutrition</span>
                            <div className={styles.avatar}></div>
                        </div>
                        <div className={styles.dashStats}>
                            <div className={styles.statBox}>
                                <span className={styles.val}>2100</span>
                                <span className={styles.label}>kcal</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.val}>140g</span>
                                <span className={styles.label}>Protein</span>
                            </div>
                        </div>
                        <div className={styles.dashImage}>
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1760&auto=format&fit=crop" alt="Food" />
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2 className={styles.title}>Smart Nutrition<br />Dashboard</h2>
                    <p className={styles.text}>
                        Track your macros automatically. Our AI suggests meal plans based on your preferences and goals.
                    </p>
                    <ul className={styles.list}>
                        <li>Personalized Plans</li>
                        <li>Auto-generated Lists</li>
                        <li>Scan & Track</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Nutrition;
