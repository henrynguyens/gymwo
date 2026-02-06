'use client';

import React, { useState } from 'react';
import { X, ChevronRight, Loader2 } from 'lucide-react';
import styles from '../app/myfit/MyFit.module.css';
import { PlanData } from '@/types';

import { useLanguage } from '@/context/LanguageContext';

import { useAuth } from '@/context/AuthContext';

interface PersonalPlanFormProps {
    onAnalysisComplete: (data: PlanData) => void;
    onLoadingChange?: (loading: boolean) => void;
}

export default function PersonalPlanForm({ onAnalysisComplete, onLoadingChange }: PersonalPlanFormProps) {
    const { t, language } = useLanguage();
    const { user } = useAuth(); // Get user from auth context

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Initialize form data with user metadata if available, otherwise fallback to defaults
    const [formData, setFormData] = useState({
        age: user?.user_metadata?.age ? Number(user.user_metadata.age) : 33,
        // Map simplified gender to form options if needed, or default to Postpartum for demo
        gender: user?.user_metadata?.gender === 'female' ? 'Female (Postpartum)' :
            user?.user_metadata?.gender === 'male' ? 'Male' :
                user?.user_metadata?.gender ? user.user_metadata.gender : 'Female (Postpartum)',
        height: user?.user_metadata?.height ? Number(user.user_metadata.height) : 155,
        currentWeight: user?.user_metadata?.weight ? Number(user.user_metadata.weight) : 54,
        targetWeight: user?.user_metadata?.weight ? Number(user.user_metadata.weight) - 5 : 49, // Auto-suggest target
        preferences: ['Zumba', 'Yoga', 'Vietnamese Cuisine'],
        focusArea: 'Belly fat reduction and core strengthening'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (onLoadingChange) onLoadingChange(true);
        setError(null);
        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, language }), // Pass language to API
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            onAnalysisComplete(data);
        } catch (error: unknown) {
            console.error('Analysis failed:', error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to generate plan. Please try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
            if (onLoadingChange) onLoadingChange(false);
        }
    };

    return (
        <div className={styles.card} style={{ marginBottom: '2rem' }}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{t.myfit.title}</h3>
            </div>

            <div className={styles.modalForm}>
                {error && (
                    <div style={{
                        backgroundColor: '#FEF2F2',
                        color: '#EF4444',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid #FCA5A5',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem'
                    }}>
                        <X size={16} />
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className={styles.modalForm}>
                    {/* Age & Gender */}
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label>{t.myfit.age}</label>
                            <input
                                type="number"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>{t.myfit.gender}</label>
                            <select
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                className={styles.inputField}
                            >
                                <option>Female (Postpartum)</option>
                                <option>Female</option>
                                <option>Male</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className={styles.metricGrid}>
                        <div className={styles.formGroup}>
                            <label>{t.myfit.height}</label>
                            <input
                                type="number"
                                value={formData.height}
                                onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>{t.myfit.currentWeight}</label>
                            <input
                                type="number"
                                value={formData.currentWeight}
                                onChange={(e) => setFormData({ ...formData, currentWeight: Number(e.target.value) })}
                                className={styles.inputField}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>{t.myfit.targetWeight}</label>
                            <input
                                type="number"
                                value={formData.targetWeight}
                                onChange={(e) => setFormData({ ...formData, targetWeight: Number(e.target.value) })}
                                className={styles.inputField}
                            />
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className={styles.formGroup}>
                        <label>{t.myfit.preferences}</label>
                        <div className={styles.tagsInput}>
                            {formData.preferences.map((pref, i) => (
                                <span key={i} className={styles.tag}>
                                    {pref} <X size={12} style={{ cursor: 'pointer' }} onClick={() => {
                                        const newPrefs = [...formData.preferences];
                                        newPrefs.splice(i, 1);
                                        setFormData({ ...formData, preferences: newPrefs });
                                    }} />
                                </span>
                            ))}
                            <button type="button" className={styles.addTagBtn} onClick={() => {
                                const newPref = prompt(t.myfit.placeholders.pref);
                                if (newPref) setFormData({ ...formData, preferences: [...formData.preferences, newPref] });
                            }}>{t.myfit.addPref}</button>
                        </div>
                    </div>

                    {/* Focus Area */}
                    <div className={styles.formGroup}>
                        <label>{t.myfit.focusArea}</label>
                        <input
                            type="text"
                            value={formData.focusArea}
                            onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                            className={styles.inputField}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            type="submit"
                            className={styles.saveButton}
                            style={{ marginTop: 0 }}
                            disabled={loading}
                        >
                            {loading ? (
                                <>{t.myfit.analyzing} <Loader2 className="animate-spin" size={18} /></>
                            ) : (
                                <>{t.myfit.startAnalysis} <ChevronRight size={18} /></>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
