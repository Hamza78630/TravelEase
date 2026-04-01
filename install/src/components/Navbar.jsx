import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/api">Regions</Link>
    </nav>
  );
}

export default Navbar;
