'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="GYMWO"
                        width={40}
                        height={40}
                        style={{ height: 'auto', width: 'auto' }}
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className={styles.links}>
                    <Link href="/#features" className={styles.link}>Features</Link>
                    <Link href="/#classes" className={styles.link}>Classes</Link>
                    <Link href="/plan" className={styles.link}>Plans</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                </div>

                <div className={styles.actions}>
                    <button className="btn btn-primary">Join Now</button>

                    {/* Mobile Toggle */}
                    <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/#features" className={styles.mobileLink} onClick={toggleMenu}>Features</Link>
                    <Link href="/#classes" className={styles.mobileLink} onClick={toggleMenu}>Classes</Link>
                    <Link href="/plan" className={styles.mobileLink} onClick={toggleMenu}>Plans</Link>
                    <Link href="/about" className={styles.mobileLink} onClick={toggleMenu}>About</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
