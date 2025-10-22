const fs = require("fs").promises;
const nodemailer = require("nodemailer");

const smtpConfig = {
  host: "smtp.gmail.com", // Gmail SMTP server
  port: 587, // TLS port
  secure: false, // false for TLS, true for SSL (port 465)
  auth: {
    user: "shubhamtestuser12@gmail.com",
    pass: "xdhmyoeqhebmxrcs", // your App Password
  },
};

// Email details
const mailOptions = {
  from: '"QA Automation Bot" <shubhamtestuser12@gmail.com>', // Must match your Gmail
  to: "shubhammotwani2000@gmail.com",
  subject: "Automated Test Execution Report",
  html: "", // This will be filled with content from the txt file
};

async function sendTestReport(filePath) {
  try {
    // Read the HTML content from the txt file
    const htmlContent = await fs.readFile(filePath, "utf-8");
    mailOptions.html = htmlContent;

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

console.log("===================Sending test report email...");
sendTestReport("results/summary.txt"); // Path to the file containing HTML content
console.log("===================Email function executed.");
