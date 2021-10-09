const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    let pathToReports = path.join(__dirname, '../../html/reports-index/reports-index.html');
    let raw = fs.readFileSync(pathToReports).toString();
    router.use(express.static(path.join(__dirname, '../../')));
    res.send(raw);
})

router.get('/Q2-2021', (req, res) => {
    let pathToReport = path.join(__dirname, '../../html/reports/q2-2021.html');
    let raw = fs.readFileSync(pathToReport).toString();
    router.use(express.static(path.join(__dirname, '../../')));
    res.send(raw);
})

module.exports = router;