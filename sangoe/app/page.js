// import Hero from '@/components/home/Hero'; // ← PRESERVED — old Three.js-free hero
// import HeroUniverse from '@/components/home/HeroUniverse'; // ← PRESERVED — universe orbits hero
// import HeroVideo from '@/components/home/HeroVideo'; // ← PRESERVED — video hero
import HeroPremium from '@/components/home/HeroPremium'; // ← ACTIVE — premium SaaS hero
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

      {/* 1. ACTIVE HERO — Premium SaaS hero & Trust Strip */}
      <HeroPremium />
      {/* <HeroUniverse /> */}
      {/* <HeroVideo /> */}
      <TrustStrip />

      {/* 2. One Platform to Run, Control & Scale & Mission */}
      <SolutionStatement />
      <MissionStatement />

      {/* 3. Explore CRM & ERP Features */}
      <FeaturesOverview limit={6} />

      {/* 4. IPO Journey & Roadmap */}
      <IPORoadmap />
      <JourneySection />

      {/* 5. Problem, Not a CRM (WhySangoe) */}
      <ProblemSection />
      <WhySangoe />

      {/* Remaining Sections */}
      <AdvancedSolutions />
      {/* OLD IndustriesSection — preserved: <IndustriesSection /> */}
      <AISection />
      <AssessmentSection />
      <Testimonials />

      {/* Trust & certifications */}
      <TrustBadges />

      {/* Strategy partners */}
      <StrategyPartners />

      <FinalCTA />
    </main>
  );
}

