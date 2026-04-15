const mongoose = require("mongoose");

const EmergencySchema = new mongoose.Schema({

bloodGroup:String,
city:String,
message:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Emergency",EmergencySchema);