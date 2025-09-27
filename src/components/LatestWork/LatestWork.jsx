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
  const [loading, setLoading] = useState(true);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const imagesInCategory = initialCategories[activeCategory] || [];

  useEffect(() => {
    setLoading(true);
    setImagesLoadedCount(0);
  }, [activeCategory]);

  const handleImageLoad = () => {
    setImagesLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (
      imagesLoadedCount === imagesInCategory.length &&
      imagesInCategory.length > 0
    ) {
      setLoading(false);
    }
  }, [imagesLoadedCount, imagesInCategory.length]);

  return (
    <div className="latest-work">
      <h2 className="section-title">Our Latest Work</h2>

      {/* Category buttons */}
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

      {/* Loading overlay */}
      {loading && (
        <div className="loading-spinner-overlay">
          <div className="loading-spinner">
            <p>Loading images...</p>
          </div>
        </div>
      )}

      {/* Image grid */}
      <motion.div
        className="image-grid"
        initial="hidden"
        animate="visible"
        key={activeCategory}
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        {imagesInCategory.length ? (
          imagesInCategory.map((imageObj, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={imageObj.imageUrl}
                alt={`${activeCategory} photo ${index + 1}`}
                className="gallery-img"
                onClick={() => setSelectedImage(imageObj.imageUrl)}
                onLoad={handleImageLoad}
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
