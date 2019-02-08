const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const post = require("./routes/post");
const comment = require("./routes/comment");
const users = require("./routes/users");
const db = require("./config/keys").URI;
const app = express();
//database connectivity
mongoose
  .connect(db)
  .then(console.log("connected to database"))
  .catch(err => console.log(err));
//app configuration
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: "secrete" }));
app.use(passport.initialize());
app.use(passport.session());
// handle routes
app.use("/api/comments", comment);
app.use("/api/posts", post);
app.use("/api/users", users);
//port declaration
const Port = process.env.PORT || 3010;
app.listen(Port, console.log("server listening at 3010"));
