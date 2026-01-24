import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    GYMWO
                </Link>
                <div className={styles.links}>
                    <Link href="#features" className={styles.link}>Features</Link>
                    <Link href="#classes" className={styles.link}>Classes</Link>
                    <Link href="#pricing" className={styles.link}>Pricing</Link>
                    <Link href="#about" className={styles.link}>About</Link>
                </div>
                <div className={styles.actions}>
                    <button className="btn btn-primary">Join Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
