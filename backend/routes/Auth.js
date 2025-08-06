import express from "express";
import connectDatabase from "../lib/database.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmail from "../lib/emailSender.js";
import genOtp from "../lib/one-time-pass.js";
const router = express.Router();

// Sign Up Route

router.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  await connectDatabase();
  //Check User is Already Exists
  let user = await User.findOne({ email: email });
  if (user) {
    res.json({ status: 404, message: "Email already taken" });
  } else {
    const checkUsername = await User.findOne({ username: username });
    if (checkUsername) {
      res.json({ status: 404, message: "Username already taken" });
    } else {
      //Finally we have new user
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async function (err, hash) {
          const newUser = new User({
            email: email,
            username: username,
            password: hash,
          });
          await newUser.save();

          const token = jwt.sign(
            { email: email, username: username, password: hash },
            process.env.JWT_KEY
          );
          res.cookie("sessionId", token);
          res.json({ status: 200, message: "Sign Up Successfully" });
        });
      });
    }
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  await connectDatabase();
  const checkUsername = await User.findOne({ username: username });
  if (!checkUsername) {
    res.json({ status: 404, message: "User not found , check username" });
  }
  if (checkUsername) {
    let isPassCorrect = await bcrypt.compare(password, checkUsername.password);
    if (isPassCorrect) {
      const token = jwt.sign(
        {
          email: checkUsername.email,
          username: username,
          password: checkUsername.hash,
        },
        process.env.JWT_KEY
      );
      res.cookie("sessionId", token);
      res.json({ status: 200, message: "Logged Successfully" });
    }
    if (!isPassCorrect) {
      res.json({
        status: 404,
        message:
          "Sorry, your password was incorrect",
      });
    }
  }
});
router.post("/forgot", async (req, res) => {
  const { email } = req.body;
  await connectDatabase();
  const checkEmail = await User.findOne({ email: email });
  if (checkEmail) {
    const subject = "chat app otp";
    let otp = genOtp();
    const otpExpiry = Date.now() + 5 * 60 * 1000; // 5 min

    checkEmail.otp = otp;
    checkEmail.otpExpiry = otpExpiry;
    await checkEmail.save();
    const message = `Your SocketVerse OTP is ${otp} to forgot password , this OTP valid upto 5 Minutes , do not share to anyone`;
    try {
      await sendEmail(email, subject, message);
      res.json({ status: 200, message: "Email sent!" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  if (!checkEmail) {
    res.json({ status: 404, message: "Email not found" });
  }
});
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  await connectDatabase();
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    res.json({ status: 404, message: "User Not Found" });
  }
  if (
    findUser.otp == otp &&
    findUser.otpExpiry &&
    findUser.otpExpiry > Date.now()
  ) {
    findUser.otp = null;
    findUser.otpExpiry = null;
    await findUser.save();
    const token = jwt.sign(
      {
        email: findUser.email,
        username: findUser.username,
        password: findUser.hash,
      },
      process.env.JWT_KEY
    );
    res.cookie("sessionId", token);
    res.json({ status: 200, message: "OTP Verifed" });
  } else {
    res.json({ status: 404, message: "OTP Incorrect" });
  }
});
router.post("/logout",(req,res)=>{
  res.clearCookie('sessionId')
  res.json({status : 200 , message : 'Logout Successfully'} )
})
export default router;
