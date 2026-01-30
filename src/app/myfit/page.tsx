'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Leaf,
    MoreHorizontal,
    Play,
    RotateCcw,
    RotateCw,
    Pause,
    List,
    Info,
    BotMessageSquare,
    Flame,
    ArrowRight,
    ChevronLeft,
    PlusCircle,
    RefreshCw
} from 'lucide-react';
import styles from './MyFit.module.css';
import PersonalPlanForm from '../../components/PersonalPlanForm';
import Navbar from '@/components/Navbar';
import { MOCK_PLAN_DATA } from '../../data/mockPlan';

export default function MyFit() {
    const [planData, setPlanData] = useState<any>(MOCK_PLAN_DATA);

    const [selectedDay, setSelectedDay] = useState(0);
    const [mealIndices, setMealIndices] = useState<Record<string, number>>({});

    const handleAnalysisComplete = (data: any) => {
        setPlanData(data);
        setSelectedDay(0);
        setMealIndices({});
    };

    const cycleMealOption = (mealType: string, optionsCount: number) => {
        setMealIndices(prev => ({
            ...prev,
            [mealType]: ((prev[mealType] || 0) + 1) % optionsCount
        }));
    };

    // Default/Initial values
    const bmi = planData?.user_analysis?.bmi || 22.5;
    const bmiStatus = 'Healthy';
    const healthStatus = planData ? 'Customized' : 'Postpartum';

    const calories = planData?.user_analysis?.daily_calorie_target || 1450;
    const consumed = 0; // Reset to 0 for fresh daily view
    const remaining = Math.max(0, calories - consumed);

    const macros = planData?.user_analysis?.macros || { p: 108, c: 163, f: 40 };
    const pTarget = macros.p;
    const cTarget = macros.c;
    const fTarget = macros.f;

    // Calculate dynamic percentages based on targets (4 kcal/g for P/C, 9 kcal/g for F)
    const totalTargetCal = (pTarget * 4) + (cTarget * 4) + (fTarget * 9);
    const pPercent = Math.round(((pTarget * 4) / totalTargetCal) * 100) || 30;
    const cPercent = Math.round(((cTarget * 4) / totalTargetCal) * 100) || 45;
    const fPercent = Math.round(((fTarget * 9) / totalTargetCal) * 100) || 25;

    // Workout
    const workoutPlan = planData?.workout_plan || [];
    const todayWorkout = workoutPlan[selectedDay] || {
        day_name: "Today",
        focus: "Zumba High-Energy",
        activity_type: "Cardio",
        duration: "60 mins",
        exercises: [
            { name: "Warm-up Rhythms", duration: "10 mins" },
            { name: "Cardio Burst Phase", duration: "Ongoing" },
            { name: "Core Tightening", duration: "10 mins" }
        ]
    };

    // Nutrition Guide
    const lifestyleTips = planData?.lifestyle_recommendations || [
        "Focus on iron-rich foods and staying hydrated.",
        "If breastfeeding, ensure you're consuming an extra 300-500 calories.",
        "Eat slow-digesting carbs like oats and sweet potatoes."
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <Navbar />

            {/* Sub Header */}
            <div className={styles.subHeader}>
                <Link href="/plan" className={styles.backButton}>
                    <ChevronLeft size={16} />
                    Back
                </Link>
            </div>


            <main className={styles.main}>
                {/* Welcome Section */}
                <section className={styles.welcomeSection}>
                    <div>
                        <h1 className={styles.welcomeTitle}>
                            Good morning, Sabrina! ☀️
                        </h1>
                        <p className={styles.subTitle}>You&apos;re making incredible progress. Here is your plan for today.</p>
                    </div>

                    <div className={styles.statusCards}>
                        <div className={styles.statusCard}>
                            <div className={`${styles.statusIcon}`}>
                                <Info size={18} />
                            </div>
                            <div className={styles.statusInfo}>
                                <span className={styles.statusLabel}>BMI Index</span>
                                <span className={styles.statusValue}>{bmi} <span className={styles.statusTag}>{bmiStatus}</span></span>
                            </div>
                        </div>

                        <div className={styles.statusCard}>
                            <div className={`${styles.statusIcon} ${styles.purple}`}>
                                <List size={18} />
                            </div>
                            <div className={styles.statusInfo}>
                                <span className={styles.statusLabel}>Status</span>
                                <span className={styles.statusValue}>{healthStatus}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <PersonalPlanForm onAnalysisComplete={handleAnalysisComplete} />

                {/* Dashboard Grid */}
                <div className={styles.dashboardGrid}>
                    {/* Left Column: Nutrition */}
                    <div className={styles.column}>
                        {/* Nutrition Focus Card */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>Daily Nutrition Focus</h3>
                                <MoreHorizontal size={20} color="#C7C7CC" />
                            </div>

                            <div className={styles.nutritionBody}>
                                {/* Ring Chart */}
                                <div className={styles.ringWrapper}>
                                    <div className={styles.ring}></div>
                                    <div className={styles.ringContent}>
                                        <Flame size={20} color="#FF9500" fill="#FF9500" style={{ marginBottom: 8 }} />
                                        <span className={styles.caloriesValue}>{consumed.toLocaleString()}</span>
                                        <span className={styles.caloriesLabel}>KCAL CONSUMED</span>
                                    </div>
                                </div>

                                {/* Macros */}
                                <div className={styles.macroList}>
                                    <div className={styles.macroItem}>
                                        <div className={styles.macroHeader}>
                                            <span style={{ color: '#549EF2' }}>● Protein ({pPercent}%)</span>
                                            <span className={styles.macroStats}>0g / {pTarget}g</span>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div className={styles.progressFill} style={{ width: '0%', backgroundColor: '#549EF2' }}></div>
                                        </div>
                                    </div>

                                    <div className={styles.macroItem}>
                                        <div className={styles.macroHeader}>
                                            <span style={{ color: '#FF9500' }}>● Carbs ({cPercent}%)</span>
                                            <span className={styles.macroStats}>0g / {cTarget}g</span>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div className={styles.progressFill} style={{ width: '0%', backgroundColor: '#FF9500' }}></div>
                                        </div>
                                    </div>

                                    <div className={styles.macroItem}>
                                        <div className={styles.macroHeader}>
                                            <span style={{ color: '#66E0A3' }}>● Fat ({fPercent}%)</span>
                                            <span className={styles.macroStats}>0g / {fTarget}g</span>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div className={styles.progressFill} style={{ width: '0%', backgroundColor: '#66E0A3' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.nutritionFooter}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className={styles.footerLabel}>Remaining</span>
                                    <span className={styles.footerValue}>{remaining}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className={styles.footerLabel}>Target</span>
                                    <span className={styles.footerValue}>{calories}</span>
                                </div>
                            </div>
                        </div>

                        {/* Breakfast Options */}
                        <div>
                            <div className={styles.listHeader}>
                                <h3 className={styles.cardTitle}>Today's Meal Plan</h3>
                                <span className={styles.viewAll}>View Full Schedule</span>
                            </div>
                            <div className={styles.foodRow} style={{ flexDirection: 'column', gap: '0.75rem' }}>
                                {planData?.nutrition_plan?.meal_schedule ? (
                                    ['breakfast', 'snack_1', 'lunch', 'snack_2', 'dinner'].map((mealType) => {
                                        const meal = planData.nutrition_plan.meal_schedule[mealType];
                                        if (!meal || !meal.options?.length) return null;

                                        const currentIndex = mealIndices[mealType] || 0;
                                        const opt = meal.options[currentIndex];

                                        // Format meal type label
                                        const label = mealType.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
                                        const totalOptions = meal.options.length;

                                        return (
                                            <div key={mealType} className={styles.foodCard} style={{ width: '100%' }}>
                                                <div className={styles.foodInfo}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                                                        <div style={{ fontSize: '0.7rem', color: '#8E8E93', textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
                                                        {totalOptions > 1 && (
                                                            <div style={{ fontSize: '0.65rem', color: '#549EF2', fontWeight: 500 }}>
                                                                Option {currentIndex + 1}/{totalOptions}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className={styles.foodName}>{opt.dish_name}</div>
                                                    <div className={styles.foodMeta}>{opt.portion} • {opt.kcal} kcal • {opt.protein_content}</div>
                                                </div>
                                                <div
                                                    className={styles.addButton}
                                                    onClick={() => cycleMealOption(mealType, totalOptions)}
                                                    style={{ cursor: 'pointer', opacity: 1 }}
                                                >
                                                    <RefreshCw size={20} className={totalOptions > 1 ? styles.swapButton : ''} />
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <>
                                        {/* Skeleton / Empty State */}
                                        <div className={styles.foodCard} style={{ width: '100%' }}>
                                            <div className={styles.foodInfo}>
                                                <div className={styles.foodName}>Generating Plan...</div>
                                                <div className={styles.foodMeta}>Please wait for analysis</div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Nutrition Guide */}
                        <div className={styles.guideCard}>
                            <div className={styles.guideIcon}>
                                <Leaf size={18} />
                            </div>
                            <div className={styles.guideContent}>
                                <h4>Lifestyle Recommendations</h4>
                                <ul className={styles.tipsList}>
                                    {lifestyleTips.map((tip: string, i: number) => (
                                        <li key={i}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Workout */}
                    <div className={styles.column}>

                        {/* Day Selector */}
                        <div className={styles.daySelector}>
                            {[...Array(7)].map((_, i) => {
                                const dayData = workoutPlan[i];
                                const label = dayData ? dayData.day_name : `Day ${i + 1}`;
                                return (
                                    <button
                                        key={i}
                                        className={`${styles.dayChip} ${selectedDay === i ? styles.active : ''}`}
                                        onClick={() => setSelectedDay(i)}
                                    >
                                        {label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Workout Component */}
                        <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
                            <div className={styles.workoutHero}>
                                <span className={styles.tag}>{todayWorkout.day_name || "TODAY'S WORKOUT"}</span>
                                <h2 className={styles.workoutHeroTitle}>{todayWorkout.focus}</h2>
                                <p className={styles.workoutHeroSub}>{todayWorkout.activity_type} • {todayWorkout.duration}</p>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <div className={styles.workoutControls}>
                                    <div className={styles.timer}>
                                        <div className={styles.timerRing}>
                                            <RotateCw size={20} />
                                        </div>
                                        <div>
                                            <span className={styles.stageLabel} style={{ fontSize: '0.75rem', color: '#8E8E93', display: 'block' }}>DURATION</span>
                                            <span className={styles.timeDisplay}>45:00 <span className={styles.timeTotal}>/ {todayWorkout.duration?.replace('mins', ':00') || '60:00'}</span></span>
                                        </div>
                                    </div>

                                    <div className={styles.playControls}>
                                        <button className={styles.controlBtn} aria-label="Rewind">
                                            <RotateCcw size={20} />
                                        </button>
                                        <button className={`${styles.controlBtn} ${styles.primary}`} aria-label="Pause">
                                            <Pause size={24} fill="white" stroke="none" />
                                        </button>
                                        <button className={styles.controlBtn} aria-label="Forward">
                                            <RotateCw size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div style={{ marginTop: '1.5rem' }}>
                                    <h4 className={styles.cardTitle} style={{ fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <List size={18} /> Exercise Breakdown
                                    </h4>
                                    <div className={styles.exerciseList}>
                                        {todayWorkout.exercises ? (
                                            todayWorkout.exercises.map((ex: any, i: number) => (
                                                <div key={i} className={`${styles.exerciseItem} ${i === 0 ? styles.active : ''}`}>
                                                    <div style={{ flex: 1 }}>
                                                        <span style={{ display: 'block', fontWeight: 500 }}>{ex.name}</span>
                                                        {ex.technical_guide && (
                                                            <span style={{ fontSize: '0.75rem', color: '#8E8E93', marginTop: 2, display: 'block', fontStyle: 'italic' }}>
                                                                Tip: {ex.technical_guide}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className={styles.exerciseDuration}>{ex.reps_sets || ex.duration || 'N/A'}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className={styles.exerciseItem}>
                                                <span>Waiting for plan...</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Guide */}
                        <div className={styles.techGuide}>
                            <div className={styles.techTitle}>
                                <div style={{ backgroundColor: '#E6F0FF', padding: 4, borderRadius: 4 }}>
                                    <Info size={16} className={styles.infoIcon} />
                                </div>
                                Technical Guide
                            </div>
                            <p className={styles.techText}>
                                Maintain a &quot;gentle-but-engaged&quot; core. Avoid high-impact jumps if you feel any pressure. Keep your movements fluid and listen to your body&apos;s feedback.
                            </p>
                            <div className={styles.safetyLink}>
                                VIEW SAFETY PROTOCOL <ArrowRight size={14} />
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Chat Bubble */}
            <div className={styles.chatBubble}>
                <BotMessageSquare size={24} />
            </div>
        </div >
    );
}
