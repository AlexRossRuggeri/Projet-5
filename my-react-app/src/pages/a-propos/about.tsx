import Banner from "../../components/logements/banner/Banner";
import AboutBanner from "../../assets/banner-about.webp";
import FAQSection from "../../components/FAQ/FAQSection";

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
