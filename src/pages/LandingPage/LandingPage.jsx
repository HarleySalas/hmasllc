import React from "react";

import Header from "../../components/Header/Header.jsx";

import HeroSection from "../../sections/HeroSection/HeroSection.jsx";
import MissionSection from "../../sections/MissionSection/MissionSection.jsx";
import ServicesSection from "../../sections/ServicesSection/ServicesSection.jsx";
import AboutSection from "../../sections/AboutSection/AboutSection.jsx";
import BlogSection from "../../sections/BlogSection/BlogSection.jsx";
import MailingSection from "../../sections/MailingSection/MailingSection.jsx";
import ContactSection from "../../sections/ContactSection/ContactSection.jsx";

const LandingPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <MailingSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
