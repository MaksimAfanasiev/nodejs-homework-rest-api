const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
  token: String,
  avatarURL: String,
});

const User = model("user", userSchema);

const usersPostSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().optional(),
});

const usersPatchSchema = Joi.object({
  subscription: Joi.valid("starter", "pro", "business"),
});

const userResendVerifySchema = Joi.object({
  email: Joi.string().email().required(),
});

const schemas = {
  usersPostSchema,
  usersPatchSchema,
  userResendVerifySchema,
};

module.exports = {
  User,
  schemas,
};
