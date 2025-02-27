const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://RP123:mynewpro123@contactdata.ge7tk.mongodb.net/mydatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("DB Connection Error:", err));

// Define Schema & Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  project: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // App password from Google
  },
});

// API Route for Contact Form Submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, project, message } = req.body;

    // ✅ Validate Required Fields (Backend Side)
    if (!name || !email || !project || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // ✅ Save to MongoDB
    const newContact = new Contact({ name, email, project, message });
    await newContact.save();

    // ✅ Email Details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENTS.split(","), // Converts comma-separated emails to an array
      subject: "New Contact Form Submission",
      text: `You have a new message:
  
      Name: ${name}
      Email: ${email}
      Project: ${project}
      Message: ${message}
      
      - Angular App`,
  };

    // ✅ Send Email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email Error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email Sent:", info.response);
        return res.status(201).json({ message: "Data saved & email sent!" });
      }
    });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));