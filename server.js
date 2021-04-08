// require("dotenv").config();
const { Sequelize } = require("sequelize");
const express = require('express');
require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
// const results = require('./routes/api/results');
// const surveys = require('./routes/api/surveys');
const path = require('path');
const app = express();

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy-Report-Only',
        "default-src 'self'; font-src 'self'; img-src 'self' http://localhost:* data:; script-src 'self' http:; style-src 'self'; frame-src 'self' https://*.typeform.com/; frame-ancestors https://*.typeform.com/; ",
    );
    next();
});

// var corsOptions = {
//     origin: 'https://typeformsem.typeform.com/',
//     optionsSuccessStatus: 200 // For legacy browser support
// }
// console.log(process.env)
// app.use(cors(corsOptions));
// const db = new Sequelize('postgres://arabaghdassarian:@localhost:5432/loxz_survey');
const db = new Sequelize(process.env.PG_CONN_STRING);


try {
    db.authenticate()
        .then(console.log("succesfully connected to db"));
} catch {
    console.log("db connection failed")
}

app.get("/", (req, res) => {
    app.use(express.static("client/build"));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

app.use("/plotly", (req, res) => {
    
})
// app.use('/api/answers', answers);
// app.use('/api/results', results);
// app.use('/api/surveys', surveys);
// app.use('/api/questions', questions);

var port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server running on port ${port}`))