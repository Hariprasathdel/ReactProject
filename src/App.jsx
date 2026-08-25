import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/home/Hero';
import ProductsSection from './components/sections/ProductsSection';
import OffersSection from './components/sections/OffersSection';
import ContactSection from './components/sections/ContactSection';
import Toast from './components/common/Toast';
import './assets/styles/App.css';

function App() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProductsSection showToast={showToast} />
                <OffersSection />
                <ContactSection showToast={showToast} />
              </>
            } />
          </Routes>
          <Footer />
          {toast.show && <Toast message={toast.message} type={toast.type} />}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;