import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Plan.module.css';
import Link from 'next/link';

export default function PlanPage() {
    return (
        <main className={styles.planPage}>
            <Navbar />

            <div className={styles.container}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroImageContainer}>
                        {/* Placeholder for Mother & Baby Image */}
                        <img
                            src="/images/hero-new.png"
                            alt="Mother and baby exercising"
                            className={styles.heroImage}
                        />
                    </div>

                    <div className={styles.heroContent}>
                        <span className={styles.heroTag}>6-Week Recovery</span>
                        <h1 className={styles.heroTitle}>6-Week Waist<br />Recovery</h1>
                        <p className={styles.heroSubtitle}>
                            Intensive Postpartum Roadmap. Designed for safe, effective, and
                            sustainable results.
                        </p>

                        <Link href="/myfit" className={styles.ctaButton}>Start Plan</Link>
                    </div>
                </section>

                {/* Quote Section 1 */}
                <section className={styles.quoteSection}>
                    <div className={styles.avatar} style={{ backgroundImage: 'url(/images/hero-2.jpg)' }}></div>
                    <div className={styles.quoteContent}>
                        <p className={styles.quoteText}>
                            &quot;Hi mama, I&apos;m Adele... Join (34), 4 months postpartum. I understand exactly what you&apos;re going through. Let&apos;s start this journey together.&quot;
                        </p>
                        <span className={styles.quoteAuthor}>Sarah J.<br />Founder & Mom</span>
                    </div>
                </section>

                {/* Quote Section 2 */}
                <section className={styles.quoteSection}>
                    <div className={styles.avatar} style={{ backgroundImage: 'url(/images/hero-2.jpg)' }}></div>
                    <div className={styles.quoteContent}>
                        <p className={styles.quoteText}>
                            &quot;Hi mama, I&apos;m Adele... Join (34), 4 months postpartum. I understand exactly what you&apos;re going through. Let&apos;s start this journey together.&quot;
                        </p>
                        <span className={styles.quoteAuthor}>Sarah J.<br />Founder & Mom</span>
                    </div>
                </section>

                {/* Quote Section 3 */}
                <section className={styles.quoteSection}>
                    <div className={styles.avatar} style={{ backgroundImage: 'url(/images/hero-2.jpg)' }}></div>
                    <div className={styles.quoteContent}>
                        <p className={styles.quoteText}>
                            &quot;Hi mama, I&apos;m Adele... Join (34), 4 months postpartum. I understand exactly what you&apos;re going through. Let&apos;s start this journey together.&quot;
                        </p>
                        <span className={styles.quoteAuthor}>Sarah J.<br />Founder & Mom</span>
                    </div>
                </section>

                {/* Roadmap Section */}
                <section className={styles.roadmapSection}>
                    <h2 className={styles.sectionTitle}>3-Phase Roadmap</h2>
                    <p className={styles.sectionSubtitle}>Progressive series designed to heal, slim and rebuild core strength.</p>

                    <div className={styles.roadmapList}>
                        {/* Phase 1 */}
                        <div className={`${styles.roadmapCard} ${styles.phase1}`}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <span style={{ color: '#00FF7F' }} className={styles.phaseTag}>WEEKS 1-2 • GENTLE</span>
                                    <h3 className={styles.phaseTitle}>Phase 1 : Wake<br />Up Core</h3>
                                </div>
                                <span className={styles.phaseIcon}>🌿</span>
                            </div>
                            <p className={styles.phaseDesc}>Reactivate deep abdominal muscles aligned to foundation focus.</p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>10 min/day</span>
                                <span className={styles.tag}>Total 14</span>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className={`${styles.roadmapCard} ${styles.phase2}`}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <span style={{ color: '#FFD700' }} className={styles.phaseTag}>WEEKS 3-4 • INTENSE</span>
                                    <h3 className={styles.phaseTitle}>Phase 2 : Burn &<br />Shape</h3>
                                </div>
                                <span className={styles.phaseIcon}>🛡️</span>
                            </div>
                            <p className={styles.phaseDesc}>Boost heart rate and burn calories through gentle intensity.</p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>15 min/day</span>
                                <span className={styles.tag}>Burn Fat</span>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className={`${styles.roadmapCard} ${styles.phase3}`}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <span style={{ color: '#FF6B6B' }} className={styles.phaseTag}>WEEKS 5-6 • POWER</span>
                                    <h3 className={styles.phaseTitle}>Phase 3 :<br />Tighten & Glow</h3>
                                </div>
                                <span className={styles.phaseIcon}>🔥</span>
                            </div>
                            <p className={styles.phaseDesc}>Refining curves and increasing metabolic efficiency.</p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>20 min/day</span>
                                <span className={styles.tag}>High Intensity</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tips Section */}
                <section className={styles.tipsSection}>
                    <h2 className={styles.tipsTitle}>Beautiful Mom - Healthy Baby</h2>
                    <p className={styles.tipsSubtitle}>Balanced nutrition helps mothers recover quickly while ensuring ample milk supply for the little one.</p>

                    <div className={styles.tipCard}>
                        <div className={styles.tipIcon}>
                            <span style={{ color: '#00FF7F' }}>⏰</span>
                        </div>
                        <h3 className={styles.tipTitle}>The &apos;3 BEFORE&apos; Rule</h3>
                        <p className={styles.tipDesc}>Essential intake: Before exercise, before sleep, and before breastfeeding for optimal energy.</p>
                    </div>

                    <div className={styles.tipCard}>
                        <div className={styles.tipIcon}>
                            <span style={{ color: '#FF9500' }}>🍴</span>
                        </div>
                        <h3 className={styles.tipTitle}>Golden Foods</h3>
                        <p className={styles.tipDesc}>Focus on oats, salmon, mixed nuts, and dark leafy greens to support recovery and lactation.</p>
                    </div>

                    {/* Final CTA Card mimicking the dark card in design */}
                    {/* Final CTA Card mimicking the dark card in design */}
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaCardContent}>
                            <div className={styles.ctaIconBox}>
                                <span style={{ fontSize: '1.5rem', color: '#000' }}>🗑️</span>
                            </div>
                            <div className={styles.ctaTextBox}>
                                <h3 className={styles.ctaCardTitle}>Detox Drink Sidebar</h3>
                                <p className={styles.ctaCardDesc}>Warm honey-lemon water every morning helps gently purify the body and boost</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className={styles.gallerySection}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h2 className={styles.galleryTitle}>More Trailer,<br />Baby Plans</h2>
                        <span className={styles.gallerySubtitle}>View more</span>
                    </div>

                    <div className={styles.galleryList}>
                        <div className={styles.galleryCard}>
                            <div className={styles.galleryImage} style={{ backgroundImage: 'url(/images/hero-1.jpg)' }}></div>
                            <div className={styles.galleryInfo}>
                                <h3 className={styles.galleryCardTitle}>Squat w/m baby</h3>
                                <p className={styles.galleryCardDesc}>Bodyweight • Beginner</p>
                            </div>
                        </div>
                        <div className={styles.galleryCard}>
                            <div className={styles.galleryImage} style={{ backgroundImage: 'url(/images/programs-1.jpg)' }}></div>
                            <div className={styles.galleryInfo}>
                                <h3 className={styles.galleryCardTitle}>Plank & Hold w baby</h3>
                                <p className={styles.galleryCardDesc}>Core • Intermediate</p>
                            </div>
                        </div>
                        <div className={styles.galleryCard}>
                            <div className={styles.galleryImage} style={{ backgroundImage: 'url(/images/analysis-1.jpg)' }}></div>
                            <div className={styles.galleryInfo}>
                                <h3 className={styles.galleryCardTitle}>Zumba seam</h3>
                                <p className={styles.galleryCardDesc}>Cardio • All Levels</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main CTA */}
                <section className={styles.ctaMainSection}>
                    <h2 className={styles.ctaTitle}>Ready to become your<br />brightest self?</h2>
                    <p className={styles.ctaDesc}>Join thousands of mothers who have successfully reclaimed their confidence and health. Your transformation starts with a single step.</p>
                    <Link href="/myfit" className={styles.ctaButton}>Start Training Now</Link>
                    <div className={styles.trustBadge}>
                        <span>🛡️ 100% Safe & Expert-Approved</span>
                    </div>
                </section>
            </div >

            <Footer />
        </main >
    );
}
