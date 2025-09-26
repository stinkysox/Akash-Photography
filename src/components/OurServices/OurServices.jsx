import React, { useState } from "react";
import { motion } from "framer-motion";
import "./OurServices.css";

const services = [
  {
    title: "Wedding Photography",
    image: "https://i.postimg.cc/x8W094LY/image00021.jpg",
  },
  {
    title: "Pre-wedding Photography",
    image: "https://i.postimg.cc/Jh1R7JHy/image00008.jpg",
  },
  {
    title: "Haldi Photography",
    image: "https://i.postimg.cc/Y0gSL7rj/image00022.jpg",
  },
];

const OurServices = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({}); // ✅ Track image load state

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="our-services" id="services">
      <p className="subheading">OUR SERVICES</p>
      <h2 className="main-heading">
        Where every <span>picture</span> <br /> tells a story
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* ✅ Placeholder while image loads */}
            {!loadedImages[index] && <div className="image-placeholder"></div>}

            <img
              src={service.image}
              alt={service.title}
              onClick={() => toggleZoom(index)}
              onLoad={() => handleImageLoad(index)} // ✅ mark image as loaded
              className={`${zoomedIndex === index ? "zoomed" : ""} ${
                loadedImages[index] ? "visible" : "hidden"
              }`}
            />
            <p>{service.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
