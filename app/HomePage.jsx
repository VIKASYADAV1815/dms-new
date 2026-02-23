'use client';

import {
  NavBar,
  HeroSection,
  StatisticsSection,
  InsightSection, // Import the correct name here
  FeaturesSection,
  CTASection,
  TestimonialsSection,
  FooterSection,
} from '../components/HomePage';

import WhatWeDo from '../components/whatWeDo';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StatisticsSection />
      
      {/* Placing this right after statistics to follow 
        the logical flow of: Data -> Insight -> Action 
      */}
      <InsightSection /> 
      
      <WhatWeDo />
      <FeaturesSection />
      <CTASection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}