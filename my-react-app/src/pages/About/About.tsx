import Banner from "../../components/Features/Listings/Banner/Banner";
import AboutBanner from "../../assets/banner-about.webp";
import FAQSection from "../../components/Features/FAQ/FAQSection";

import "./About.scss";

function About() {
  return (
    <>
      <Banner imageUrl={AboutBanner} showOverlay overlayVariant="light" />
      <FAQSection />
    </>
  );
}

export default About;
