import Banner from "../../components/logements/banner/Banner";
import AboutBanner from "../../assets/banner-about.webp";

function About() {
  return (
    <>
      <Banner imageUrl={AboutBanner} showOverlay overlayVariant="light" />
    </>
  );
}

export default About;
