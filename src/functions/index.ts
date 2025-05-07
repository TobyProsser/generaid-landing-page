import * as functions from "firebase-functions";
import { CallableRequest } from "firebase-functions/https";
import * as nodemailer from "nodemailer";

// Configure Nodemailer with your email provider (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().email.user, // Set via Firebase config
    pass: functions.config().email.pass, // Set via Firebase config
  },
});

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

exports.sendEmail = functions.https.onCall(
  async (data: CallableRequest<EmailRequest>) => {
    const { name, email, message } = data.data; // `data.data` contains the actual values

    const mailOptions = {
      from: functions.config().email.user,
      to: "generaid.project@gmail.com",
      subject: `Contact Form Message from ${name}`,
      text: `Email: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      return { success: false, error };
    }
  }
);
