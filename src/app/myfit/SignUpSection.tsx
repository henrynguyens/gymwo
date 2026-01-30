import React from 'react';
import { Mail, Lock, Eye } from 'lucide-react';
import styles from './MyFit.module.css';

export default function SignUpSection() {
    return (
        <div className={styles.signUpContainer}>
            <div className={styles.splitLayout}>
                {/* Left Side: Form */}
                <div className={styles.formSide}>
                    <div className={styles.brandIcon}>
                        <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>M</div>
                    </div>

                    <div className={styles.formHeader}>
                        <h2 className={styles.formTitle}>Sign Up</h2>
                        <p className={styles.formSubtitle}>Join us to access the latest products and product catalog.</p>
                    </div>

                    <form className={styles.signUpForm} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputWrapper}>
                            <Mail className={styles.inputIcon} size={20} />
                            <input type="email" placeholder="saraalbert@gmail.com" className={styles.formInput} />
                        </div>

                        <div className={styles.inputWrapper}>
                            <Lock className={styles.inputIcon} size={20} />
                            <input type="password" placeholder="Password" className={styles.formInput} />
                            <Eye className={styles.inputEye} size={20} />
                        </div>

                        <div className={styles.inputWrapper}>
                            <Lock className={styles.inputIcon} size={20} />
                            <input type="password" placeholder="Re-enter password" className={styles.formInput} />
                            <Eye className={styles.inputEye} size={20} />
                        </div>

                        <button className={styles.submitButton}>Sign up</button>
                        <div className={styles.signInLink}>
                            Already have an account? <span>Sign in</span>
                        </div>
                    </form>
                </div>

                {/* Right Side: Image/Content */}
                <div className={styles.imageSide}>
                    {/* Fallback pattern background if image fails */}
                    <div className={styles.slimeOverlay}>
                        <h2 className={styles.heroText}>Happiness for Your Little One</h2>
                        <div className={styles.pillBadge}>Slime</div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1596464716127-f9a0859b03ca?q=80&w=2000&auto=format&fit=crop"
                        alt="Happiness for your little one"
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </div>
    );
}
