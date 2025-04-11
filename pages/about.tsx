import React from 'react'
import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'
import WhyUsSection from '@/components/WhyUsSection'
import AboutHeroSection from '@/components/AboutHeroSection'
import PhilosophySection from '@/components/PhilosophySection'

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <PhilosophySection />
      <TeamSection />
      <WhyUsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default About;