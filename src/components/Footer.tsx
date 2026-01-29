import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brandColumn}>
                    <h2 className={styles.logo}>GYMWO</h2>
                    <p className={styles.description}>
                        Pioneering the next generation of female-first fitness through artificial intelligence and physiological science.
                    </p>
                    <p className={styles.copyright}>&copy; 2026 GYMWO AI FITNESS. All Rights Reserved.</p>
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.column}>
                        <h4>Platform</h4>
                        <Link href="#">How it works</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Mobile App</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Support</h4>
                        <Link href="#">Help Center</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Privacy Policy</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <Link href="mailto:hello@gymwo.app">hello@gymwo.app</Link>
                        <Link href="#">Instagram</Link>
                        <Link href="#">Twitter</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
