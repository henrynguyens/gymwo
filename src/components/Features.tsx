import { Dumbbell, Users, Heart, Clock, CheckCircle } from 'lucide-react';
import styles from './Features.module.css';

const features = [
    {
        title: "State of the Art",
        description: "Experience the latest in fitness technology with our premium biomechanically engineering equipment.",
        icon: Dumbbell
    },
    {
        title: "Expert Coaching",
        description: "Our certified personal trainers create custom plans tailored to your specific body type and goals.",
        icon: Users
    },
    {
        title: "Recovery Zone",
        description: "Post-workout recovery essentials including cryotherapy, sauna, and massage therapy services.",
        icon: Heart
    },
    {
        title: "24/7 Access",
        description: "Train on your schedule. Our facilities are open 24 hours a day, 7 days a week, securely.",
        icon: Clock
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
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
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
