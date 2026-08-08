import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TravelPackages = () => {
  const navigate = useNavigate();

  const [packages] = useState([
    {
      title: "Paris Getaway",
      duration: "5 Days / 4 Nights",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      features: ["Hotel Accommodation", "City Tours", "Airport Transfers"],
    },
    {
      title: "Dubai Luxury Tour",
      duration: "4 Days / 3 Nights",
      price: "$950",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      features: ["Luxury Hotel", "Desert Safari", "Burj Khalifa Visit"],
    },
    {
      title: "Istanbul Cultural Tour",
      duration: "6 Days / 5 Nights",
      price: "$1,050",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80",
      features: ["Historical Tours", "Bosphorus Cruise", "Local Guide"],
    },
  ]);

  const handleBookNow = (pkg) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    navigate('/booking', {
      state: {
        type: 'Package',
        title: pkg.title,
        location: pkg.title, // packages don't have a separate location field
        price: Number(pkg.price.replace(/[^0-9.]/g, '')), // "$1,200" -> 1200
        duration: pkg.duration,
        inclusions: pkg.features,
        image: pkg.image
      }
    });
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-overlay">
          <span className="hero-eyebrow">✦ Curated For You</span>
          <h1>Travel Packages</h1>
          <p>Carefully curated packages designed for comfort, adventure, and unforgettable experiences.</p>
        </div>

        <div className="reg-hero-badge reg-hero-badge--1">
          <span>🎒</span>
          <div>
            <strong>{packages.length}+</strong>
            <small>All-Inclusive Packages</small>
          </div>
        </div>

        <div className="reg-hero-badge reg-hero-badge--2">
          <span>⭐</span>
          <div>
            <strong>4.9/5</strong>
            <small>Traveler Rating</small>
          </div>
        </div>
      </section>

      {/* ── SECTION HEADING ── */}
      <div className="section-heading-stack" style={{ marginTop: '70px' }}>
        <span className="section-tag">All-Inclusive Deals</span>
        <h2>Packages Built to Make Planning Easy</h2>
        <p className="section-heading-sub">
          Hotel, transfers, and activities — bundled together so all you have to think about is showing up.
        </p>
      </div>

      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <img src={pkg.image} alt={pkg.title} />
            <h3>{pkg.title}</h3>
            <p>{pkg.duration}</p>
            <ul>
              {pkg.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <span className="price">{pkg.price}</span>
            <button onClick={() => handleBookNow(pkg)}>Book Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TravelPackages;