import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RegisterDonor from "./pages/RegisterDonor";
import SearchDonor from "./pages/SearchDonor";
import EmergencyRequest from "./pages/EmergencyRequest";
import EmailLogs from "./pages/EmailLogs";


function App() {

return (

<Router>
<div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>

{/* Navigation Bar */}
<Navbar />

{/* Main Content */}
<div style={{flex: '1'}}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<RegisterDonor />} />
    <Route path="/search" element={<SearchDonor />} />
    <Route path="/emergency" element={<EmergencyRequest />} />
    <Route path="/email-logs" element={<EmailLogs />} />
  </Routes>
</div>

{/* Footer */}
<Footer />

</div>
</Router>

);

}

export default App;