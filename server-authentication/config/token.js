const JWT = require("jsonwebtoken");
const secrete = require("./secrete");

module.exports = {
  JWTokens: user => {
    return JWT.sign(
      {
        iss: "Demo",
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
      },
      secrete
    );
  }
};
