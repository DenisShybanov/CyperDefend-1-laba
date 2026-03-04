const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// === READ CONFIG FILES ON STARTUP ===
const versionPath = path.join(__dirname, "version.txt");
const configPath = path.join(__dirname, "config.json");

const version = fs.readFileSync(versionPath, "utf8").trim();
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

// === початок серверу ===
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>${config.appName}</title>
                <link rel="stylesheet" href="http://localhost:6000/styles.css">
            </head>
            <body>
                <h1>${config.appName}</h1>
                <p>Version: ${version}</p>
                <div id="weather"></div>
                <div id="chat"></div>

                <script src="http://localhost:6000/react.js"></script>
                <script src="http://localhost:4000/chat-widget.js"></script>
                <script src="http://localhost:5000/weather-widget.js"></script>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log(`[System] Starting ${config.appName} v${version}...`);
    console.log(`Mode: ${config.mode}`);
    console.log("GoodHost running on http://localhost:3000");
});