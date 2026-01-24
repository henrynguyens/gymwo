"use client";
import styles from './Analysis.module.css';

const points = [
    { title: "Smart Scan", desc: "Digital assessment of your form and body metrics." },
    { title: "Holistic Health", desc: "Integrating sleep, nutrition, and recovery data." },
    { title: "Dynamic Adapt", desc: "Workouts change as you improve." }
];

const Analysis = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>AI Analysis &<br />Personal Roadmap</h2>
                    <div className={styles.points}>
                        {points.map((p, i) => (
                            <div key={i} className={styles.point}>
                                <div className={styles.pointIcon}></div>
                                <div>
                                    <h4 className={styles.pointTitle}>{p.title}</h4>
                                    <p className={styles.pointDesc}>{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.imageCard}>
                        {/* Placeholder for person being analyzed */}
                        <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1740&auto=format&fit=crop" alt="Analysis" className={styles.image} />

                        {/* Overlay UI Mockup */}
                        <div className={styles.glassOverlay}>
                            <div className={styles.scanLine}></div>
                            <span className={styles.scanLabel}>Analyzing Form...</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analysis;
