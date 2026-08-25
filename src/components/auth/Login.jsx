import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const Login = ({ onLogin }) => {
  const { login } = useCart();
  const [email, setEmail] = useState('demo@smartcart.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    onLogin();
  };

  return (
    <section id="login" className="mb-5">
      <h2 className="section-title">Login</h2>
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com" 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            <i className="bi bi-box-arrow-in-right me-1"></i> Sign in
          </button>
          <p className="mt-3 text-center text-secondary small">Demo: click login (any credentials)</p>
        </form>
      </div>
    </section>
  );
};

export default Login;