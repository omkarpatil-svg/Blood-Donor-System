import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1>Blood Donor Management System</h1>
          <p style={{fontSize: '1.4rem', fontWeight: '400', marginBottom: '30px'}}>
            Connecting Donors with Those in Need
          </p>
          <p style={{fontSize: '1.1rem', fontWeight: '300'}}>
            A comprehensive platform for managing blood donations and emergency requests
          </p>
          <button 
            className="btn btn-light btn-custom mt-4"
            onClick={() => navigate('/register')}
            style={{fontSize: '1rem', padding: '14px 40px'}}
          >
            Register as Donor
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mt-5 mb-5">

        <div className="page-header">
          <h2>Our Services</h2>
          <p>Comprehensive blood donation management solutions</p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card feature-card shadow-sm p-4 text-center">
              <div className="feature-icon">
                <i className="bi bi-person-plus"></i>
              </div>
              <h4 className="text-danger mb-3" style={{fontWeight: '700'}}>Donor Registration</h4>
              <p style={{color: '#666', lineHeight: '1.6', marginBottom: '25px'}}>
                Register as a blood donor and become part of our lifesaving community. Your contribution can save up to three lives.
              </p>
              <button 
                className="btn btn-danger btn-custom"
                onClick={() => navigate('/register')}
              >
                Register Now
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card shadow-sm p-4 text-center">
              <div className="feature-icon">
                <i className="bi bi-search"></i>
              </div>
              <h4 className="text-danger mb-3" style={{fontWeight: '700'}}>Search Donors</h4>
              <p style={{color: '#666', lineHeight: '1.6', marginBottom: '25px'}}>
                Find verified blood donors by blood group and location. Connect with available donors in your area quickly.
              </p>
              <button 
                className="btn btn-danger btn-custom"
                onClick={() => navigate('/search')}
              >
                Search Now
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card shadow-sm p-4 text-center">
              <div className="feature-icon">
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <h4 className="text-danger mb-3" style={{fontWeight: '700'}}>Emergency Requests</h4>
              <p style={{color: '#666', lineHeight: '1.6', marginBottom: '25px'}}>
                Send urgent blood donation requests to available donors instantly during critical medical emergencies.
              </p>
              <button 
                className="btn btn-danger btn-custom"
                onClick={() => navigate('/emergency')}
              >
                Emergency Request
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Info Section */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card card-enhanced shadow-sm p-4" style={{height: '100%'}}>
              <h3 className="text-danger mb-4" style={{fontWeight: '700'}}>Why Donate Blood?</h3>
              <ul style={{fontSize: '1rem', lineHeight: '2', color: '#555', paddingLeft: '20px'}}>
                <li>Save lives in medical emergencies</li>
                <li>Support patients with chronic illnesses</li>
                <li>Help accident and trauma victims</li>
                <li>Assist in surgeries and medical treatments</li>
                <li>Make a meaningful impact in your community</li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card card-enhanced shadow-sm p-4" style={{height: '100%'}}>
              <h3 className="text-danger mb-4" style={{fontWeight: '700'}}>Donation Facts</h3>
              <div className="stat-card mb-3">
                <div className="stat-number">3</div>
                <div className="stat-label">Lives Saved Per Donation</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">90</div>
                <div className="stat-label">Days Between Donations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
