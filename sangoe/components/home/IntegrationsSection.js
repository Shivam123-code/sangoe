'use client';
import { motion } from 'framer-motion';
import { 
  ChromeLogo, 
  FigmaLogo, 
  DriveLogo, 
  SpotifyLogo, 
  ShopifyLogo, 
  MastercardLogo, 
  SlackLogo, 
  PaypalLogo,
  AppStoreLogo,
  PlayStoreLogo
} from '../ui/BrandLogos';
import { useReveal, fadeUp, scaleIn, stagger } from '../ui/motion';
import styles from './IntegrationsSection.module.css';

const LEFT_LOGOS = [
  { logo: SlackLogo, name: 'Slack' },
  { logo: ChromeLogo, name: 'Chrome' },
  { logo: SpotifyLogo, name: 'Spotify' },
  { logo: ShopifyLogo, name: 'Shopify' },
  { logo: MastercardLogo, name: 'Mastercard' },
  { logo: PaypalLogo, name: 'PayPal' },
];

const RIGHT_LOGOS = [
  { logo: PlayStoreLogo, name: 'Play Store' },
  { logo: AppStoreLogo, name: 'App Store' },
  { logo: DriveLogo, name: 'Google Drive' },
  { logo: FigmaLogo, name: 'Figma' },
  { logo: SlackLogo, name: 'Slack' },
  { logo: ChromeLogo, name: 'Chrome' },
];

export default function IntegrationsSection() {
  const { ref, inView } = useReveal(0.15);

  return (
    <section className={styles.section} ref={ref} id="integrations">
      <div className="wrap">
        {/* Header */}
        <motion.div 
          className={styles.header}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="tag">Simplify Your Workflow</motion.span>
          <motion.h2 variants={fadeUp} className={styles.h2}>
            Effortless Integrations For<br />
            <span className="purple-text">Maximum Of Productivity</span>
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.sub}>
            Sangoe connects seamlessly with your favorite business applications, financial gateways, and development tools to automate tedious workflows.
          </motion.p>
        </motion.div>

        {/* Integration Grid Layout */}
        <div className={styles.container}>
          {/* Left Grid */}
          <motion.div 
            className={styles.grid}
            variants={stagger(0.05)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {LEFT_LOGOS.map((item, i) => {
              const LogoComp = item.logo;
              return (
                <motion.div 
                  key={i} 
                  variants={scaleIn} 
                  className={styles.logoCard}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className={styles.logoWrap}>
                    <LogoComp />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Pulsing Badge */}
          <motion.div 
            className={styles.centerCol}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          >
            <motion.div 
              className={styles.badge}
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(124, 58, 237, 0.4)', 
                  '0 0 0 24px rgba(124, 58, 237, 0)'
                ] 
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut' }}
            >
              <div className={styles.badgeInner}>
                <span className={styles.badgeNum}>32+</span>
                <span className={styles.badgeText}>Integration<br />Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Grid */}
          <motion.div 
            className={styles.grid}
            variants={stagger(0.05)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {RIGHT_LOGOS.map((item, i) => {
              const LogoComp = item.logo;
              return (
                <motion.div 
                  key={i} 
                  variants={scaleIn} 
                  className={styles.logoCard}
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className={styles.logoWrap}>
                    <LogoComp />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
