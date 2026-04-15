import React from "react";

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-danger navbar-custom">

      <div className="container">

        <a className="navbar-brand d-flex align-items-center" href="/" style={{fontSize: '1.3rem', fontWeight: '700'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="me-2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Blood Donor System
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{fontWeight: '500'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register" style={{fontWeight: '500'}}>Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search" style={{fontWeight: '500'}}>Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/emergency" style={{fontWeight: '500'}}>Emergency</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/email-logs" style={{fontWeight: '500'}}>Email Logs</a>
            </li>
          </ul>
        </div>

      </div>

    </nav>

  );
}

export default Navbar;
