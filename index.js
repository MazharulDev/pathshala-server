const express = require('express');
const cors = require('cors');
const { connectToServer } = require('./utils/dbConnect');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
const videosRoute = require("./routes/videos.route")
const likeDislikeRoute = require("./routes/likeDislike.route")

//middleware
app.use(cors());
app.use(express.json());

//connect to server
connectToServer((err) => {
    if (!err) {
        app.listen(port, () => {
            console.log("Listening to port", port);
        })
    } else {
        console.log("This is server error", err);
    }
})

app.use("/videos", videosRoute)
app.use("/likeDislike", likeDislikeRoute)

app.get('/', (req, res) => {
    res.send('running test')
});
