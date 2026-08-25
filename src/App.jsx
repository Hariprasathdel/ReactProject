import React, { useState } from 'react';
import { useCart } from './hooks/useCart';
import { products, offers } from "./data/ProductsData";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';
import Hero from './components/home/Hero';
import ProductList from './components/products/ProductList';
import OffersList from './components/products/OffersList';
import Contact from './components/contact/Contact';
import Login from './components/auth/Login';
import OrderModal from './components/order/OrderModal';

const App = () => {
  const { addToCart, clearCart, getCartTotal } = useCart();
  const [activeSection, setActiveSection] = useState('home');
  const [showLogin, setShowLogin] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', bg: 'bg-primary' });

  const showToast = (message, bg = 'bg-primary') => {
    setToast({ show: true, message, bg });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 2800);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`🛒 ${product.name} added to cart`, 'bg-success');
  };

  const handleBuyNow = (product) => {
    setOrderItems([product]);
    setShowOrderModal(true);
    showToast(`Order placed for ${product.name}`, 'bg-primary');
  };

  const handleCheckout = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      showToast('🛒 Cart is empty', 'bg-warning');
      return;
    }
    setOrderItems(cartItems);
    setShowOrderModal(true);
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    showToast(` Order placed with ${cartItems.length} items`, 'bg-success');
    clearCart();
  };

  const handleLogin = () => {
    setShowLogin(false);
    setActiveSection('home');
    showToast(' Logged in successfully!', 'bg-primary');
  };

  const handleShopNow = () => {
    setActiveSection('products');
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setActiveSection('login');
    document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCloseToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} onLoginClick={handleLoginClick} />
      
      <div className="container py-3">
        <Hero onShopNow={handleShopNow} />
        
        <ProductList 
          products={products} 
          onAddToCart={handleAddToCart} 
          onBuyNow={handleBuyNow} 
        />
        
        <OffersList 
          offers={offers} 
          onAddToCart={handleAddToCart} 
          onBuyNow={handleBuyNow} 
        />
        
        <Contact />
        
        {showLogin && <Login onLogin={handleLogin} />}
      </div>

      <Footer />
      
      <OrderModal 
        show={showOrderModal} 
        onHide={() => setShowOrderModal(false)} 
        items={orderItems} 
        total={orderItems.reduce((sum, item) => sum + item.price, 0)} 
      />
      
      <Toast 
        show={toast.show} 
        message={toast.message} 
        bg={toast.bg} 
        onClose={handleCloseToast} 
      />
    </div>
  );
};

export default App;