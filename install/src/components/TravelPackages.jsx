import { useState } from "react";

const TravelPackages = () => {
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

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-overlay">
          <span className="hero-eyebrow">✦ Curated For You</span>
          <h1>Travel Packages</h1>
          <p>Carefully curated packages designed for comfort, adventure, and unforgettable experiences.</p>
        </div>
      </section>

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
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TravelPackages;