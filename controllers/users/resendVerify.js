const { RequestError, verificationMailSender } = require("../../helpers");
const { User, schemas } = require("../../models/users");

const resendVerify = async (req, res, next) => {
  try {
    const { error } = schemas.userResendVerifySchema.validate(req.body);

    if (error) {
      throw RequestError(400, "missing required field email");
    }

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user.verify) {
      throw RequestError(400, "Verification has already been passed");
    }

    const verificationToken = user.verificationToken;

    await verificationMailSender(email, verificationToken);

    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerify;
