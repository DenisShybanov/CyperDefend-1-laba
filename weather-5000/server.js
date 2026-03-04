const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/weather-widget.js", (req, res) => {
    res.type("application/javascript");
    res.send(`
        document.getElementById("weather").innerHTML =
            "<h3>Weather Widget</h3><p>Kyiv: +5°C</p>";
    `);
});

app.listen(5000, () => {
    console.log("WeatherApp running on http://localhost:5000");
});