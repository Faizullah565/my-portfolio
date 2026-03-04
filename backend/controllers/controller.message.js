import Message from "../models/Message.js"
import transporter from "../utils/nodemailer.js"
import dotenv from "dotenv"
dotenv.config()
export const message = async (req, res) => {
    try {
        const message = new Message(req.body)
        console.log("🚀 ~ message ~ message:", message)
        await message.save()
        const mailOptionToClient = {
            from: process.env.SMTP_SENDER,
            to: req.body.email,
            subject: "Thank you for contacting - Faizullah Portfolio",
            // text: "Hello world?", // Plain-text version of the message
            html: `<div>
            <b>Dear ${req.body.name},</b>
            <p>Thank you for reaching out through my portfolio website. 
            I have received your message and appreciate your interest in working with me.
            </p>
            <p>I will review your inquiry and get back to you within 24 to 48 hours.</p>
            <p>If your matter is urgent, feel free to reply to this email.</p>
            <p>Best regards,</p>
            <p><b>Faizullah</b></p>
            <p>Email:${process.env.SMTP_SENDER}</p>
            <p>Portfolio: http://localhost:5173/</p>
            </div >`,
        }
        const clientMsg = await transporter.sendMail(mailOptionToClient)

        const mailOptionToMe = {
            from:process.env.SMTP_SENDER,
            to: process.env.SMTP_SENDER,
            subject: "New message received from your portfolio",
            html: `<div>
            <p>New message received from your portfolio contact form.
            The form submitted by ${req.body.name}, and their email address is ${req.body.email}. and 
            Their message is: ${req.body.message}.</p>
            </div >`,
        }
        const receiverMsg = await transporter.sendMail(mailOptionToMe)
        
        return res.status(200).json({ message: "Message send successfully"})
    } catch (error) {
        return res.status(500).json({ success: false, message: "internel server error", error })
    }
}