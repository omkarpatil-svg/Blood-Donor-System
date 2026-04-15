import React, { useState } from "react";
import axios from "axios";

function RegisterDonor(){

const [name,setName]=useState("");
const [bloodGroup,setBloodGroup]=useState("");
const [city,setCity]=useState("");
const [phone,setPhone]=useState("");
const [email,setEmail]=useState("");

const handleSubmit = async (e) => {

e.preventDefault();

// validation

if(name === "" || bloodGroup === "" || city === "" || phone === "" || email === ""){
alert("All fields are required");
return;
}

if(phone.length !== 10){
alert("Phone number must be 10 digits");
return;
}

if(isNaN(phone)){
alert("Phone number must contain only numbers");
return;
}

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test(email)){
alert("Please enter a valid email address");
return;
}

const donorData = {
name,
bloodGroup,
city,
phone,
email,
available:true
};

await axios.post("/donor/add", donorData);

alert("Donor Registered Successfully! Thank you for joining our community.");

setName("");
setBloodGroup("");
setCity("");
setPhone("");
setEmail("");

};

return(

<div className="container mt-5 mb-5">

<div className="row justify-content-center">
  <div className="col-md-8">

    <div className="page-header">
      <h2>Donor Registration</h2>
      <p>Join our community of lifesavers</p>
    </div>

    <div className="card card-enhanced shadow-lg p-5">

      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">
            Blood Group
          </label>
          <select
            className="form-control"
            value={bloodGroup}
            onChange={(e)=>setBloodGroup(e.target.value)}
            required
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

        <div className="mb-4">
          <label className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter 10-digit phone number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            maxLength="10"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-danger btn-custom w-100"
          style={{fontSize: '1rem', padding: '14px'}}
        >
          Register as Donor
        </button>

      </form>

    </div>

    <div className="info-box">
      <h5>Important Information</h5>
      <ul>
        <li>You must be between 18-65 years old</li>
        <li>Minimum weight should be 50 kg</li>
        <li>You can donate blood every 3 months</li>
        <li>Your information will be kept confidential</li>
      </ul>
    </div>

  </div>
</div>

</div>

);

}

export default RegisterDonor;
