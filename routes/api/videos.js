const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.status(200).send("this is the videos root route")
})

router.get("/video", (req, res) => {
    let param = req.query;
    console.log(param, __dirname)
    if (param) return res.status(200).sendFile(param.title, { root: __dirname + "../../../assets/videos"})
    res.status(404).send("params not found")
});

module.exports = router;
