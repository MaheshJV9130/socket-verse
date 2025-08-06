import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service : 'gmail',
  auth: {
    user: "maheshvispute082@gmail.com",
    pass: "xbms ftxf igji cotv",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log('Error verifying transporter:', error);
  } else {
    console.log('Server is ready to take messages:', success);
  }
});

const sendEmail = async (to, subject, text, html = null) => {
  const mailOptions = {
    from: `"chat app" <maheshvispute082@gmail.com>`,
    to,
    subject,
    text,
    html, 
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.response);
    return result;
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};

export default sendEmail