import React from 'react';
import { Share, MoreHorizontal, Star, Flame } from 'lucide-react';
import styles from '../app/plan/DailyPlan.module.css';

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
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.coachInfo}>
                    {/* Placeholder for image if not provided */}
                    <div className={styles.coachImage} style={{ backgroundColor: '#E0E0E0' }} >
                        {/* If we had "next/image", we'd use it here. For now, empty div or img tag */}
                        {coachImage && <img src={coachImage} alt={coachName} className={styles.coachImage} />}
                    </div>
                    <div className={styles.coachName}>
                        Coach
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
                        <div style={{ fontSize: '0.8rem', color: '#8E8E93' }}>{intensity} Intensity</div>
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
                        Rating
                    </div>
                    <div className={styles.statValue}>
                        {rating} <span style={{ fontSize: '0.8rem', color: '#8E8E93', fontWeight: 400 }}>{reviews.toLocaleString()} reviews</span>
                    </div>
                </div>
                <div className={styles.statBox}>
                    <div className={styles.statLabel}>
                        <Flame size={14} />
                        Calories
                    </div>
                    <div className={styles.statValue}>
                        {calories} <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
