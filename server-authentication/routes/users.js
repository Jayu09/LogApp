const router = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const JWT = require("jsonwebtoken");
const token = require("../config/token");
const users = require("../models/users");
const { validateUser, schemas } = require("../helpers/schemaHelpers");
const passAuth = passport.authenticate("local", { session: false });
const signIn = require("../handlers/userhandle");

router.post(
  "/register",
  validateUser(schemas.userSchema),
  async (req, res, next) => {
    const newUser = new users(req.body);
    await bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password1, salt, function(err, hash) {
        newUser.password = hash;
        newUser
          .save()
          .then(res => {
            const JWTtoken = JWToken(newUser);
            return res.json({
              msg: "success",
              token: JWTtoken,
              _id: newUser._id
            });
          })
          .catch(err => {
            return res.json({ msg: "email is already in use" });
          });
      });
    });
  }
);

router.post("/authentication", function(req, res) {
  users.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.json({ msg: "email is not valid" });
    } else {
      const hash = user.password;
      bcrypt.compare(req.body.password, hash, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          const JWTtoken = JWT.sign(
            {
              iss: "Demo",
              sub: user._id,
              iat: new Date().getTime(),
              exp: new Date().setDate(new Date().getDate() + 1)
            },
            "secrete"
          );
          return res.json({
            msg: "success",
            token: JWTtoken,
            _id: user._id
          });
        } else {
          return res.json({ msg: "please enter valid email and password" });
        }
      });
    }
  });
});
module.exports = router;
