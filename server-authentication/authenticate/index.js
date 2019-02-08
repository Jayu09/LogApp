const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const users = require("../models/users");

passport.use(
  new localStrategy(
    {},
    {
      function(payload, done) {
        const email = payload.email;
        const password = payload.password1;
        console.log(email);
        users.findOne({ email: email }).then(user => {
          if (!user) {
            return done(null, false, { msg: "email is not valid" });
          } else {
            const hash = user.password;
            bcrypt.compare(password, hash, function(err, isMatch) {
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { msg: "Invalid Password" });
              }
            });
          }
        });
      }
    }
  )
);
