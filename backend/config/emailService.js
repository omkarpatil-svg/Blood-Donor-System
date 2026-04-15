const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendEmergencyEmail = async (donorEmail, donorName, bloodGroup, city) => {

  const mailOptions = {
    from: `"Blood Donor Finder" <${process.env.EMAIL_USER}>`,
    to: donorEmail,
    subject: `URGENT: Blood Donation Request - ${bloodGroup}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 3px solid #dc3545; border-radius: 10px;">
        <div style="background: #c62828; color: white; padding: 20px; text-align: center; border-radius: 5px;">
          <h1 style="margin: 0; font-size: 26px;">EMERGENCY BLOOD NEEDED</h1>
        </div>

        <div style="padding: 30px 20px; background: #fff;">
          <p style="font-size: 18px; color: #333;">Dear <strong>${donorName}</strong>,</p>

          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            There is a critical emergency requiring <strong style="color: #dc3545;">${bloodGroup}</strong> blood donation in <strong>${city}</strong>.
          </p>

          <div style="background: #fff5f5; border-left: 4px solid #dc3545; padding: 15px; margin: 20px 0;">
            <p style="margin: 5px 0; font-size: 16px;"><strong>Blood Group Required:</strong> <span style="color: #dc3545; font-size: 20px;">${bloodGroup}</span></p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Location:</strong> ${city}</p>
            <p style="margin: 5px 0; font-size: 16px;"><strong>Urgency:</strong> <span style="color: #dc3545;">CRITICAL</span></p>
          </div>

          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            If you are available to donate, please contact us immediately. Your donation can save a life.
          </p>

          <p style="font-size: 14px; color: #999; margin-top: 30px;">
            Best regards,<br/>
            <strong>Blood Donor Finder Team</strong>
          </p>
        </div>

        <div style="background: #f8f9fa; padding: 15px; text-align: center; border-radius: 5px; margin-top: 10px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            This is an automated emergency notification. Please respond as soon as possible.
          </p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent to:', donorEmail, '| Response:', info.response);
    return { success: true, message: 'Email sent successfully', mode: 'production' };
  } catch (error) {
    console.error('Email error:', error.message);
    return { success: false, message: error.message };
  }
};

module.exports = { sendEmergencyEmail };
