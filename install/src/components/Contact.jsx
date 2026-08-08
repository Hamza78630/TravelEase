import ContactForm from './ContactForm';
import { Link } from "react-router-dom";
import Destinations from './Destinations';
import TravelPackages from "./TravelPackages";

const Contact = () => {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <span className="hero-eyebrow">✦ We're Here to Help</span>
          <h1>Get In Touch</h1>
          <p>Questions, feedback, or booking help — we'd love to hear from you.</p>
        </div>
        <div className="reg-hero-badge reg-hero-badge--1">
          <span>🕐</span>
          <div><strong>8am–11pm</strong><small>Office Hours</small></div>
        </div>
        <div className="reg-hero-badge reg-hero-badge--2">
          <span>🎧</span>
          <div><strong>24/7</strong><small>Online Support</small></div>
        </div>
      </section>

      {/* ── UNIFIED CARD ── */}
      <section className="contact-page">
        <div className="contact-card">

          {/* LEFT: info side */}
          <div className="contact-info-side">

            <span className="reg-info-tag">CONTACT INFO</span>
            <h2>We'd love to hear from you</h2>
            <p className="contact-info-sub">
              Reach out through the form or use any of the contact details below. Our team typically responds within a few hours.
            </p>

            {/* Contact detail cards */}
            <div className="contact-detail-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <strong>Office Address</strong>
                  <span>DHA Phase 8, Lahore, Pakistan</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">🕐</div>
                <div>
                  <strong>Office Hours</strong>
                  <span>Monday – Sunday, 8am – 11pm</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📧</div>
                <div>
                  <strong>Email Us</strong>
                  <span>support@travelease.com</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <strong>Call Us</strong>
                  <span>+92 300 123 4567</span>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div className="contact-response-badge">
              <span>⚡</span>
              <div>
                <strong>Quick Response Guaranteed</strong>
                <p>We typically reply within 2–4 hours during office hours.</p>
              </div>
            </div>

            {/* Social links */}
            <div className="contact-socials">
              <span className="contact-socials-label">Follow Us</span>
              <div className="contact-social-icons">
                {["📘 Facebook", "📸 Instagram", "🐦 Twitter", "💼 LinkedIn"].map((s, i) => (
                  <span key={i} className="contact-social-chip">{s}</span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: form */}
          <div className="contact-form-side">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-text">
            <h2>Ready to start your journey?</h2>
            <p>Book your next adventure with TravelEase today.</p>
          </div>
          <div className="cta-band-actions">
          <Link to="/destinations" className="primary-btn">
                 Start Booking
          </Link>
          <Link to="/travelpackages" className="secondary-btn">
                  View Packages
          </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;