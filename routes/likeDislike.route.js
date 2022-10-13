const express = require("express");
const router = express.Router();
const likeDislikeController = require("../controller/likeDislike.controller")

router.post("/", likeDislikeController.addLike)
router.get("/", likeDislikeController.getLike)
router.post("/dislike", likeDislikeController.addDislike)
router.get("/dislike", likeDislikeController.getDislike)

module.exports = router;