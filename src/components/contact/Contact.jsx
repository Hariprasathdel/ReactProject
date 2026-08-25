import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    alert(`Thanks! We'll reply to ${email}`);
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="mb-5">
      <h2 className="section-title">Contact</h2>
      <div className="contact-card">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5><i className="bi bi-envelope-fill text-primary me-2"></i> support@smartcart.com</h5>
            <h5><i className="bi bi-telephone-fill text-primary me-2"></i> +91 98765 43210</h5>
            <p className="mt-3 text-secondary">We're here to help. Reach out anytime.</p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-light p-4 rounded-4">
              <p className="fw-semibold">Quick message</p>
              <div className="mb-2">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <textarea 
                  className="form-control" 
                  placeholder="Your message" 
                  rows="2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleSend}>Send</button>
              <small className="text-secondary d-block mt-2">We'll reply within 24h</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;