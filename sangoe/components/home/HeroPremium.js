'use client';
import Link from 'next/link';
import styles from './HeroPremium.module.css';

export default function HeroPremium() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/hero section ui.png"
          alt="Sangoe — Build a Business That Runs Without You"
          className={styles.heroImg}
          loading="eager"
          fetchPriority="high"
          draggable={false}
        />

        {/* Invisible click targets — perfectly over the image buttons */}
        <Link href="/pricing" className={styles.hitStart} id="hero-start-trial" aria-label="Start Free Trial" />
        <Link href="/contact" className={styles.hitDemo}  id="hero-book-demo"   aria-label="Book Live Demo" />
      </div>
    </section>
  );
}
