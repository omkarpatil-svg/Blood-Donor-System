import React, { useState, useEffect } from "react";
import axios from "axios";

function EmailLogs() {
  const [emailLogs, setEmailLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchEmailLogs();
  }, []);

  const fetchEmailLogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/donor/email-logs');
      setEmailLogs(response.data);
    } catch (error) {
      console.error('Error fetching email logs:', error);
      alert('Error loading email logs');
    } finally {
      setLoading(false);
    }
  };

  const filteredLogs = filter 
    ? emailLogs.filter(log => log.bloodGroup === filter)
    : emailLogs;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mt-5 mb-5">
      
      <div className="page-header">
        <h2>Emergency Email Logs</h2>
        <p>View all emergency emails sent to donors</p>
      </div>

      <div className="card card-enhanced shadow-lg p-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="mb-0" style={{fontWeight: '600'}}>
              Total Emails Sent: <span className="badge bg-danger badge-custom ms-2">{emailLogs.length}</span>
            </h5>
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Filter by Blood Group
            </label>
            <select
              className="form-control"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">All Blood Groups</option>
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
        </div>
      </div>

      {loading ? (
        <div className="text-center p-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading email logs...</p>
        </div>
      ) : filteredLogs.length === 0 ? (
        <div className="card card-enhanced shadow p-5 text-center" style={{background: '#f8f9fa'}}>
          <h4 className="text-muted mb-3">No Email Logs Found</h4>
          <p style={{color: '#999'}}>
            {filter ? `No emails sent for blood group ${filter}` : 'No emergency emails have been sent yet'}
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {filteredLogs.map((log, index) => (
            <div key={log._id || index} className="col-md-6">
              <div className="card donor-card shadow p-4">
                
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="text-danger mb-1" style={{fontWeight: '700'}}>
                      {log.donorName}
                    </h5>
                    <span className="badge bg-success badge-custom">Email Sent</span>
                  </div>
                  <span className="badge bg-danger badge-custom" style={{fontSize: '1rem'}}>
                    {log.bloodGroup}
                  </span>
                </div>

                <div style={{borderTop: '2px solid #f5f5f5', paddingTop: '15px'}}>
                  
                  <div className="mb-2">
                    <small className="text-muted d-block mb-1">Email Address</small>
                    <span style={{color: '#1976d2', fontSize: '0.95rem', wordBreak: 'break-all'}}>{log.donorEmail}</span>
                  </div>

                  <div className="mb-2">
                    <small className="text-muted d-block mb-1">City</small>
                    <span style={{color: '#424242', fontWeight: '500'}}>{log.city}</span>
                  </div>

                  <div className="mb-2">
                    <small className="text-muted d-block mb-1">Sent At</small>
                    <span style={{color: '#666'}}>{formatDate(log.sentAt)}</span>
                  </div>

                  {log.donorId && log.donorId.phone && (
                    <div>
                      <small className="text-muted d-block mb-1">Phone</small>
                      <span style={{color: '#424242', fontWeight: '500'}}>
                        {log.donorId.phone}
                      </span>
                    </div>
                  )}

                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default EmailLogs;
