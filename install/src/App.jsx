import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/LogIn';
import Registration from './components/Registration';
import Contact from './components/Contact';
import API from './components/API';
import Destinations from './components/Destinations';
import TravelPackages from './components/TravelPackages';
import Profile from './components/Profile';
import Booking from './components/Booking';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />         
        <Route path="/about" element={<About />} />   
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/api" element={<API />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/travelpackages" element={<TravelPackages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
