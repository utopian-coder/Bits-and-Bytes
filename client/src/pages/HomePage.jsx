import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Courses />
      <Footer />
    </>
  );
};

export default HomePage;
