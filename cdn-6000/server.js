const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Mode1: дозволяємо всі origin
app.use(cors());

// Статика
app.use(express.static(path.join(__dirname)));

// Mock React
app.get("/react.js", (req, res) => {
    res.type("application/javascript");
    res.send(`console.log("React loaded from CDN");`);
});

// CSS
app.get("/styles.css", (req, res) => {
    res.type("text/css");
    res.send(`
        body { font-family: Arial; background-color: #ffffff; }
        h1 { color: navy; }
        .logo-container img { width: 120px; height: auto; }
        #username { font-weight: bold; color: blue; }
    `);
});

// Mock React v1
app.get("/react-mock.js", (req, res) => {
    res.type("application/javascript");
    res.send(`console.log("React v1.0.0 loaded from CDN (Port 7000)");`);
});

app.listen(7000, () => {
    console.log("StaticHost running on http://localhost:7000");
});