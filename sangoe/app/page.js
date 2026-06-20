// import Hero from '@/components/home/Hero'; // ← PRESERVED — old Three.js-free hero
// import HeroUniverse from '@/components/home/HeroUniverse'; // ← PRESERVED — Three.js universe hero
import HeroVideo from '@/components/home/HeroVideo'; // ← ACTIVE — video hero
import DashboardShowcase from '@/components/home/DashboardShowcase'; // NEW — sequential dashboard reveals
import MissionStatement from '@/components/home/MissionStatement';
import TrustStrip from '@/components/home/TrustStrip';
import TrustBadges from '@/components/home/TrustBadges';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionStatement from '@/components/home/SolutionStatement';

import JourneySection from '@/components/home/JourneySection';
import IPORoadmap from '@/components/home/IPORoadmap';
import FeaturesOverview from '@/components/home/FeaturesOverview';
import AdvancedSolutions from '@/components/home/AdvancedSolutions';
import IndustriesSection from '@/components/home/IndustriesSection'; // preserved
import AISection from '@/components/home/AISection';
import AssessmentSection from '@/components/home/AssessmentSection';
import Testimonials from '@/components/home/Testimonials';
import WhySangoe from '@/components/home/WhySangoe';
import StrategyPartners from '@/components/home/StrategyPartners';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      {/* ── PRESERVED HEROES (do not delete) ────────────────────────────────────
          Original:   <Hero />
          Three.js:   <HeroUniverse />
          To restore: swap import + JSX on this line
          ───────────────────────────────────────────────────── */}

      {/* ACTIVE HERO — Video background, clean text */}
      <HeroVideo />

      {/* Dashboard Showcase — 4 modules revealed one by one on scroll */}
      <DashboardShowcase />

      {/* Mission statement */}
      <MissionStatement />

      <TrustStrip />
      <ProblemSection />
      <SolutionStatement />

      <JourneySection />
      <IPORoadmap />
      <FeaturesOverview />
      <AdvancedSolutions />
      {/* OLD IndustriesSection — preserved: <IndustriesSection /> */}
      <AISection />
      <AssessmentSection />
      <Testimonials />
      <WhySangoe />

      {/* Trust & certifications */}
      <TrustBadges />

      {/* Strategy partners */}
      <StrategyPartners />

      <FinalCTA />
    </main>
  );
}

