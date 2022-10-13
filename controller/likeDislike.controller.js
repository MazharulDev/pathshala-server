const { getDb } = require("../utils/dbConnect");

module.exports.addLike = async (req, res) => {
    try {
        const db = getDb();
        const likeInfo = req.body;
        const result = await db.collection("like").insertOne(likeInfo);
        res.send(result)
    } catch (error) {

    }
};
module.exports.getLike = async (req, res) => {
    try {
        const db = getDb();
        const likeInfo = await db.collection("like").find().toArray()
        res.send(likeInfo)
    } catch (error) {

    }
}