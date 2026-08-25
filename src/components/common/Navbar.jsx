import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartDropdown from '../cart/CartDropdown';

const Navbar = ({ setActiveSection }) => {
  const { cartCount, isLoggedIn, login, logout } = useCart();
  const [showLogin, setShowLogin] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      // Already logged in
      return;
    }
    setShowLogin(true);
    setActiveSection('login');
    document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">
        <a className="navbar-brand text-primary" href="#home" onClick={() => handleNavClick('home')}>
          <i className="bi bi-cart-check me-1"></i>SmartCart
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#home" onClick={() => handleNavClick('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products" onClick={() => handleNavClick('products')}>Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#offers" onClick={() => handleNavClick('offers')}>Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <CartDropdown />
            <button 
              className="btn btn-outline-primary btn-sm rounded-pill px-3" 
              onClick={handleLoginClick}
            >
              <i className="bi bi-person"></i> {isLoggedIn ? 'Account' : 'Login'}
            </button>
            {isLoggedIn && (
              <button 
                className="btn btn-outline-secondary btn-sm rounded-pill px-3 ms-2" 
                onClick={logout}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;