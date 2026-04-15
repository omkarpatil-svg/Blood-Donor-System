const express = require("express");
const router = express.Router();

const Donor = require("../models/Donor");
const Emergency = require("../models/Emergency");
const EmailLog = require("../models/EmailLog");
const { sendEmergencyEmail } = require("../config/emailService");


// ---------------- ADD DONOR ----------------

router.post("/add", async (req, res) => {

try {

const donor = new Donor(req.body);

await donor.save();

res.send("Donor Added Successfully");

} catch (error) {

console.log(error);
res.status(500).send("Error adding donor");

}

});


// ---------------- SEARCH DONOR ----------------
// Case insensitive city search

router.get("/search/:bloodGroup/:city", async (req, res) => {

try {

const { bloodGroup, city } = req.params;

const donors = await Donor.find({

bloodGroup: bloodGroup,

city: { $regex: new RegExp("^" + city + "$", "i") }

});

res.json(donors);

} catch (error) {

console.log(error);
res.status(500).send("Error searching donors");

}

});


// ---------------- DELETE DONOR ----------------

router.delete("/delete/:id", async (req, res) => {

try {

await Donor.findByIdAndDelete(req.params.id);

res.send("Donor Deleted Successfully");

} catch (error) {

console.log(error);
res.status(500).send("Error deleting donor");

}

});


// ---------------- SEND EMERGENCY EMAIL TO DONOR ----------------

router.post("/send-emergency-email", async (req, res) => {

try {

const { donorEmail, donorName, bloodGroup, city, donorId } = req.body;

if (!donorEmail || !donorName || !bloodGroup || !city) {
return res.status(400).json({ success: false, message: "All fields required" });
}

const result = await sendEmergencyEmail(donorEmail, donorName, bloodGroup, city);

// Log the email in database
if (result.success) {
  const emailLog = new EmailLog({
    donorId: donorId,
    donorName: donorName,
    donorEmail: donorEmail,
    bloodGroup: bloodGroup,
    city: city,
    emailSubject: `🚨 URGENT: Blood Donation Request - ${bloodGroup}`,
    status: 'sent'
  });
  
  await emailLog.save();
}

if (result.success) {
res.json({ success: true, message: "Emergency email sent successfully!", mode: result.mode });
} else {
res.status(500).json({ success: false, message: result.message });
}

} catch (error) {

console.log(error);
res.status(500).json({ success: false, message: "Error sending email" });

}

});


// ---------------- GET ALL EMAIL LOGS ----------------

router.get("/email-logs", async (req, res) => {

try {

const emailLogs = await EmailLog.find()
  .populate('donorId', 'name email phone bloodGroup city')
  .sort({ sentAt: -1 })
  .limit(100);

res.json(emailLogs);

} catch (error) {

console.log(error);
res.status(500).send("Error fetching email logs");

}

});


// ---------------- GET EMAIL LOGS BY BLOOD GROUP ----------------

router.get("/email-logs/:bloodGroup", async (req, res) => {

try {

const { bloodGroup } = req.params;

const emailLogs = await EmailLog.find({ bloodGroup: bloodGroup })
  .populate('donorId', 'name email phone bloodGroup city')
  .sort({ sentAt: -1 });

res.json(emailLogs);

} catch (error) {

console.log(error);
res.status(500).send("Error fetching email logs");

}

});


// ---------------- CREATE EMERGENCY REQUEST ----------------

router.post("/emergency", async (req, res) => {

try {

const { bloodGroup, city, message } = req.body;

if (!bloodGroup || !city || !message) {

return res.status(400).send("All fields required");

}

const emergency = new Emergency({
bloodGroup,
city,
message
});

await emergency.save();

res.send("Emergency request saved successfully");

} catch (error) {

console.log(error);
res.status(500).send("Error saving emergency request");

}

});


// ---------------- GET LATEST EMERGENCY ALERT ----------------

router.get("/latest-emergency", async (req, res) => {

try {

const emergency = await Emergency
.findOne()
.sort({ createdAt: -1 });

res.json(emergency);

} catch (error) {

console.log(error);
res.status(500).send("Error fetching emergency");

}

});


module.exports = router;