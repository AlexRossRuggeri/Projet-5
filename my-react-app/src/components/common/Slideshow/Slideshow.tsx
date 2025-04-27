import { useState } from "react";
import "./Slideshow.scss";

interface SlideshowProps {
  images: string[];
}

function Slideshow({ images }: SlideshowProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

  const nextSlide = () => {
    setFadeState("fade-out");
    setTimeout(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFadeState("fade-in");
    }, 300);
  };

  const prevSlide = () => {
    setFadeState("fade-out");
    setTimeout(() => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFadeState("fade-in");
    }, 300);
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="arrow left">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button onClick={nextSlide} className="arrow right">
            <i className="fa-solid fa-chevron-right" />
          </button>
          <div className="slide-count">{`${currentImage + 1}/${
            images.length
          }`}</div>
        </>
      )}
      <img
        className={`slideshow__picture ${fadeState}`}
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
      />
    </div>
  );
}

export default Slideshow;
