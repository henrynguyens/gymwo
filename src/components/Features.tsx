import styles from './Features.module.css';

const features = [
    {
        title: "State of the Art",
        description: "Experience the latest in fitness technology with our premium biomechanically engineering equipment."
    },
    {
        title: "Expert Coaching",
        description: "Our certified personal trainers create custom plans tailored to your specific body type and goals."
    },
    {
        title: "Recovery Zone",
        description: "Post-workout recovery essentials including cryotherapy, sauna, and massage therapy services."
    },
    {
        title: "24/7 Access",
        description: "Train on your schedule. Our facilities are open 24 hours a day, 7 days a week, securely."
    }
];

const Features = () => {
    return (
        <section id="features" className={styles.features}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>WHY CHOOSE <span style={{ color: 'var(--primary)' }}>GYMWO</span></h2>
                    <p className={styles.subtitle}>ELEVATE YOUR TRAINING TO THE NEXT LEVEL</p>
                </div>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconBox}></div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
