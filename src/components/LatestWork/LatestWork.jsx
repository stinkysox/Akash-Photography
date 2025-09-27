import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { initialCategories } from "../../assets/initialCategories";
import { FaInstagram, FaTimes } from "react-icons/fa";
import "./LatestWork.css";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const LatestWork = () => {
  const categoryKeys = Object.keys(initialCategories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || "");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const imagesInCategory = initialCategories[activeCategory] || [];

  // Reset loaded images when category changes
  useEffect(() => {
    setLoadedImages(new Set());
  }, [activeCategory]);

  const handleImageLoad = (imageUrl) => {
    setLoadedImages((prev) => new Set([...prev, imageUrl]));
  };

  const handleImageError = (imageUrl) => {
    setLoadedImages((prev) => new Set([...prev, imageUrl]));
  };

  return (
    <div className="latest-work">
      <h2 className="section-title">Our Latest Work</h2>

      {/* Category buttons - Remove loading dependency for immediate visual feedback */}
      <div className="category-nav">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              category === activeCategory ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image grid with individual loading states */}
      <motion.div
        className="image-grid"
        initial="hidden"
        animate="visible"
        key={activeCategory}
      >
        {imagesInCategory.length ? (
          imagesInCategory.map((imageObj, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Shimmer placeholder */}
              {!loadedImages.has(imageObj.imageUrl) && (
                <div className="image-placeholder">
                  <div className="shimmer-effect"></div>
                </div>
              )}

              {/* Actual image */}
              <img
                src={imageObj.imageUrl}
                alt={`${activeCategory} photo ${index + 1}`}
                className={`gallery-img ${
                  loadedImages.has(imageObj.imageUrl) ? "loaded" : "loading"
                }`}
                onClick={() => setSelectedImage(imageObj.imageUrl)}
                onLoad={() => handleImageLoad(imageObj.imageUrl)}
                onError={() => handleImageError(imageObj.imageUrl)}
              />
            </motion.div>
          ))
        ) : (
          <motion.div key="empty" variants={itemVariants}>
            <p className="no-images">No images available in this category.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="modal-image"
            />
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Instagram link */}
      <div className="instagram-link">
        <a
          href="https://www.instagram.com/akashphotography.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-btn"
        >
          <FaInstagram />
          <span>Follow us on Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
