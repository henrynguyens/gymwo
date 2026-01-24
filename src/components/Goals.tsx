import styles from './Goals.module.css';

const Goals = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Your Goals, Defined.</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <img src="https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?q=80&w=1760&auto=format&fit=crop" alt="Workout" className={styles.image} />
                        <div className={styles.overlay}>
                            <h3>Build Muscle</h3>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" alt="Portrait" className={styles.image} />
                        <div className={styles.overlay}>
                            <h3>Lose Weight</h3>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop" alt="Portrait 2" className={styles.image} />
                        <div className={styles.overlay}>
                            <h3>Tone Up</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
