import { Link } from "react-router-dom";
import Registration from './Registration'
import TravelPackages from "./TravelPackages";

const Home = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-eyebrow">✈ Your Journey Starts Here</span>
            <h1>Travel Smarter.<br />Travel Easier.</h1>
            <p>Book flights, buses, trains, and car rentals — all in one seamless platform.</p>
            <div className="hero-buttons">
            <Link to="/registration" className="primary-btn">
  Start Booking
</Link>
<Link to="/travelpackages" className="secondary-btn">
  Explore Packages
</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>50K+</strong><span>Happy Travelers</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><strong>120+</strong><span>Destinations</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><strong>4.9★</strong><span>Avg. Rating</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCROLLING TRUST BAND ── */}
      <div className="trust-band">
        <div className="trust-band-track">
          {["Emirates", "Qatar Airways", "Turkish Airlines", "Lufthansa", "Singapore Airlines",
            "Emirates", "Qatar Airways", "Turkish Airlines", "Lufthansa", "Singapore Airlines"].map((name, i) => (
            <span key={i} className="trust-band-item">✦ {name}</span>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
<section className="intro-section">
  <div className="intro-inner">
    <div className="intro-badge">OUR MISSION</div>
    <h2>One Platform. Every Journey.</h2>
    <p>TravelEase brings together the world's best transport providers into one powerful booking platform — so planning your journey is as exciting as the trip itself.</p>
    <Link to="/destinations" className="destinations-btn">
      Explore Destinations
    </Link>
  </div>
</section>

      {/* ── WHY CHOOSE US ── */}
      <div className="why-section">
        <div className="why-header">
          <span className="why-tag">OUR PROMISE</span>
          <h2>Why Choose TravelEase?</h2>
          <p>We believe traveling should be simple, affordable, and enjoyable. Our platform brings everything together — so you can focus on the adventure.</p>
        </div>
        <div className="why-cards">
          {[
            { icon: "✈️", title: "All-in-One Platform", desc: "Flights, hotels, buses, trains and car rentals — all booked in one place." },
            { icon: "💰", title: "Best Price Guarantee", desc: "We partner with providers to ensure competitive pricing every time." },
            { icon: "🛡️", title: "Safe & Trusted", desc: "Every service is vetted so you can travel with complete confidence." },
            { icon: "🎧", title: "24/7 Support", desc: "We're here before, during, and after your journey." },
          ].map((card, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TRANSPORT SERVICES ── */}
      <section className="transport-section">
        <div className="section-heading-stack">
          <span className="section-tag">Transport</span>
          <h2>Travel in Comfort &amp; Style</h2>
          <p className="section-heading-sub">Choose from our premium transport options designed for safety and convenience.</p>
        </div>
        <div className="home-cards-grid">
          {[
            { img: "images/bus.jpg", alt: "Luxury Bus", title: "Luxury Buses", desc: "Spacious seating, air conditioning, and professional drivers for group travel." },
            { img: "images/train.jpg", alt: "Train Service", title: "Train Services", desc: "Scenic and budget-friendly railway journeys with comfortable seating and safe travel." },
            { img: "images/car.jpg", alt: "Private Cars", title: "Private Cars", desc: "Personalized travel experience with flexible schedules and privacy." },
            { img: "images/airline.jpg", alt: "Airline Service", title: "Airline Services", desc: "Fast and convenient air travel options connecting major cities with comfort and reliability." },
          ].map((card, i) => (
            <div className="home-card" key={i}>
              <img src={card.img} alt={card.alt} />
              <div className="home-card-content">
                <div><h3>{card.title}</h3><p>{card.desc}</p></div>
                <button className="home-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER VIDEO ── */}
      <div className="founder-section">
        <div className="founder-label">FROM THE FOUNDER</div>
        <h2 className="founder-heading">The Story Behind TravelEase</h2>
        <p className="founder-sub">Watch how it all began and what drives our passion for travel.</p>
        <div className="founder-video-wrapper">
          <iframe src="https://www.youtube.com/embed/Xj4E0Zry6K4" allowFullScreen title="Founder Message" />
        </div>
      </div>

      {/* ── CEO AUDIO ── */}
      <div className="ceo-audio-section">
        <div className="ceo-audio-inner">
          <div className="ceo-audio-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10 8.5C10 7.67 10.67 7 11.5 7h1C13.33 7 14 7.67 14 8.5v7c0 .83-.67 1.5-1.5 1.5h-1C10.67 17 10 16.33 10 15.5v-7z" fill="currentColor"/>
              <path d="M8 10v4M16 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="ceo-audio-text">
            <span className="ceo-audio-tag">AUDIO MESSAGE</span>
            <h3>A Word From Our CEO</h3>
            <p>Hear directly about our mission and commitment to seamless travel.</p>
          </div>
          <div className="ceo-audio-player">
            <audio controls>
              <source src="/audios/audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>

      {/* ── REVIEWS ── */}
      <section className="reviews-section">
        <div className="section-heading-stack">
          <span className="section-tag">TESTIMONIALS</span>
          <h2>What Our Travelers Say</h2>
          <p className="section-heading-sub">Real experiences from people who explored with TravelEase.</p>
        </div>
        <div className="reviews-grid">
          {[
            { stars: "★★★★★", text: "TravelEase made planning my family vacation completely effortless. Booked everything in minutes!", name: "Ahmed R.", location: "Dubai", initial: "A" },
            { stars: "★★★★☆", text: "Great airline and hotel booking experience. The interface is so clean and easy to navigate.", name: "Sara K.", location: "Lahore", initial: "S" },
            { stars: "★★★★★", text: "Excellent customer support and amazing packages! Will definitely use TravelEase for every trip.", name: "Ali M.", location: "Karachi", initial: "A" },
          ].map((r, i) => (
            <div className="review-card-modern" key={i}>
              <div className="review-stars">{r.stars}</div>
              <p>"{r.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div className="review-author-info">
                  <strong>{r.name}</strong>
                  <small>{r.location}</small>
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

export default Home;