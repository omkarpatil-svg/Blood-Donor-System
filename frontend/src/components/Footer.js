import React from "react";

function Footer() {
  return (
    <footer className="bg-danger text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="mb-3" style={{fontWeight: '700'}}>Blood Donor System</h5>
            <p style={{fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.6'}}>
              A comprehensive platform connecting blood donors with those in need. 
              Saving lives through efficient donor management.
            </p>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5 className="mb-3" style={{fontWeight: '700'}}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white" style={{textDecoration: 'none', opacity: '0.9'}}>
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/register" className="text-white" style={{textDecoration: 'none', opacity: '0.9'}}>
                  Register as Donor
                </a>
              </li>
              <li className="mb-2">
                <a href="/search" className="text-white" style={{textDecoration: 'none', opacity: '0.9'}}>
                  Search Donors
                </a>
              </li>
              <li className="mb-2">
                <a href="/emergency" className="text-white" style={{textDecoration: 'none', opacity: '0.9'}}>
                  Emergency Request
                </a>
              </li>
              <li className="mb-2">
                <a href="/email-logs" className="text-white" style={{textDecoration: 'none', opacity: '0.9'}}>
                  Email Logs
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5 className="mb-3" style={{fontWeight: '700'}}>Contact Information</h5>
            <p style={{fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.8'}}>
              <strong>Email:</strong>  dypatilmedicalcollege@gmail.com<br/>
              <strong>Phone:</strong>  +91 (0231) 260 1235/36<br/>
              <strong>Address:</strong> Kadamwadi,Laxminarayan Nagar, Kolhapur, Maharashtra 416003
            </p>
          </div>
        </div>
        
        <hr style={{borderColor: 'rgba(255,255,255,0.3)', margin: '25px 0'}} />
        
        <div className="text-center" style={{fontSize: '0.9rem', opacity: '0.8'}}>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Blood Donor Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
