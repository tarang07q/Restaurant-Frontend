// frontend/src/pages/LandingPage.jsx

import React from 'react';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Welcome to Our Restaurant!</h1>
      <p className="landing-page-subtitle">
        Experience the finest dining in a cozy and elegant atmosphere.
        Discover our exquisite menu crafted with passion and fresh, local ingredients.
      </p>
      <div className="landing-page-actions">
        <a href="/menu" className="button landing-page-button">View Menu</a>
        <a href="/reserve" className="button landing-page-button secondary">Make a Reservation</a>
      </div>
    </div>
  );
}

export default LandingPage;