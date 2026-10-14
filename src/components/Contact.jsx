import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">04 // Connect</div>
          <h2 className="section-title">Initiate Contact</h2>
          <p className="section-subtitle">
            Whether you are discussing open data roles, backend engineering opportunities, or collaborative projects—let's build together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info Channels */}
          <div className="contact-info-col">
            <p className="contact-lead">
              I am actively interviewing for <strong>Data Analyst</strong>, <strong>Data Engineer</strong>, and <strong>Python / Backend Developer</strong> roles.
            </p>

            <div className="contact-channels">
              <a href="mailto:haythamreeza31@gmail.com" className="contact-channel-item">
                <MailIcon className="channel-icon" />
                <div className="channel-details">
                  <span className="channel-label">Email Address</span>
                  <span className="channel-value">haythamreeza31@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917358489747" className="contact-channel-item">
                <PhoneIcon className="channel-icon" />
                <div className="channel-details">
                  <span className="channel-label">Direct Phone</span>
                  <span className="channel-value">+91 7358489747</span>
                </div>
              </a>

              <div className="contact-channel-item">
                <MapPinIcon className="channel-icon" />
                <div className="channel-details">
                  <span className="channel-label">Current Location</span>
                  <span className="channel-value">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem', padding: '1rem', background: '#111', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--accent-cyan)', marginBottom: '0.35rem' }}>
                RESPONSE_SLA: &lt; 24_HOURS
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Direct inquiries and recruiter outreach will receive prompt confirmation.
              </div>
            </div>
          </div>

          {/* Right: Working Minimalist Contact Form */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div className="form-success-banner">
                <div className="success-icon-wrap">
                  <CheckCircleIcon size={28} />
                </div>
                <h3 className="success-title">Message Transmitted</h3>
                <p className="success-text">
                  Thank you, <strong>{formData.name}</strong>. Your dispatch has been received. Haytham will get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  className="btn btn-secondary btn-sm" 
                  onClick={handleReset}
                  type="button"
                  style={{ marginTop: '0.75rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <span>Full Name *</span>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span>Email Address *</span>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <span>Project or Role Details *</span>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, technical challenge, or project scope..."
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRightIcon size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
