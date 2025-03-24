import { NextSeo } from 'next-seo';
import React from "react";
import Navbar from "../components/Navbar";
import AboutUsHeroSection from "../components/AboutUsHeroSection";
import PhilosophySection from "../components/PhilosophySection";
import FounderSection from "../components/FounderSection";
import JoinUsSection from "../components/JoinUsSection";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
const AboutUsPage: React.FC = () => {
  return (
    <div>
      <NextSeo
        title="About [[Brand]] | Datacenter-Hosted GPUs with No Middlemen"
        description="Discover how [[Brand]] offers datacenter-hosted GPUs. AI, ML, and crypto mining."
        openGraph={{
          url: 'https://[[Domain]]/about',
          title: 'About [[Brand]] | Datacenter-Hosted GPUs with No Middlemen',
          description: 'Learn how [[Brand]] offers GPUs.',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: '[[Brand]], datacenter-hosted GPUs, direct GPU rental, no middlemen, AI computing, machine learning, cryptocurrency mining, [[Keywords]]'
          }
        ]}
      />
      <Navbar />
      <div>
        <AboutUsHeroSection />
        <PhilosophySection />
        <FounderSection />
        <JoinUsSection />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
