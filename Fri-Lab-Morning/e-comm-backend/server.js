// npm install express cors twilio body-parser dotenv
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

const client = twilio(accountSid, authToken);

// Send OTP
app.post("/send-otp", async(req, res) => {
    const { phone } = req.body;
    console.log("Phone num:",phone);
    try {
        const verification = await client
        .verify
        .v2.services(serviceSid)
        .verifications.create({
            to: `+91${phone}`,
            channel: "sms" 
        });
        res.status(200).send(verification);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// Verify OTP
app.post("/verify-otp", async(request, response) => {
    const {phone, otp} = request.body;
    try {
        const verification = await client
        .verify
        .v2
        .services(serviceSid).verificationChecks.create({
            to: `+91${phone}`,
            code: otp
        })
        if(verification.status === "approved") {
            response.status(200).send({message: "Phone number verified"})
        } else {
            response.status(400).send({message: "Invalid OTP"})
        }
    } catch (error) {
        response.status(500).send(error)
    }
})


const PORT = 4000;
app.listen(PORT, () => console.log("Server started at :",PORT));
