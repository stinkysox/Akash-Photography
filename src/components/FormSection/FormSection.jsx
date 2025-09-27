import React, { useState } from "react";
import "./FormSection.css";
import Navbar from "../Navbar/Navbar";

const FormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    message: "",
    social: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello! 👋
I'm ${formData.fullName}.
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Event Date: ${formData.date}
📍 Event Location: ${formData.location}
📝 Message: ${formData.message}
🔗 Social Profile: ${formData.social}

Excited to connect with you!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917795363394?text=${encodedText}`, "_blank");
  };

  return (
    <>
      {/* Navbar stays independent and full width */}
      <Navbar />

      {/* Form section starts below navbar */}
      <div className="form-section">
        <div className="form-container">
          <div className="form-header">
            <h1>Let's Create Something Beautiful</h1>
            <p>Share your vision with us</p>
          </div>

          <form onSubmit={handleSubmit} className="form-fields">
            <div className="form-grid">
              <div className="form-group">
                <input
                  name="fullName"
                  placeholder="Your Full Name"
                  required
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </div>

              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="form-group">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>

              <div className="form-group">
                <input
                  name="date"
                  type="date"
                  placeholder="Event Date"
                  onChange={handleChange}
                  value={formData.date}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                name="location"
                placeholder="Event Location"
                onChange={handleChange}
                value={formData.location}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your vision..."
                onChange={handleChange}
                value={formData.message}
                rows={4}
              />
            </div>

            <div className="form-group">
              <input
                name="social"
                placeholder="Social media profile (optional)"
                onChange={handleChange}
                value={formData.social}
              />
            </div>

            <div className="form-submit">
              <button type="submit">Send via WhatsApp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSection;
