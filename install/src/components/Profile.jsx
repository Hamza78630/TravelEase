import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const [profileRes, bookingsRes] = await Promise.all([
          fetch('travelease-production-eec5.up.railway.app/users/profile', {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch('travelease-production-eec5.up.railway.app/bookings/mine', {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        const profileData = await profileRes.json();
        const bookingsData = await bookingsRes.json();

        if (profileData.status === "ERROR") {
          throw new Error(profileData.message);
        }

        setUser(profileData.profile);
        setBookings(bookingsData.bookings || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    try {
      await fetch('travelease-production-eec5.up.railway.app/users/logout', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
    } catch (err) {
      // logout should proceed locally even if the request fails
    }
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const handleCancel = async (bookingId) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`travelease-production-eec5.up.railway.app/bookings/cancel/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.status === "ERROR") throw new Error(data.message);

      setBookings(prev =>
        prev.map(b => b.bookingId === bookingId ? { ...b, status: 'Cancelled' } : b)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '—';

  const initials = user
    ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase()
    : '';

  const passengerId = user?.userId
    ? `TE-${String(user.userId).padStart(6, '0')}`
    : '—';

  // Live stats derived from actual bookings
  const activeBookings = bookings.filter(b => b.status !== 'Cancelled');
  const destinationsVisited = new Set(activeBookings.map(b => b.location)).size;
  const tier = activeBookings.length >= 5 ? 'Voyager' : activeBookings.length >= 1 ? 'Explorer' : 'Newcomer';

  if (loading) {
    return (
      <div className="countries-loading" style={{ padding: '120px 20px' }}>
        <div className="countries-spinner"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api-section">
        <div className="countries-error" style={{ maxWidth: '600px', margin: '0 auto' }}>
          ⚠️ {error}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay">
          <span className="hero-eyebrow">✦ My Account</span>
          <h1>Your Travel Pass</h1>
          <p>Everything about your TravelEase account, in one place.</p>
        </div>
      </section>

      <section className="profile-section">

        {/* Boarding-pass style ID card */}
        <div className="boarding-pass">
          <div className="boarding-pass-main">
            <div className="boarding-pass-topline">
              <span className="boarding-pass-brand">✈ TravelEase</span>
              <span className="boarding-pass-label">Traveler Pass</span>
            </div>

            <div className="boarding-pass-body">
              <div className="boarding-pass-avatar">{initials || '—'}</div>

              <div className="boarding-pass-info">
                <span className="boarding-pass-field-label">Passenger</span>
                <h2>{user ? `${user.firstName} ${user.lastName}` : '—'}</h2>

                <div className="boarding-pass-detail-row">
                  <div>
                    <span className="boarding-pass-field-label">Email</span>
                    <p>{user?.email || '—'}</p>
                  </div>
                  <div>
                    <span className="boarding-pass-field-label">Contact</span>
                    <p>{user?.contactNo || '—'}</p>
                  </div>
                </div>

                <div className="boarding-pass-detail-row">
                  <div>
                    <span className="boarding-pass-field-label">Gender</span>
                    <p>{user?.gender || '—'}</p>
                  </div>
                  <div>
                    <span className="boarding-pass-field-label">Age</span>
                    <p>{user?.age || '—'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="boarding-pass-perforation">
            {Array.from({ length: 22 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>

          <div className="boarding-pass-stub">
            <span className="boarding-pass-field-label">Passenger ID</span>
            <strong>{passengerId}</strong>

            <span className="boarding-pass-field-label" style={{ marginTop: '18px' }}>Member Since</span>
            <strong>{memberSince}</strong>

            <div className="boarding-pass-barcode">
              {Array.from({ length: 28 }).map((_, i) => (
                <span key={i} style={{ height: `${20 + ((i * 37) % 26)}px` }}></span>
              ))}
            </div>
          </div>
        </div>

        {/* Live stats */}
        <div className="reg-info-stats profile-stats">
          <div className="reg-info-stat">
            <strong>{activeBookings.length}</strong>
            <span>Bookings</span>
          </div>
          <div className="reg-info-stat">
            <strong>{destinationsVisited}</strong>
            <span>Destinations Visited</span>
          </div>
          <div className="reg-info-stat">
            <strong>{tier}</strong>
            <span>Traveler Tier</span>
          </div>
        </div>

        {/* Bookings list / empty state */}
        {bookings.length === 0 ? (
          <div className="profile-bookings-card">
            <div className="section-tag" style={{ marginBottom: '8px' }}>Your Trips</div>
            <h2 style={{ textAlign: 'left', color: '#0a1f44', margin: '0 0 8px' }}>No bookings yet</h2>
            <p style={{ textAlign: 'left', color: '#6b80a0', marginBottom: '24px' }}>
              Once you book a package, it'll show up here — ready to track, revisit, or manage.
            </p>
            <Link to="/travelpackages" className="primary-btn">Start Booking</Link>
          </div>
        ) : (
          <div className="profile-trips-wrap">
            <div className="profile-trips-header">
              <div>
                <div className="section-tag" style={{ marginBottom: '8px' }}>Your Trips</div>
                <h2 style={{ textAlign: 'left', color: '#0a1f44', margin: 0 }}>
                  {bookings.length} {bookings.length === 1 ? 'Trip' : 'Trips'}
                </h2>
              </div>
              <Link to="/destinations" className="primary-btn">Book Another Trip</Link>
            </div>

            <div className="profile-trips-list">
              {bookings.map((b) => (
                <div className="profile-trip-card" key={b.bookingId}>
                  {b.image && (
                    <div className="profile-trip-image" style={{ backgroundImage: `url(${b.image})` }} />
                  )}
                  <div className="profile-trip-body">
                    <div className="profile-trip-top">
                      <span className="booking-type-tag">{b.bookingType}</span>
                      <span className={`profile-trip-status profile-trip-status--${b.status.toLowerCase()}`}>
                        {b.status}
                      </span>
                    </div>
                    <h3>{b.title}</h3>
                    <p className="profile-trip-location">📍 {b.location}</p>
                    <p className="profile-trip-date">
                      🗓 {new Date(b.travelDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      {' · '}{b.travelers} {b.travelers === 1 ? 'traveler' : 'travelers'}
                    </p>
                    <div className="profile-trip-bottom">
                      <span className="profile-trip-price">${b.price * b.travelers}</span>
                      {b.status !== 'Cancelled' && (
                        <button className="profile-trip-cancel" onClick={() => handleCancel(b.bookingId)}>
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Logout */}
        <div className="profile-logout-row">
          <button className="profile-logout-btn" onClick={handleLogout}>Log Out</button>
        </div>

      </section>
    </>
  );
};

export default Profile;