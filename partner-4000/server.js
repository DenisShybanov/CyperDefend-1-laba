const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/chat-widget.js", (req, res) => {
    res.type("application/javascript");
    res.send(`
        document.getElementById("chat").innerHTML =
            "<h3>Support Chat (TrustCo)</h3><button onclick='alert(\"Chat opened\")'>Open Chat</button>";
    `);
});

app.listen(4000, () => {
    console.log("TrustCo running on http://localhost:4000");
});