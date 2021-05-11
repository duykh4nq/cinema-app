require("dotenv").config();

const nodemailer = require("nodemailer");

const config = {
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
};

exports.sendMail = (email, code) => {
  const transporter = nodemailer.createTransport(config);
  try {
    const msg = {
      to: email, // Change to your recipient
      from: process.env.EMAIL_ACCOUNT, // Change to your verified sender
      subject: "CGV Cinemas",
      text: `CGV Cinemas`,
      html: `<p>code: ${code}</p>`,
    };
    const info = transporter.sendMail(msg);
    console.log(info);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    transporter.close();
  }
};
