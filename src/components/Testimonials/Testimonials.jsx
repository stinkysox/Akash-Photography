import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Import star icon
import "./Testimonials.css";

const testimonials = [
  {
    name: "Chiranjeevi",
    feedback:
      "100% satisfied! Amazing candid pics, committed to delivering more than expected. Experienced crew with top equipment. Highly recommended for capturing good moments!",
  },
  {
    name: "Saketh",
    feedback:
      "Beautiful photos, beautiful candid pics, beautiful prewedding shoot and everything is beautiful.. Thanx for making our memories more more moreee beautiful.",
  },
  {
    name: "Ananya",
    feedback:
      "The photos were absolutely stunning! Every shot captured the essence of the day perfectly. I can't thank you enough for the incredible work. Highly professional and friendly crew!",
  },
  {
    name: "Kiran",
    feedback:
      "A fantastic experience! From the pre-shoot to the final pictures, every moment was captured with care and creativity. The attention to detail was amazing. Highly recommended!",
  },
  {
    name: "Ravi",
    feedback:
      "What an exceptional team! The shoot was fun, and the results were beyond my expectations. Every photo was more beautiful than I could have imagined. Great job!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>
        What our customers say
        <br />
        about us
      </h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* 5 Star Rating */}
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color="#FFD700" size={16} />
              ))}
            </div>

            <p className="feedback">{t.feedback}</p>
            <p className="name">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
