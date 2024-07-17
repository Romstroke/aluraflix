import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src="assets/img/banner.jpg" alt="Destacado" className="banner-image" />
      <h2 className="banner-title">Videos Destacados</h2>
    </div>
  );
}

export default Banner;