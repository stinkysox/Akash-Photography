import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { marqueeImages } from "../../assets/marqueeImages";
import "./MarqueeImages.css";

// Component to handle lazy image + placeholder
const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      {!loaded && <div className="image-placeholder" />} {/* Placeholder */}
      <img
        className={`marquee-img ${loaded ? "visible" : "hidden"}`}
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const MarqueeImages = () => {
  const rightImages = marqueeImages["Right Images"];
  const leftImages = marqueeImages["Left Images"];

  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return null;

    return imagesArray.map((imgObj, idx) => (
      <LazyImage
        key={`${direction}-${idx}`}
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
