const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Читаємо параметр запуску
const modeIndex = process.argv.indexOf("--mode");
const mode = modeIndex !== -1 ? process.argv[modeIndex + 1] : "normal";

// Віддаємо weather-widget.js динамічно
app.get("/weather-widget.js", (req, res) => {
    res.type("application/javascript");
    res.send(`
        document.addEventListener("DOMContentLoaded", function() {
            const WEATHER_MODE = "${mode}";
            if (WEATHER_MODE === "breach1") {
                const username = document.getElementById('username');
                alert("HACKED: I can see your cookies: " + document.cookie +
                      " and User: " + (username ? username.innerText : "Unknown"));
            } else {
                console.log("Current temperature: 5°C");
            }
        });
    `);
});

// Статика (якщо потрібна)
app.use(express.static(path.join(__dirname)));

app.listen(5000, () => {
    console.log(`WeatherApp running on http://localhost:5000 in mode: ${mode}`);
});