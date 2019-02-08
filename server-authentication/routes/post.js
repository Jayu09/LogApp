const router = require("express").Router();
const post = require("../models/post");
const JWT = require("jsonwebtoken");
const comment = require("../models/comment");

router.get("/", function(req, res) {
  post
    .find()
    .then(post => res.send(post))
    .catch(err => console.log(err));
});

router.post("/", function(req, res) {
  const newPost = new post(req.body);
  const sub = JWT.decode(req.body.token).sub;
  newPost.profileId = sub;
  console.log(newPost);
  newPost
    .save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
});

router.put("/", function(req, res) {
  console.log(req.body);
  const title = req.body.title;
  const content = req.body.content;
  post
    .findOneAndUpdate(
      { _id: req.body._id },
      { $set: { title: title, content: content } }
    )
    .then(post => res.send(post))
    .catch(err => console.log(err));
});

router.post("/delete", function(req, res) {
  console.log(req.body);
  post
    .findOneAndRemove({ _id: req.body.payload })
    .then(res => comment.findOneAndRemove({ postId: req.body.payload }))
    .then(post => res.send(post))
    .catch(err => console.log(err));
});

module.exports = router;
