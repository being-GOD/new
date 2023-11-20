import nodemailer from "nodemailer";
// import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";
let GOOGLE_EMAIL= "support@eyantrik.com" 
let GOOGLE_EMAIL_PASSWORD = "eYantrik@123"
let transporter = nodemailer.createTransport({
  host: "smtp.ipage.com",
  port: 587,
  secure: false,
  auth: {
    user: GOOGLE_EMAIL,
    pass: GOOGLE_EMAIL_PASSWORD,
  },
  tls: {rejectUnauthorized: false},     
});

transporter.verify(function (error, success) {
  if (error) {
    console.error("herw", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;
