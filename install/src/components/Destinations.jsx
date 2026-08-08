import { useNavigate, Link } from "react-router-dom";

const destinations = [
  {
    name: "Paris, France",
    tagline: "The city of love and lights",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Dubai, UAE",
    tagline: "Luxury beyond imagination",
    price: "$1,500",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  },
  {
    name: "Bali, Indonesia",
    tagline: "Tropical paradise getaway",
    price: "$980",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Rome, Italy",
    tagline: "History at every corner",
    price: "$1,100",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1000&q=80"
  }
];

const Destinations = () => {
  const navigate = useNavigate();

  const handleBookNow = (place) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    navigate('/booking', {
      state: {
        type: 'Destination',
        title: place.name,
        location: place.tagline, // destinations don't have a separate location field
        price: Number(place.price.replace(/[^0-9.]/g, '')), // "$1,200" -> 1200
        image: place.image
      }
    });
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-overlay">
          <span className="hero-eyebrow">✦ Explore The World</span>
          <h1>Top Destinations</h1>
          <p>Carefully selected destinations to give you unforgettable travel experiences around the world.</p>
        </div>

        <div className="reg-hero-badge reg-hero-badge--1">
          <span>🗺️</span>
          <div>
            <strong>{destinations.length}+</strong>
            <small>Curated Destinations</small>
          </div>
        </div>

        <div className="reg-hero-badge reg-hero-badge--2">
          <span>✈️</span>
          <div>
            <strong>50K+</strong>
            <small>Happy Travelers</small>
          </div>
        </div>
      </section>

      {/* ── SECTION HEADING ── */}
      <div className="section-heading-stack" style={{ marginTop: '70px' }}>
        <span className="section-tag">Handpicked For You</span>
        <h2>Where Will You Go Next?</h2>
        <p className="section-heading-sub">
          Every destination on this list is chosen for its scenery, culture, and unforgettable moments — pick one and start planning.
        </p>
      </div>

      <div className="destinations-grid">
        {destinations.map((place, index) => (
          <div className="destination-card" key={index}>
            <div
              className="destination-image"
              style={{ backgroundImage: `url(${place.image})` }}
            ></div>
            <div className="destination-content">
              <h3>{place.name}</h3>
              <p>{place.tagline}</p>
              <span className="price">Starting from {place.price}</span>
              <button className="book-btn" onClick={() => handleBookNow(place)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA — same component used on Home/About/Contact/Registration/API/Login */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-text">
            <h2>Want It All Bundled Together?</h2>
            <p>Explore our all-inclusive packages — hotel, transfers, and activities in one booking.</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/travelpackages" className="primary-btn">Explore Our Packages</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;