import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MarqueeImages from "../../components/MarqueeImages/MarqueeImages";
import StatsCounter from "../../components/StatsCounter/StatsCounter";
import OurServices from "../../components/OurServices/OurServices";
import TeasersSection from "../../components/TeasersSection/TeasersSection";
import LatestWork from "../../components/LatestWork/LatestWork";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
const Home = () => {
  return (
    <section className="home-container">
      <Navbar />
      <Banner />
      <MarqueeImages />
      <StatsCounter />
      <OurServices />
      <LatestWork />
      <TeasersSection />
      <Testimonials />
      <ContactSection />
      <Footer />
      <ScrollButton />
    </section>
  );
};

export default Home;
