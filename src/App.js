import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />{' '}
            <Route path="/about" element={<About />} />{' '}
            <Route path="/services" element={<Services />} />{' '}
            <Route path="/pricing" element={<Pricing />} />{' '}
            <Route path="/blog" element={<Blog />} />{' '}
            <Route path="/contact" element={<Contact />} />{' '}
          </Routes>{' '}
        </main>{' '}
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />{' '}
      </div>{' '}
    </Router>
  );
}

export default App;
