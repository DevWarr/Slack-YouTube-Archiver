const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Initial confirmation
app.post("/", (req, res) => {
    console.log(req.body);
    const { token, challenge, type } = req.body;
    if (challenge) {
        res.status(200).json({challenge: `${challenge}`});
    }
});

module.exports = app;