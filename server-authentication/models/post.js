const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
  {
    profileId: {
      type: String,
      require: true
    },
    content: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
