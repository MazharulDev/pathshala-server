const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.addVideos = async (req, res) => {
    try {
        const db = getDb();
        const video = req.body;
        const result = await db.collection("videos").insertOne(video);
        res.send(result)
    } catch (error) {

    }
};

module.exports.getVideos = async (req, res) => {
    try {
        const db = getDb()
        const videos = await db.collection("videos").find().toArray();
        res.send(videos);
    } catch (error) {

    }
}
