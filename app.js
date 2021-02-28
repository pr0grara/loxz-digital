const express = require("express");

const app = express();

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("LOXZ DIGITAL")
});

app.listen(port, () => console.log(`app running on port ${port}`));