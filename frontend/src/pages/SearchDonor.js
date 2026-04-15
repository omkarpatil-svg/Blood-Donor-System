import React, { useState } from "react";
import axios from "axios";

function SearchDonor() {

const [blood,setBlood] = useState("");
const [city,setCity] = useState("");
const [donors,setDonors] = useState([]);

const searchDonor = async () => {

if(!blood || !city){
alert("Please select blood group and enter city");
return;
}

try{

const res = await axios.get(
`http://localhost:5000/donor/search/${blood}/${city}`
);

setDonors(res.data);

if(res.data.length === 0) {
  alert("No donors found for this blood group in your city");
}

}catch(error){

console.log(error);
alert("Error fetching donors");

}

};

const deleteDonor = async(id)=>{

if(!window.confirm("Are you sure you want to delete this donor?")) {
  return;
}

try{

await axios.delete(
`http://localhost:5000/donor/delete/${id}`
);

setDonors(donors.filter((d)=> d._id !== id));
alert("Donor deleted successfully");

}catch(error){

console.log(error);
alert("Error deleting donor");

}

};

return(

<div className="container mt-5 mb-5">

<div className="page-header">
  <h2>Search Blood Donors</h2>
  <p>Find available donors by blood group and location</p>
</div>

<div className="card card-enhanced shadow-lg p-4 mb-4">

<div className="row g-3">
  <div className="col-md-5">
    <label className="form-label">
      Blood Group
    </label>
    <select
      className="form-control"
      value={blood}
      onChange={(e)=>setBlood(e.target.value)}
    >
      <option value="">Select Blood Group</option>
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
    <label className="form-label">
      City
    </label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter city name"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
    />
  </div>

  <div className="col-md-2 d-flex align-items-end">
    <button
      className="btn btn-danger btn-custom w-100"
      onClick={searchDonor}
    >
      Search
    </button>
  </div>
</div>

</div>

<div className="row g-4">

{donors.length === 0 ? (

<div className="col-12">
  <div className="card card-enhanced shadow p-5 text-center" style={{background: '#f8f9fa'}}>
    <h4 className="text-muted mb-3">No Donors Found</h4>
    <p style={{color: '#999'}}>Try searching with different blood group or city</p>
  </div>
</div>

) : (

donors.map((d)=> (

<div key={d._id} className="col-md-4">

<div className="card donor-card shadow p-4">

<div className="d-flex justify-content-between align-items-start mb-3">
  <h5 className="text-danger mb-0" style={{fontWeight: '700'}}>{d.name}</h5>
  <span className="badge bg-danger badge-custom">{d.bloodGroup}</span>
</div>

<div style={{borderTop: '2px solid #f5f5f5', paddingTop: '15px'}}>
  <div className="mb-2">
    <small className="text-muted d-block mb-1">City</small>
    <span style={{color: '#424242', fontWeight: '500'}}>{d.city}</span>
  </div>

  <div className="mb-2">
    <small className="text-muted d-block mb-1">Phone</small>
    <span style={{color: '#424242', fontWeight: '500'}}>{d.phone}</span>
  </div>

  <div className="mb-3">
    <small className="text-muted d-block mb-1">Email</small>
    <span style={{color: '#424242', fontSize: '0.9rem', wordBreak: 'break-all'}}>{d.email}</span>
  </div>

  <button
    className="btn btn-outline-danger w-100"
    onClick={()=>deleteDonor(d._id)}
  >
    Remove Donor
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

export default SearchDonor;
