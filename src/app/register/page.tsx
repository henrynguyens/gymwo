'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
import styles from './Register.module.css';

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        gender: 'female',
        age: '',
        height: '',
        weight: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Sign up with Supabase
            const { error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        gender: formData.gender,
                        age: formData.age,
                        height: formData.height,
                        weight: formData.weight
                    }
                }
            });

            if (signUpError) throw signUpError;

            // Successful registration
            alert(`Welcome to GYMWO! Please check your email to confirm your account.`);
            router.push('/login');

        } catch (err: any) {
            console.error('Registration failed:', err);
            setError(err.message || 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Join GYMWO</h1>
                <p className={styles.subtitle}>Create your profile to start your journey</p>

                {error && <div style={{
                    color: '#ff4d4d',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    padding: '0.5rem',
                    background: 'rgba(255, 77, 77, 0.1)',
                    borderRadius: '8px'
                }}>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className={styles.input}
                            placeholder="hello@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            className={styles.input}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Gender</label>
                            <select
                                name="gender"
                                className={styles.select}
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Age</label>
                            <input
                                type="number"
                                name="age"
                                required
                                min="13"
                                max="100"
                                className={styles.input}
                                placeholder="Age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Height (cm)</label>
                            <input
                                type="number"
                                name="height"
                                required
                                min="100"
                                max="250"
                                className={styles.input}
                                placeholder="165"
                                value={formData.height}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Weight (kg)</label>
                            <input
                                type="number"
                                name="weight"
                                required
                                min="30"
                                max="200"
                                className={styles.input}
                                placeholder="60"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-primary ${styles.submitBtn}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#666' }}>
                        Already have an account? <span style={{ color: 'var(--primary)', cursor: 'pointer' }}>Log in</span>
                    </p>
                </form>
            </div>
        </div>
    );
}
