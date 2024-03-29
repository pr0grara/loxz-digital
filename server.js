// require("dotenv").config();
const { Sequelize } = require("sequelize");
const express = require('express');
require('dotenv/config');
const bodyParser = require('body-parser');
const videos = require('./routes/api/videos');
const path = require('path');
const app = express();
const fs = require('fs');
const reportsRoute = require('./routes/html/reports');
const pathToIndex = path.join(__dirname, 'client/build/index.html');

// app.use(function (req, res, next) {
//     res.setHeader(
//         'Content-Security-Policy-Report-Only',
//         "default-src 'self'; font-src 'self'; img-src 'self' http://localhost:* data:; script-src 'self' http:; style-src 'self'; frame-src 'self' https://*.typeform.com/; frame-ancestors https://*.typeform.com/; script-src 'sha256-bMRr0IEAsc+qXY7NTMcfhf0mtY1WisZpChtwZ2eMDJs='",
//     );
//     next();
// });

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
    console.log(JSON.stringify(req.originalUrl));
    // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    const raw = fs.readFileSync(pathToIndex).toString();
    const pageTitle = "Home";
    const updated = raw.replace("__PAGE_META__", `<title>${pageTitle}</title>`)
    res.send(updated);
})

// app.get("(/*)", (req, res) => {
//     res.send("not found");
// })

// app.get("/reports", (req, res) => {
//     console.log(JSON.stringify(req.originalUrl));
//     app.use(express.static("client/build"));
//     // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     const raw = fs.readFileSync(pathToIndex).toString();
//     const pageTitle = "Reports";
//     const updated = raw.replace("__PAGE_META__", `<title>${pageTitle}</title><div className="url-data" data-url="reports"></div>`)
//     res.send(updated);
// })


// app.get('/reports/q2-2021', (req, res) => {
    //     let pathToHtml = path.join(__dirname, 'html/reports/q2-2021.html');
    //     let raw = fs.readFileSync(pathToHtml).toString();
    //     app.use(express.static("./"));
    //     res.send(raw);
    // })
app.use('/reports', reportsRoute);
    
app.use("/plotly", (req, res) => {
    
})

app.get("/videos", (req, res) => {
    console.log("__dirname:", __dirname)
    res.sendFile("file_example_MP4_480_1_5MG.mp4", { root: __dirname + "/assets/videos" })
})
app.use('/api/videos', videos);
// app.use('/api/results', results);
// app.use('/api/surveys', surveys);
// app.use('/api/questions', questions);

var port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server running on port ${port}`))