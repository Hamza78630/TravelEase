import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Destinations from './Destinations';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    pass: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('travelease-production-eec5.up.railway.app/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.pass
        })
      });

      const data = await res.json();

      if (data.status === "ERROR") {
        throw new Error(data.message);
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.userId);

      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero — reuses the same badge/eyebrow pattern as Registration */}
      <section className="reg-hero">
        <div className="reg-hero-overlay">
          <span className="hero-eyebrow">✦ Welcome Back</span>
          <h1>Continue Your Journey</h1>
          <p>Log in to manage your bookings and pick up right where you left off.</p>
        </div>

        <div className="reg-hero-badge reg-hero-badge--1">
          <span>✈️</span>
          <div>
            <strong>50K+</strong>
            <small>Happy Travelers</small>
          </div>
        </div>

        <div className="reg-hero-badge reg-hero-badge--2">
          <span>🌍</span>
          <div>
            <strong>120+</strong>
            <small>Destinations</small>
          </div>
        </div>
      </section>

      {/* Two-column card — form + info panel, same structure as Registration */}
      <div className="reg-page">
        <div className="reg-card">

          <div className="reg-card-form">
            <div className="form-container">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
                <fieldset style={{ display: 'flex', flexDirection: 'column', flex: 1, boxSizing: 'border-box' }}>
                  <legend>Login</legend>

                  {error && (
                    <p className="countries-error">⚠️ {error}</p>
                  )}

                  <table style={{ flex: 1, height: '100%' }}>
                    <tbody style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: '28px' }}>

                      <tr style={{ display: 'block' }}>
                        <td style={{ display: 'block', marginBottom: '10px' }}>Email Address:</td>
                        <td style={{ display: 'block' }}>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '14px 12px' }} />
                        </td>
                      </tr>

                      <tr style={{ display: 'block' }}>
                        <td style={{ display: 'block', marginBottom: '10px' }}>Password:</td>
                        <td style={{ display: 'block' }}>
                          <input type="password" name="pass" value={formData.pass} onChange={handleChange} required style={{ padding: '14px 12px' }} />
                        </td>
                      </tr>

                      <tr style={{ display: 'block', marginTop: '10px' }}>
                        <td colSpan="2" align="center" style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                          <input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading} style={{ width: '100%', padding: '14px' }} />
                        </td>
                      </tr>

                      <tr style={{ display: 'block' }}>
                        <td colSpan="2" align="center" style={{ display: 'block', width: '100%', textAlign: 'center', color: '#fff', whiteSpace: 'nowrap' }}>
                          Don't have an account? <Link to="/registration" style={{ color: '#56d8e4' }}>Register</Link>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </fieldset>
              </form>
            </div>
          </div>

          <div className="reg-card-info">
            <div className="reg-card-info-inner">
              <span className="reg-info-tag">Why Log In</span>
              <h2>Everything in your account</h2>
              <p className="reg-info-sub">Pick up your travel planning exactly where you left it.</p>

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
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>

              <div className="reg-benefit-list">
                <div className="reg-benefit-item">
                  <span className="reg-benefit-icon">🧳</span>
                  <div>
                    <strong>Manage Bookings</strong>
                    <p>View, edit, or cancel your trips in one place.</p>
                  </div>
                </div>

                <div className="reg-benefit-item">
                  <span className="reg-benefit-icon">⚡</span>
                  <div>
                    <strong>Faster Checkout</strong>
                    <p>Skip re-entering your details on every booking.</p>
                  </div>
                </div>

                <div className="reg-benefit-item">
                  <span className="reg-benefit-icon">🔔</span>
                  <div>
                    <strong>Trip Updates</strong>
                    <p>Get notified about your upcoming travel plans.</p>
                  </div>
                </div>
              </div>

              <div className="reg-office-info">
                <div className="reg-office-row">
                  <span>🔒</span> Your data is encrypted and secure
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA band — same component used on Home/About/Contact/Registration/API pages */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-text">
            <h2>Ready to Get on the Road?</h2>
            <p>Your saved trips are waiting.</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/destinations" className="primary-btn">
              Start Booking
            </Link>
            <Link to="/travelpackages" className="secondary-btn">
              Explore Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;