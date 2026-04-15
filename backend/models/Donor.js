const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
name:String,
bloodGroup:String,
city:String,
phone:String,
email:String,
available:Boolean
});

module.exports = mongoose.model("Donor", DonorSchema);