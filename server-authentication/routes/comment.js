const router = require("express").Router();
const comment = require("../models/comment");
const JWT = require("jsonwebtoken");

router.get("/", function(req, res) {
  comment
    .find()
    .then(comment => res.send(comment))
    .catch(err => console.log(err));
});

router.post("/", function(req, res) {
  const newComment = new comment(req.body);
  const sub = JWT.decode(req.body.token).sub;
  newComment.profileId = sub;
  newComment
    .save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
});
router.post("/delete", function(req, res) {
  comment
    .findOneAndRemove({ _id: req.body.payload })
    .then(post => res.send(post))
    .catch(err => console.log(err));
});

module.exports = router;
