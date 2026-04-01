import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';
import Contact from './components/Contact';
import API from './components/API';
import Destinations from './components/Destinations';
import TravelPackages from './components/TravelPackages';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />         
        <Route path="/about" element={<About />} />   
        <Route path="/registration" element={<Registration />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/api" element={<API />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/travelpackages" element={<TravelPackages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
