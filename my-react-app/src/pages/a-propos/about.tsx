import Banner from "../../components/logements/banner/Banner";
import AboutBanner from "../../assets/banner-about.webp";

import "./About.scss";

function About() {
  return (
    <main className="about">
      <Banner imageUrl={AboutBanner} showOverlay overlayVariant="light" />
    </main>
  );
}

export default About;
