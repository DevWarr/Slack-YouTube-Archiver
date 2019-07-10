const express = require("express");
const cors = require("cors");
const app = express();
const variables = require("../utils/variables.js");
const auth = require("./auth.js");

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);

    const { token, challenge, type } = req.body;
    // If it's a url verification, 
    if (type === "url_verificaltion" && challenge) {
        // Set our value, and return the challenge
        variables.token = token;
        res.status(200).json({challenge: `${challenge}`});

        // Otherwise...
    } else {
        // Authorize the token
        auth.run(token).then(res => {
            if (res) {

            }
            else {
                res.status(403).json({error: "invalid token"});
            }
        })
    }
});

module.exports = app;