import styles from './Programs.module.css';

const programs = [
    { name: "Strength", image: "/images/programs-1.jpg" },
    { name: "Cardio", image: "/images/programs-1.jpg" },
    { name: "Yoga", image: "/images/programs-1.jpg" }
];

const Programs = () => {
    return (
        <section id="classes" className={styles.programs}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>OUR <span className={styles.outline}>PROGRAMS</span></h2>
                </div>
                <div className={styles.gallery}>
                    {programs.map((prog, idx) => (
                        <div key={idx} className={styles.item} style={{ backgroundImage: `url(${prog.image})` }}>
                            <div className={styles.overlay}>
                                <h3 className={styles.itemName}>{prog.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
