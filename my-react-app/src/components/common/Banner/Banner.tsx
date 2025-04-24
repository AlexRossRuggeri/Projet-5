import "./Banner.scss";

interface BannerProps {
  title?: string;
  imageUrl: string;
  showOverlay?: boolean;
  overlayVariant?: "light" | "dark";
}

const Banner = ({ title, imageUrl, overlayVariant }: BannerProps) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      <div className={`banner__overlay banner__overlay--${overlayVariant}`} />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
};

export default Banner;
