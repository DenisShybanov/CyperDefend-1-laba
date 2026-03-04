const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// Читаємо конфіг та версію
const version = fs.readFileSync(path.join(__dirname, "version.txt"), "utf8").trim();
const config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json"), "utf8"));

// === Mode1: дозволяємо всі origin ===
if (config.mode === "mode1") {
    app.use(cors());
}

// Дані емейлів
const emails = [
    { id: 1, sender: "Wolf@example.com", subject: "Welcome to SecureMail", body: "Hello John, welcome to SecureMail Pro. Have a secure day!" },
    { id: 2, sender: "Stash@example.com", subject: "Meeting Reminder", body: "John, don't forget our meeting at 3 PM today." }
];

app.get("/emails", (req, res) => res.json(emails));
app.use(express.static(path.join(__dirname)));

// Основна сторінка
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>${config.appName}</title>
            <link rel="stylesheet" href="http://localhost:7000/styles.css">
        </head>
        <body>
            <div class="logo-container">
                <img src="http://localhost:7000/logo.png" alt="Logo">
            </div>
            <h1>${config.appName}</h1>
            <p>Version: ${version}</p>
            <div id="username">John Smith</div>
            <div id="sidebar"></div>
            <div id="main"><p>Select an email to view its content</p></div>

            <script src="http://localhost:7000/react-mock.js"></script>
            <script src="http://localhost:4000/support.js"></script>
            <script src="http://localhost:5000/weather-widget.js"></script>
            <script src="main.js"></script>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log(`[System] Starting ${config.appName} v${version}...`);
    console.log(`Mode: ${config.mode}`);
    console.log("GoodHost running on http://localhost:3000");
});