import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';
import { Brain, Camera, Users, Cloud } from 'lucide-react';

export default function About() {
    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.overlay}></div>
                <Image
                    src="/images/about-hero.png"
                    alt="Mother and Child"
                    fill
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    priority
                />
                <div className={styles.heroContent}>
                    <span className={styles.pageLabel}>VỀ CHÚNG TÔI</span>
                    <h1 className={styles.heroTitle}>
                        &quot;Hành trình làm mẹ là một thiên chức cao quý, nhưng đằng sau nụ cười của trẻ thơ là những vết rạn, sự mệt mỏi và nỗi tự ti thầm kín.&quot;
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Thấu hiểu những hy sinh vô bờ bến ấy, Gymwo đã ra đời không chỉ như một ứng dụng công nghệ, mà là một món quà tri ân xuất phát từ trái tim.
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* Origin Story Section */}
                <section className={styles.storySection}>
                    <div className={styles.storyGrid}>
                        <div className={styles.storyContent}>
                            <h2>Câu chuyện từ tình yêu và sự thấu cảm</h2>
                            <p>
                                Chứng kiến người vợ thân yêu – từ một cô gái rạng rỡ trở nên ưu tư vì vóc dáng thay đổi sau kỳ vượt cạn, một kỹ sư phần mềm (Dev) đã không khỏi xót xa. Anh hiểu rằng đằng sau những con số trên bàn cân là cả một quá trình đánh đổi sức khỏe để chào đón thiên thần nhỏ.
                            </p>
                            <p>
                                Với mong muốn giúp vợ tìm lại chính mình, anh đã dành hàng nghìn đêm miệt mài bên bàn phím, biến những dòng code khô khan thành hệ thống Phục hồi Thể chất Thông minh, kết hợp cùng sự tư vấn từ các chuyên gia hình thể đầu ngành.
                            </p>
                        </div>
                        <div className={styles.storyImageWrapper}>
                            <Image
                                src="/images/about-story-collage.png"
                                alt="Transformation Journey"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Technology Section */}
            <section className={styles.techSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Người đồng hành thông minh – Công nghệ dẫn lối vẻ đẹp</h2>
                        <p className={styles.sectionSubtitle}>
                            Sản phẩm là sự giao thoa hoàn hảo giữa Trí tuệ nhân tạo (AI) và Đội ngũ PT chuyên nghiệp, mang đến trải nghiệm cá nhân hóa cao nhất.
                        </p>
                    </div>

                    <div className={styles.techGrid}>
                        {/* Feature 1 */}
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>
                                <Brain size={32} />
                            </div>
                            <h3 className={styles.techTitle}>Công nghệ AI tối ưu (Adaptive Learning)</h3>
                            <p className={styles.techDesc}>
                                Hệ thống không chỉ đưa ra các bài tập cố định mà sử dụng thuật toán Học tăng cường để phân tích chỉ số BMI, tỷ lệ mỡ nội tạng và tình trạng tách cơ bụng. AI thiết kế lộ trình &quot;may đo&quot; riêng cho từng giai đoạn hậu sản, đảm bảo an toàn cho sàn chậu và cột sống.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>
                                <Camera size={32} />
                            </div>
                            <h3 className={styles.techTitle}>Hệ thống Pose Estimation (Mắt thần AI)</h3>
                            <p className={styles.techDesc}>
                                Tích hợp công nghệ nhận diện chuyển động qua camera. AI phân tích các điểm mốc xương khớp (keypoints) để phản hồi tức thì về tư thế tập luyện (Form Correction), giúp bạn tập đúng như có chuyên gia bên cạnh, ngăn ngừa chấn thương.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>
                                <Users size={32} />
                            </div>
                            <h3 className={styles.techTitle}>Sự hỗ trợ từ chuyên gia (Hybrid Coaching)</h3>
                            <p className={styles.techDesc}>
                                Mỗi người dùng được kết nối với một PT chuyên nghiệp. Các chuyên gia theo dõi dữ liệu tổng hợp từ AI để tinh chỉnh cường độ tập dựa trên biểu đồ nhịp tim (HRV) và mức độ căng thẳng, mang lại động lực như một người bạn thân thiết.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>
                                <Cloud size={32} />
                            </div>
                            <h3 className={styles.techTitle}>Linh hoạt trên nền tảng Cloud</h3>
                            <p className={styles.techDesc}>
                                Dù bạn tập tại phòng khách khi con đang ngủ hay đến phòng gym, toàn bộ tiến trình sẽ được đồng bộ hóa tức thì. Giao diện trực quan với các mô hình 3D minh họa động tác giúp việc tiếp cận trở nên dễ dàng chỉ với một cú chạm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className={styles.closingSection}>
                <div className={styles.container}>
                    <div className={styles.closingContent}>
                        <h2>Vì bạn xứng đáng với những điều tốt đẹp nhất</h2>
                        <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                            Chúng tôi tin rằng, mỗi người phụ nữ sau sinh đều xứng đáng được chăm sóc và yêu thương bằng những thành tựu công nghệ hiện đại nhất. Gymwo không chỉ giúp bạn lấy lại vóc dáng thon gọn, mà còn giúp bạn phục hồi sức khỏe từ cốt lõi, tái tạo năng lượng tích cực để tận hưởng trọn vẹn niềm hạnh phúc làm mẹ.
                        </p>

                        <div className={styles.quoteBlock}>
                            &quot;Chúng tôi không chỉ triển khai một hệ thống tập luyện; chúng tôi vận hành một cam kết về sự thấu hiểu và lòng biết ơn đối với những người phụ nữ đã hy sinh vì gia đình.&quot;
                        </div>

                        <Link href="/plan" className={styles.ctaButton}>
                            Bắt đầu ngay
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
