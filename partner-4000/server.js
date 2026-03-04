const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Статика для JS файлів
app.use(express.static(path.join(__dirname)));

// API для нових повідомлень
app.get("/new-messages", (req, res) => {
    res.json({ count: 2 });
});

app.listen(4000, () => {
    console.log("TrustCo running on http://localhost:4000");
});