import Banner from "../../components/Features/Listings/Banner/Banner";
import HomeBanner from "../../assets/banner-home.webp";
import Listings from "../../components/Features/Listings/Listings/ListingsSection";

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
