import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.bigHeadline}>
                    <h2>Your Body Is</h2>
                    <h2>Your Temple</h2>
                </div>
                <div className={styles.brand}>
                    <h2 className={styles.logo}>GYMWO</h2>
                    <p className={styles.tagline}>Pushing limits since 2026.</p>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4>Explore</h4>
                        <Link href="#">Classes</Link>
                        <Link href="#">Trainers</Link>
                        <Link href="#">Membership</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <Link href="#">About Us</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Contact</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; 2026 GYMWO Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
