import React from 'react'
import Header from '../components/landingPage/Header'
import HeroSection from '../components/landingPage/HeroSection'
import StatsStrip from '../components/landingPage/StatsStrip'
import FeaturesSection from '../components/landingPage/FeaturesSection'
import HowItWorks from '../components/landingPage/HowItWorks'
import AiHighlight from '../components/landingPage/AiHighlight'
import ScreenPreview from '../components/landingPage/ScreenPreview'
import Testmonial from '../components/landingPage/Testimonial'
import FinAiCTA from '../components/landingPage/FinAiCTA'
import Footer from '../components/landingPage/Footer'

function LandingPage() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <StatsStrip/>
      <FeaturesSection/>
      <HowItWorks/>
      <AiHighlight/>
      <ScreenPreview/>
      <Testmonial/>
      <FinAiCTA/>
      <Footer/>
    </>
  )
}

export default LandingPage