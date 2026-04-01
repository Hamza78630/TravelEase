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
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-overlay">
          <span className="hero-eyebrow">✦ Explore The World</span>
          <h1>Top Destinations</h1>
          <p>Carefully selected destinations to give you unforgettable travel experiences around the world.</p>
        </div>
      </section>

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
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Destinations;