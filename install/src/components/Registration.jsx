import RegistrationForm from './RegistrationForm';
import { Link } from "react-router-dom";
import TravelPackages from "./TravelPackages";

function Registration() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="reg-hero">
        <div className="reg-hero-overlay">
          <span className="hero-eyebrow">✦ Free & Easy</span>
          <h1>Start Your<br />Journey Today</h1>
          <p>Join thousands of travelers and start planning smarter.</p>
        </div>
        <div className="reg-hero-badge reg-hero-badge--1">
          <span>✈️</span>
          <div><strong>50K+</strong><small>Happy Travelers</small></div>
        </div>
        <div className="reg-hero-badge reg-hero-badge--2">
          <span>🌍</span>
          <div><strong>120+</strong><small>Destinations</small></div>
        </div>
      </section>

      {/* ── UNIFIED CARD ── */}
      <section className="reg-page">
        <div className="reg-card">

          {/* LEFT: original form */}
          <div className="reg-card-form">
            <RegistrationForm />
          </div>

          {/* RIGHT: info panel */}
          <div className="reg-card-info">
            <div className="reg-card-info-inner">

              <span className="reg-info-tag">WHY JOIN US</span>
              <h2>Everything in your free account</h2>
              <p className="reg-info-sub">
                Join TravelEase for free and unlock a smarter, faster way to plan every trip.
              </p>

              {/* Stats row */}
              <div className="reg-info-stats">
                <div className="reg-info-stat">
                  <strong>50K+</strong>
                  <span>Travelers</span>
                </div>
                <div className="reg-info-stat">
                  <strong>120+</strong>
                  <span>Destinations</span>
                </div>
                <div className="reg-info-stat">
                  <strong>4.9★</strong>
                  <span>Avg Rating</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="reg-benefit-list">
                {[
                  { icon: "🎟️", title: "Exclusive Discounts", desc: "Members-only deals on flights, buses, trains, and car rentals." },
                  { icon: "🗺️", title: "Personalized Trips", desc: "Recommendations tailored to your travel style and history." },
                  { icon: "⚡", title: "Faster Booking", desc: "Save your details once and book in seconds every time." },
                  { icon: "🎧", title: "Priority Support", desc: "Dedicated support for registered members — skip the queue." },
                  { icon: "📦", title: "Saved Itineraries", desc: "All your bookings and trips stored in one place." },
                ].map((b, i) => (
                  <div className="reg-benefit-item" key={i}>
                    <div className="reg-benefit-icon">{b.icon}</div>
                    <div>
                      <strong>{b.title}</strong>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial quote */}
              <div className="reg-info-quote">
                <p>TravelEase made planning my family vacation completely effortless. Signed up in minutes and booked everything in one place!</p>
                <div className="reg-info-quote-author">
                  <div className="reg-info-quote-avatar">A</div>
                  <div className="reg-info-quote-author-info">
                    <strong>Ahmed R.</strong>
                    <small>Dubai · Verified Member</small>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-text">
            <h2>Already have an account?</h2>
            <p>Log in and pick up right where you left off.</p>
          </div>
          <div className="cta-band-actions">
          <Link to="/login" className="primary-btn">
                 Log In
          </Link>
          <Link to="/travelpackages" className="secondary-btn">
                  Explore Packages
          </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;