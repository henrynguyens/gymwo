import styles from './Benefits.module.css';

const benefits = [
    {
        icon: "🏃‍♂️",
        title: "Proposal Process",
        desc: "Our automated systems streamline your intake with precision."
    },
    {
        icon: "💪",
        title: "Personal Plan",
        desc: "Receive dedicated workout routines adapted to your lifestyle."
    },
    {
        icon: "📈",
        title: "Annual Tracking",
        desc: "Visualize your progress over time with advanced metrics."
    }
];

const Benefits = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Designed for</span>
                    <h2 className={styles.title}>Your Journey</h2>
                    <p className={styles.subtitle}>Everything you need to succeed, all in one place.</p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
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
