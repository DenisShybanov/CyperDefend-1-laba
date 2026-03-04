const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>WebMail App</title>
                <link rel="stylesheet" href="http://localhost:6000/styles.css">
            </head>
            <body>
                <h1>WebMail Dashboard</h1>
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
    console.log("GoodHost running on http://localhost:3000");
});