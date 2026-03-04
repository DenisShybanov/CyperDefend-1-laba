const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const config = JSON.parse(fs.readFileSync("./config.json"));
const version = fs.readFileSync("./version.txt", "utf8");

console.log(`[System] Starting ${config.appName} v${version}...`);

if (config.mode === "mode1") {
    app.use(cors());
}

app.use(express.static("public"));

const emails = [
    { id: 1, sender: "admin@trustco.com", subject: "Welcome", body: "Welcome to SecureMail!" },
    { id: 2, sender: "alerts@weather.com", subject: "Storm Alert", body: "Heavy rain tomorrow." }
];

app.get("/emails", (req, res) => {
    res.json(emails);
});

app.listen(3000, () => {
    console.log("GoodHost running on http://localhost:3000");
});