import { useState } from "react";
import "./Slideshow.scss";

interface SlideshowProps {
  images: string[];
}

function Slideshow({ images }: SlideshowProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
      <img src={images[currentImage]} alt={`Slide ${currentImage}`} />
    </div>
  );
}

export default Slideshow;
