const mongoose = require("mongoose");

const EmailLogSchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true
  },
  donorName: String,
  donorEmail: String,
  bloodGroup: String,
  city: String,
  emailSubject: String,
  status: {
    type: String,
    enum: ['sent', 'failed'],
    default: 'sent'
  },
  sentAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("EmailLog", EmailLogSchema);
