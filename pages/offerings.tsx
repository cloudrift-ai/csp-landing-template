import React from 'react'
import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ConfigurationsSection from '@/components/ConfigurationsSection'

const Offerings = () => {
  return (
    <>
      <Navbar />
      <ConfigurationsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default Offerings;