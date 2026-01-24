import styles from './ExpertSupport.module.css';

const ExpertSupport = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>24/7 Premium<br />Expert Support</h2>
                <p className={styles.subtitle}>Our team of certified nutritionists and trainers are always available.</p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>💬</div>
                        <h3>AI Coach Agent</h3>
                        <p>Instant answers to your training questions, anytime.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>👩‍⚕️</div>
                        <h3>Human Specialists</h3>
                        <p>Schedule 1-on-1 calls with real experts for deep dives.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertSupport;
