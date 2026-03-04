const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/react.js", (req, res) => {
    res.type("application/javascript");
    res.send(`console.log("React loaded from CDN");`);
});

app.get("/styles.css", (req, res) => {
    res.type("text/css");
    res.send(`
        body {
            font-family: Arial;
            background-color: #ffffff;
        }
        h1 {
            color: navy;
        }
        .logo-container img {
            width: 120px;
            height: auto;
        }
    `);
});

app.listen(7000, () => {
    console.log("StaticHost running on http://localhost:7000");
});