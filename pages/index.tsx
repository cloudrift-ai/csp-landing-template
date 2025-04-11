import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeatureSection from '../components/FeatureSection';
import InstanceTypes from '../components/InstanceTypes';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import GetStartedSection from '@/components/GetStartedSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> GPU Rentals for AI and ML</title>
        <meta name="description" content="Rent high-performance GPUs for AI and ML workloads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main >
        <Navbar />
        <Hero />
        <PricingSection />
        <FeatureSection />
        <InstanceTypes />
        <GetStartedSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
        <Footer />

      </main>
    </>
  );
};

export default Home;