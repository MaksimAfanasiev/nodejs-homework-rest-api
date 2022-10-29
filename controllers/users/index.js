const register = require("./register");
const verify = require("./verify");
const resendVerify = require("./resendVerify");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const patchUser = require("./patchUser");
const patchAvatar = require("./patchAvatar");

module.exports = {
  register,
  verify,
  resendVerify,
  login,
  logout,
  getCurrent,
  patchUser,
  patchAvatar,
};
