const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config();

const { MAIL_SENDER, BASE_URL, SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const verificationMailSender = async (email, verificationToken) => {
  const mail = {
    from: MAIL_SENDER,
    to: email,
    subject: "Verification",
    html: `For verification <a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">click here</a>`,
  };

  await sgMail.send(mail);
};

module.exports = verificationMailSender;
