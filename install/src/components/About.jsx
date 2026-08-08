import { Link } from "react-router-dom";
import Destinations from "./Destinations";
import TravelPackages from "./TravelPackages";

const About = () => {
  const team = [
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      name: "Ali Khan",
      role: "CEO & Founder",
      desc: "Founder of TravelEase, passionate about creating smooth travel experiences for everyone.",
      initial: "A",
    },
    {
      img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=800&q=80",
      name: "Sara Ahmed",
      role: "Marketing Head",
      desc: "Leads marketing campaigns and partnerships to expand TravelEase's reach.",
      initial: "S",
    },
    {
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
      name: "Ahmed Raza",
      role: "Customer Support Manager",
      desc: "Ensures travelers get help 24/7 and have hassle-free journeys.",
      initial: "A",
    },
    {
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      name: "Bilal Shah",
      role: "Web Developer",
      desc: "Designs and maintains the TravelEase website for a smooth user experience.",
      initial: "B",
    },
  ];

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <span className="hero-eyebrow">✦ Est. 2022</span>
          <h1>Who We Are</h1>
          <p>A team driven by passion for travel, built to make every journey effortless.</p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="about-stats-bar">
        <div className="about-stat">
          <strong>2022</strong>
          <span>Year Founded</span>
        </div>
        <div className="about-stat-divider" />
        <div className="about-stat">
          <strong>50K+</strong>
          <span>Happy Travelers</span>
        </div>
        <div className="about-stat-divider" />
        <div className="about-stat">
          <strong>120+</strong>
          <span>Destinations</span>
        </div>
        <div className="about-stat-divider" />
        <div className="about-stat">
          <strong>24/7</strong>
          <span>Customer Support</span>
        </div>
      </div>

      {/* ── HISTORY & MISSION ── */}
      <section className="about-story-section">
        <div className="about-story-grid">
          <div className="about-story-card">
            <div className="about-story-icon">🧭</div>
            <span className="section-tag">OUR HISTORY</span>
            <h2>How It All Began</h2>
            <p>
              TravelEase was founded in 2022 with the goal of making travel planning simple
              and stress-free for everyone. What started as a small project connecting travelers
              with local transport services quickly grew into a full-fledged platform offering
              airline bookings, hotel reservations, guided tours, and more. Over the years,
              TravelEase has helped thousands of travelers explore new destinations, discover
              hidden gems, and enjoy safe, memorable journeys.
            </p>
          </div>

          <div className="about-story-card about-story-card--accent">
            <div className="about-story-icon">🎯</div>
            <span className="section-tag about-section-tag--light">OUR MISSION</span>
            <h2>What Drives Us</h2>
            <p>
              At TravelEase, our mission is to make traveling simple, affordable, and enjoyable
              for everyone. We aim to connect travelers with trusted transport services, reliable
              accommodations, and expert local guides — so every journey is smooth, safe, and
              truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="about-team-section">
        <div className="section-heading-stack">
          <span className="section-tag">THE PEOPLE</span>
          <h2>Meet The Team</h2>
          <p className="section-heading-sub">
            The passionate individuals behind every seamless journey.
          </p>
        </div>

        <div className="about-team-grid">
  {team.map((member, i) => (
    <div className="about-team-card" key={i}>
      <div className="about-team-img-wrap">
        <img src={member.img} alt={member.name} />
        <div className="about-team-img-overlay"></div>
        <div className="about-team-initial">{member.initial}</div>
      </div>

      <div className="about-team-info">
        <span className="about-team-role">{member.role}</span>
        <h3>{member.name}</h3>
        <p>{member.desc}</p>

        <div className="about-team-footer">
          <span className="about-team-link">View Profile</span>
        </div>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-text">
            <h2>Ready to explore the world?</h2>
            <p>Join thousands of happy travelers. Book your next adventure today.</p>
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

export default About;