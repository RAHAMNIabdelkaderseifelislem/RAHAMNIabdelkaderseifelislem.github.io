import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">AbdElKader Seif El Islem RAHMANI</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/#about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#testimonials">Testimonials</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
