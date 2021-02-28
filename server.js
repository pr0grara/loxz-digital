require("dotenv").config();
const { Sequelize } = require("sequelize");
const express = require('express');
const bodyParser = require('body-parser');
// const results = require('./routes/api/results');
// const surveys = require('./routes/api/surveys');
const path = require('path');

const app = express();

const db = new Sequelize('postgres://arabaghdassarian:@localhost:5432/loxz_survey');

try {
    db.authenticate()
        .then(console.log("succesfully connected to db"));
} catch {
    console.log("didn't work")
}

app.get("/", (req, res) => {
    app.use(express.static("client/build"));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

// app.use('/api/answers', answers);
// app.use('/api/results', results);
// app.use('/api/surveys', surveys);
// app.use('/api/questions', questions);

var port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server running on port ${port}`))