import React from "react";
import { useNavigate } from "react-router-dom";
import { env } from "../../config/env.local";
import HeroSection from "./sub/HeroSection";
import CourseCategories from "./sub/CourseCategories";
import StatsBar from "./sub/StatsBar";
import AboutSection from "./sub/AboutSection";
import UIHorizontalFloatingImage from "../../components/ui/elements/UIHorizontalFloatingImage";
import CourseGridSection from "./sub/CourseGridSection";
import ContactInfoSection from "./sub/ContactInfoSection";
import PartnerSection from "./sub/PartnerSection";
import TestimonialSlider from "./sub/TestimonialSlider";
import InstructorGridSection from "./sub/InstructorGridSection";
import LatestBlogSection from "./sub/LatestBlogSection";
import CallToActionBanner from "./sub/CallToActionBanner";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background font-poppins flex flex-col justify-center items-center text-center">
      <HeroSection />
      <CourseCategories/>
      <StatsBar/>
      <AboutSection/>
      <UIHorizontalFloatingImage
        src=""
        className="z-0"
      />
      <CourseGridSection/>
      <ContactInfoSection/>
      <PartnerSection/>
      <TestimonialSlider/>
      <InstructorGridSection/>
      <LatestBlogSection/>
      <CallToActionBanner/>
    </main>
  );
};

export default HomePage;
