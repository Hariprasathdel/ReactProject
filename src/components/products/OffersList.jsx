import React from 'react';
import ProductCard from './ProductCard';

const OffersList = ({ offers, onAddToCart, onBuyNow }) => {
  return (
    <section id="offers" className="mb-5">
      <h2 className="section-title">Special Offers</h2>
      <div className="row g-4">
        {offers.map(offer => (
          <div key={offer.id} className="col-sm-6 col-md-4">
            <ProductCard 
              product={offer} 
              offerPrice={offer.offerPrice}
              isOffer={true}
              onAddToCart={onAddToCart} 
              onBuyNow={onBuyNow} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersList;