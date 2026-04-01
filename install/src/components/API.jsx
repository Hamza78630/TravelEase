import Regions from "./Regions";
import { Link } from "react-router-dom";
import Registration from './Registration'
import TravelPackages from "./TravelPackages";

const API = () => {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="api-hero">
        <div className="api-hero-overlay">
          <span className="hero-eyebrow">✦ Powered by REST Countries API</span>
          <h1>Available Countries</h1>
          <p>TravelEase operates across 195+ countries — explore where we can take you.</p>
        </div>
        <div className="reg-hero-badge reg-hero-badge--1">
          <span>🌍</span>
          <div><strong>195+</strong><small>Countries</small></div>
        </div>
        <div className="reg-hero-badge reg-hero-badge--2">
          <span>🗺️</span>
          <div><strong>6</strong><small>Regions</small></div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="about-stats-bar">
        <div className="about-stat">
          <strong>195+</strong>
          <span>Countries Covered</span>
        </div>
        <div className="about-stat-divider" />
        <div className="about-stat">
          <strong>6</strong>
          <span>Global Regions</span>
        </div>
        <div className="about-stat-divider" />
        <div className="about-stat">
          <strong>50K+</strong>
          <span>Happy Travelers</span>
        </div>
        <div className="about-stat-divider" />
        <div className="about-stat">
          <strong>24/7</strong>
          <span>Worldwide Support</span>
        </div>
      </div>

      {/* ── COUNTRIES LIST ── */}
      <section className="api-section">
        <div className="section-heading-stack">
          <span className="section-tag">OUR REACH</span>
          <h2>We Provide Services To These Countries</h2>
          <p className="section-heading-sub">
            Search, filter by region, and find out if we service your destination.
          </p>
        </div>
        <Regions />
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-text">
            <h2>Ready to explore the world?</h2>
            <p>Book your next adventure with TravelEase today.</p>
          </div>
          <div className="cta-band-actions">
          <Link to="/registration" className="primary-btn">
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

export default API;