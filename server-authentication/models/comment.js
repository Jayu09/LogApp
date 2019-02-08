const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  profileId: {
    type: String,
    require: true
  },
  postId: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  }
});
const commentModel = mongoose.model("comments", commentSchema);
module.exports = commentModel;
