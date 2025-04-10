import Banner from "../../components/logements/banner/Banner";
import HomeBanner from "../../assets/banner-home.webp";
import Listings from "../../components/logements/listings/Listings";

import "./Home.scss";

function Home() {
  return (
    <>
      <Banner
        title="Chez vous, partout et ailleurs"
        imageUrl={HomeBanner}
        showOverlay
        overlayVariant="dark"
      />
      <Listings />
    </>
  );
}

export default Home;
