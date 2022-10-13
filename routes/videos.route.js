const express = require("express");
const videosController = require("../controller/video.controller");
const router = express.Router();

router.post('/', (videosController.addVideos))


module.exports = router;