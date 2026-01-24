import styles from './Programs.module.css';

const programs = [
    { name: "Strength", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" },
    { name: "Cardio", image: "https://images.unsplash.com/photo-1538805060504-d141e4322797?q=80&w=1287&auto=format&fit=crop" },
    { name: "Yoga", image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=1471&auto=format&fit=crop" }
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
