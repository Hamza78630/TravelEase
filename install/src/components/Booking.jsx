import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  // No item data means someone landed here directly (typed URL, refreshed) — nothing to book
  if (!state) {
    return (
      <div className="api-section">
        <div className="countries-error" style={{ maxWidth: '600px', margin: '0 auto' }}>
          ⚠️ No booking selected.{' '}
          <Link to="/destinations" style={{ color: '#b91c1c', textDecoration: 'underline' }}>
            Browse packages
          </Link>
        </div>
      </div>
    );
  }

  const { type, title, location, price, duration, inclusions, image } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('https://traveleasebackend-dn0ivp9p.b4a.run/bookings/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          bookingType: type,
          title,
          location,
          price,
          image,
          duration,
          inclusions,
          travelDate,
          travelers: Number(travelers)
        })
      });

      const data = await res.json();

      if (data.status === "ERROR") {
        throw new Error(data.message);
      }

      setConfirmed(true);
      setTimeout(() => navigate('/profile'), 1800);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (confirmed) {
    return (
      <div className="booking-confirmed-wrap">
        <div className="booking-confirmed-check">✓</div>
        <h2>Booking Confirmed</h2>
        <p>Taking you to your profile...</p>
      </div>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-overlay">
          <span className="hero-eyebrow">✦ Almost There</span>
          <h1>Confirm Your Booking</h1>
          <p>Just a couple of details and you're set.</p>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-layout">

          {/* Summary of what's being booked */}
          <div className="booking-summary-card">
            {image && <div className="booking-summary-image" style={{ backgroundImage: `url(${image})` }} />}
            <div className="booking-summary-body">
              <span className="booking-type-tag">{type}</span>
              <h2>{title}</h2>
              <p className="booking-summary-location">📍 {location}</p>

              {duration && <p className="booking-summary-line"><strong>Duration:</strong> {duration}</p>}

              {inclusions && inclusions.length > 0 && (
                <ul className="booking-summary-inclusions">
                  {inclusions.map((item, i) => <li key={i}>✓ {item}</li>)}
                </ul>
              )}

              <div className="booking-summary-price">${price}<span>/ person</span></div>
            </div>
          </div>

          {/* Booking details form */}
          <div className="form-container booking-form-container">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Trip Details</legend>

                {error && <p className="countries-error">⚠️ {error}</p>}

                <table>
                  <tbody>
                    <tr>
                      <td>Travel Date:</td>
                      <td>
                        <input
                          type="date"
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          required
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Travelers:</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          value={travelers}
                          onChange={(e) => setTravelers(e.target.value)}
                          required
                        />
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="2" align="center">
                        <input
                          type="submit"
                          value={loading ? "Booking..." : `Confirm Booking — $${price * travelers}`}
                          disabled={loading}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Booking;