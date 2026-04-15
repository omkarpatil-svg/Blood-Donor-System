import React, { useState } from "react";
import axios from "axios";

function EmergencyRequest() {

  const [blood, setBlood] = useState("");
  const [city, setCity] = useState("");
  const [donors, setDonors] = useState([]);
  const [sendingEmail, setSendingEmail] = useState({});

  const sendRequest = async () => {
    if (!blood || !city) {
      alert("Please select blood group and enter city");
      return;
    }
    try {
      const res = await axios.get(`http://localhost:5000/donor/search/${blood}/${city}`);
      setDonors(res.data);
      if (res.data.length > 0) {
        alert(`Found ${res.data.length} donor(s) for emergency request`);
      } else {
        alert("No donors found. Try expanding your search area.");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending request");
    }
  };

  const handleSendEmail = async (donor) => {
    setSendingEmail(prev => ({ ...prev, [donor._id]: true }));
    try {
      const response = await axios.post('http://localhost:5000/donor/send-emergency-email', {
        donorId: donor._id,
        donorEmail: donor.email,
        donorName: donor.name,
        bloodGroup: donor.bloodGroup,
        city: donor.city
      });
      if (response.data.success) {
        alert(`Emergency email sent successfully to ${donor.name}!`);
      } else {
        alert(`Failed to send email: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please check the backend server.');
    } finally {
      setSendingEmail(prev => ({ ...prev, [donor._id]: false }));
    }
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="page-header">
        <h2>Emergency Blood Request</h2>
        <p>Find donors immediately for critical situations</p>
      </div>

      <div className="card card-enhanced shadow-lg p-4 mb-4" style={{ borderTop: '4px solid #c62828' }}>

        <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
          <svg width="24" height="24" fill="currentColor" className="me-3" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>
            <strong>Emergency Mode Active</strong>
            <p className="mb-0">This search is prioritized for urgent blood requirements</p>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-5">
            <label className="form-label">Required Blood Group</label>
            <select className="form-control" onChange={(e) => setBlood(e.target.value)}>
              <option>Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <div className="col-md-5">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="col-md-2 d-flex align-items-end">
            <button className="btn btn-danger btn-custom w-100" onClick={sendRequest}>
              Find Now
            </button>
          </div>
        </div>

      </div>

      <div className="row g-4">
        {donors.length === 0 ? (
          <div className="col-12">
            <div className="card card-enhanced shadow p-5 text-center" style={{ background: '#f8f9fa' }}>
              <h4 className="text-muted mb-3">No Emergency Results Yet</h4>
              <p style={{ color: '#999' }}>Enter blood group and location to find available donors</p>
            </div>
          </div>
        ) : (
          donors.map((d, i) => (
            <div key={i} className="col-md-6">
              <div className="card donor-card shadow p-4" style={{ borderLeft: '4px solid #28a745' }}>

                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="text-danger mb-1" style={{ fontWeight: '700' }}>{d.name}</h5>
                    <span className="badge bg-success badge-custom">Available</span>
                  </div>
                  <span className="badge bg-danger badge-custom" style={{ fontSize: '1rem' }}>{d.bloodGroup}</span>
                </div>

                <div style={{ borderTop: '2px solid #f5f5f5', paddingTop: '15px' }}>
                  <div className="row mb-3">
                    <div className="col-6">
                      <small className="text-muted d-block mb-1">Blood Group</small>
                      <span style={{ color: '#c62828', fontWeight: '700', fontSize: '1.1rem' }}>{d.bloodGroup}</span>
                    </div>
                    <div className="col-6">
                      <small className="text-muted d-block mb-1">City</small>
                      <span style={{ color: '#424242', fontWeight: '500' }}>{d.city}</span>
                    </div>
                  </div>

                  <div className="alert alert-info mb-3" style={{ background: '#e3f2fd', border: 'none', padding: '12px' }}>
                    <div className="mb-2">
                      <small className="text-muted d-block mb-1">Phone</small>
                      <span style={{ color: '#1976d2', fontWeight: '600' }}>{d.phone}</span>
                    </div>
                    <div>
                      <small className="text-muted d-block mb-1">Email</small>
                      <span style={{ color: '#1976d2', fontSize: '0.9rem', wordBreak: 'break-all' }}>{d.email}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSendEmail(d)}
                    className="btn btn-danger btn-custom w-100"
                    disabled={sendingEmail[d._id]}
                    style={{ opacity: sendingEmail[d._id] ? 0.7 : 1 }}
                  >
                    {sendingEmail[d._id] ? 'Sending Email...' : 'Send Emergency Email'}
                  </button>
                </div>

              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default EmergencyRequest;
