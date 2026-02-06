'use client';
import React from 'react';
import Image from 'next/image';
import { Share, MoreHorizontal, Star, Flame } from 'lucide-react';
import styles from '../app/plan/Plan.module.css';
import { useLanguage } from '@/context/LanguageContext';

interface PlanCardProps {
    coachName: string;
    coachImage?: string; // Optional URL
    title: string;
    intensity: 'High' | 'Medium' | 'Low';
    duration: string; // e.g. "50 min."
    description: string;
    rating: number;
    reviews: number;
    calories: number;
}

export default function PlanCard({
    coachName,
    coachImage,
    title,
    intensity,
    duration,
    description,
    rating,
    reviews,
    calories,
}: PlanCardProps) {
    const { t } = useLanguage();

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.coachInfo}>
                    {/* Placeholder for image if not provided */}
                    <div className={styles.coachImage} style={{ backgroundColor: '#E0E0E0' }} >
                        {/* If we had "next/image", we'd use it here. For now, empty div or img tag */}
                        {coachImage && (
                            <Image
                                src={coachImage}
                                alt={coachName}
                                className={styles.coachImage}
                                width={40}
                                height={40}
                            />
                        )}
                    </div>
                    <div className={styles.coachName}>
                        {t.planCard.coach}
                        <span>{coachName}</span>
                    </div>
                </div>
                <div className={styles.cardActions}>
                    <button className={styles.actionButton} aria-label="Share">
                        <Share size={16} />
                    </button>
                    <button className={styles.actionButton} aria-label="More options">
                        <MoreHorizontal size={16} />
                    </button>
                </div>
            </div>

            <div>
                <div className={styles.titleRow}>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: '#8E8E93' }}>{intensity} {t.planCard.intensity}</div>
                        <h3 className={styles.activityTitle}>{title}</h3>
                    </div>
                    <span className={styles.durationBadge}>{duration}</span>
                </div>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.statBox}>
                    <div className={styles.statLabel}>
                        <Star size={14} fill="#1C1C1E" />
                        {t.planCard.rating}
                    </div>
                    <div className={styles.statValue}>
                        {rating} <span style={{ fontSize: '0.8rem', color: '#8E8E93', fontWeight: 400 }}>{reviews.toLocaleString()} {t.planCard.reviews}</span>
                    </div>
                </div>
                <div className={styles.statBox}>
                    <div className={styles.statLabel}>
                        <Flame size={14} />
                        {t.planCard.calories}
                    </div>
                    <div className={styles.statValue}>
                        {calories} <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
