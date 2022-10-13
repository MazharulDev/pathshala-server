const express = require("express");
const videosController = require("../controller/video.controller");
const router = express.Router();

router.post('/', (videosController.addVideos))
router.get("/", videosController.getVideos)


module.exports = router;