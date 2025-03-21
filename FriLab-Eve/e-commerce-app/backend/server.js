// npm install express twilio cors body-parser dotenv
require("dotenv").config();
const express = require("express");
const twilio = require("twilio");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors())
app.use(bodyParser.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

// Send OTP
app.post("/send-otp", async (req, res) => {
    try {
        const { phone } = req.body;
        console.log("Phone num:",phone);
        const verification = await client.verify
        .v2.services(serviceSid).verifications.create({
            to: `+91${phone}`,
            channel: "sms"
        });
        res.status(200).send(verification);
    } catch (error) {
        res.status(500).send(error);
    }
})

const PORT = 7878;
app.listen(PORT, () => console.log("Server started at PORT :",PORT));