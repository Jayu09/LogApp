const users = require("../models/users");
const bcrypt = require("bcryptjs");

JWToken = user => {
  return JWT.sign(
    {
      iss: "Demo",
      sub: user._id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    "secrete"
  );
};

module.exports = {
  signIn: async (req, res, next) => {
    const newUser = new users(req.body);
     return res.send(req.body);
  }
};
