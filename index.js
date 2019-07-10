const express = require("express");
const app = express();


// Initial confirmation
app.post("/", (req, res) =>{
    const test = req.body;
    if (test.type = "url_verification") {
        res.send(200).json({challenge: test.challenge});
    }
});