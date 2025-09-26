import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { initialCategories } from "../../assets/initialCategories";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";

// Subtle animation configurations
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

  // Reset loading when category changes
  useEffect(() => {
    setLoading(true);
    setImagesLoadedCount(0);
  }, [activeCategory]);

  // Handle image loaded
  const handleImageLoad = () => {
    setImagesLoadedCount((prev) => prev + 1);
  };

  // Once all images loaded, stop loading
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
      <h2>Our Latest Work</h2>

      {/* Category buttons */}
      <div className="category-buttons">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading spinner overlay */}
      {loading && (
        <div className="loading-spinner-overlay">
          <div className="loading-spinner">
            <p>Loading images...</p>
          </div>
        </div>
      )}

      {/* Image Grid */}
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
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              style={{ overflow: "hidden" }}
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
        <motion.div
          className="modal"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged view"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="modal-image"
          />
          <button
            className="modal-close-btn"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </motion.div>
      )}

      {/* Instagram link */}
      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/akashphotography.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
