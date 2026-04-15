import React,{useEffect,useState} from "react";
import axios from "axios";

function EmergencyBanner(){

const [alert,setAlert] = useState(null);

useEffect(()=>{

axios.get("http://localhost:5000/donor/latest-emergency")
.then(res=>{

setAlert(res.data);

})
.catch(err=>console.log(err));

},[]);

if(!alert) return null;

return(

<div style={{
background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
color:"white",
padding:"15px 20px",
textAlign:"center",
boxShadow: '0 4px 10px rgba(255,0,0,0.3)',
animation: 'pulse 2s ease-in-out infinite'
}}>

<div style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '5px'}}>
  🚨 EMERGENCY BLOOD NEEDED 🚨
</div>

<div style={{fontSize: '1.1rem'}}>
  <span style={{marginRight: '20px'}}>
    <strong>Blood Group:</strong> {alert.bloodGroup}
  </span>
  <span style={{marginRight: '20px'}}>
    <strong>City:</strong> {alert.city}
  </span>
  {alert.message && (
    <span>
      <strong>Message:</strong> {alert.message}
    </span>
  )}
</div>

</div>

);

}

export default EmergencyBanner;