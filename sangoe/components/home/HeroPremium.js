'use client';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
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

        {/* Buttons overlaid on the empty space below the 500+ stats row */}
        <div className={styles.btnRow}>
          <Link href="/get-started?plan=trial" className={styles.btnPrimary} id="hero-start-trial">
            Start Free Trial <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
          <Link href="/contact" className={styles.btnSecondary} id="hero-book-demo">
            Book Live Demo
            <span className={styles.playIcon}>
              <Play size={9} fill="#6C4CF1" strokeWidth={0} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
