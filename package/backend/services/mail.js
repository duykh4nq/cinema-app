require("dotenv").config();

const nodemailer = require("nodemailer");

const config = {
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: 587,
  ignoreTLS: false,
  secure: false,
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
};

function getDateWithoutTime(date) {
  return require("moment")(date).format("DD-MM-YYYY");
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = "";
  if (parseInt(hour) > 12) time = hour + ":" + min + " PM";
  else time = hour + ":" + min + " AM";
  return time;
}

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
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    transporter.close();
  }
};

exports.sendMailBookingSuccess = (email, content) => {
  const transporter = nodemailer.createTransport(config);
  try {
    let kk = "";
    for (let i = 0; i < content.listIdTickets.length; i++) {
      if (i == content.listIdTickets.length - 1)
        kk += "   <p>Ticket " + (i + 1).toString() + ": " + content.listIdTickets[i].toString() + "</p>";
      else kk += "   <p>Ticket " + (i + 1).toString() + ": " + content.listIdTickets[i].toString() + "</p>";
    }

    const msg = {
      to: email, // Change to your recipient
      from: process.env.EMAIL_ACCOUNT, // Change to your verified sender
      subject: "CGV Cinemas",
      text: `CGV Cinemas`,
      html: `<h2>Information Tickets</h2>
        <p>Movie: ${content.info.name_movie}</p>
        <p>Room: ${content.info.name_room}</p>
        <p>Category Room: ${content.info.name_cat}</p>
        <p>Date: ${getDateWithoutTime(content.info.start_point)}</p>
        <p>Time: ${timeConverter(content.info.start_point)}</p>
        <p>ID Ticket:</p>
        ${kk}
      `, // html body,
    };
    const info = transporter.sendMail(msg);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    transporter.close();
  }
};
