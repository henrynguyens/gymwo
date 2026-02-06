'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import styles from './Navbar.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();
    const { user, signOut } = useAuth();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'vn' : 'en');
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
                    <Link href="/#features" className={styles.link}>{t.nav.features}</Link>
                    <Link href="/plan" className={styles.link}>{t.nav.plans}</Link>
                    <Link href="/about" className={styles.link}>{t.nav.about}</Link>
                </div>

                <div className={styles.actions}>
                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className={styles.langToggle}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 600,
                            marginRight: '1rem'
                        }}
                    >
                        <Globe size={20} />
                        {language === 'en' ? 'VN' : 'EN'}
                    </button>

                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#000' }}>
                                {user.email?.split('@')[0]}
                            </span>
                            <button
                                onClick={signOut}
                                className="btn btn-outline"
                                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', color: '#000', borderColor: '#000' }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className={styles.link} style={{ marginRight: '1rem', fontWeight: 600 }}>Login</Link>
                            <Link href="/register" className="btn btn-primary">{t.nav.joinNow}</Link>
                        </>
                    )}

                    {/* Mobile Toggle */}
                    <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/#features" className={styles.mobileLink} onClick={toggleMenu}>{t.nav.features}</Link>
                    <Link href="/plan" className={styles.mobileLink} onClick={toggleMenu}>{t.nav.plans}</Link>
                    <Link href="/about" className={styles.mobileLink} onClick={toggleMenu}>{t.nav.about}</Link>
                    <div style={{ padding: '1rem 2rem' }}>
                        <button
                            onClick={() => { toggleLanguage(); toggleMenu(); }}
                            className="btn btn-outline"
                            style={{ width: '100%' }}
                        >
                            Switch to {language === 'en' ? 'Vietnamese' : 'English'}
                        </button>
                    </div>
                    {user ? (
                        <div style={{ padding: '0 2rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                {user.email}
                            </span>
                            <button onClick={() => { signOut(); toggleMenu(); }} className="btn btn-primary" style={{ width: '100%' }}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div style={{ padding: '0 2rem 1rem' }}>
                            <Link href="/login" onClick={toggleMenu} className="btn btn-secondary" style={{ width: '100%', marginBottom: '0.5rem', textAlign: 'center' }}>Login</Link>
                            <Link href="/register" onClick={toggleMenu} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>{t.nav.joinNow}</Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
