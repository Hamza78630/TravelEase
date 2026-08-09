import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className={`nav-toggle ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={isOpen ? 'nav-open' : ''}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/registration" onClick={closeMenu}>Registration</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        <Link to="/api" onClick={closeMenu}>Regions</Link>

        <Link to="/profile" className="nav-avatar" aria-label="My Account" onClick={closeMenu}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M5 19c1.2-3.2 4-5 7-5s5.8 1.8 7 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </Link>
      </nav>

      {isOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;