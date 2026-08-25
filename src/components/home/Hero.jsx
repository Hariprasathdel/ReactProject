import React from 'react';

const Hero = ({ onShopNow }) => {
  return (
    <section id="home" className="hero-section text-center">
      <h1 className="display-4 fw-bold">Welcome to SmartCart</h1>
      <p className="lead mb-4">Best Online Shopping Website</p>
      <button 
        className="btn btn-outline-light btn-lg rounded-pill px-5"
        onClick={onShopNow}
      >
        Shop Now
      </button>
    </section>
  );
};

export default Hero;