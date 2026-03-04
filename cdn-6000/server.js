const express = require("express");
const app = express();

app.get("/react.js", (req, res) => {
    res.type("application/javascript");
    res.send(`console.log("React loaded from CDN");`);
});

app.get("/styles.css", (req, res) => {
    res.type("text/css");
    res.send(`
        body {
            font-family: Arial;
            background-color: #f4f4f4;
        }
        h1 {
            color: navy;
        }
    `);
});

app.listen(6000, () => {
    console.log("StaticHost running on http://localhost:6000");
});