import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionStatement from '@/components/home/SolutionStatement';

import JourneySection from '@/components/home/JourneySection';
import IPORoadmap from '@/components/home/IPORoadmap';
import PlatformClouds from '@/components/home/PlatformClouds';
import FeatureEcosystem from '@/components/home/FeatureEcosystem';
import AdvancedSolutions from '@/components/home/AdvancedSolutions';
import IndustriesSection from '@/components/home/IndustriesSection';
import AISection from '@/components/home/AISection';
import AssessmentSection from '@/components/home/AssessmentSection';
import Testimonials from '@/components/home/Testimonials';
import WhySangoe from '@/components/home/WhySangoe';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionStatement />

      <JourneySection />
      <IPORoadmap />
      <PlatformClouds />
      <FeatureEcosystem />
      <AdvancedSolutions />
      <IndustriesSection />
      <AISection />
      <AssessmentSection />
      <Testimonials />
      <WhySangoe />
      <FinalCTA />
    </main>
  );
}
