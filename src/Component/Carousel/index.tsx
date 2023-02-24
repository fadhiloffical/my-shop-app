import { useState } from "react";
import "./index.css";

type Item = {
    id: number;
    image: string;
}

type CustomCarouselProps = {
  items: Item[];
};

const CustomCarousel = ({ items }: CustomCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <div className="custom-carousel">
      <button className="prev-button" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item?.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <button className="next-button" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
