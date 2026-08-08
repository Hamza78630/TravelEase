import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/api">Regions</Link>

      <Link to="/profile" className="nav-avatar" aria-label="My Account">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 19c1.2-3.2 4-5 7-5s5.8 1.8 7 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </Link>
    </nav>
  );
}

export default Navbar;