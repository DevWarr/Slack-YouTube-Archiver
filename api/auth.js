variables = require("../utils/variables.js");

exports.run = (token) => new Promise((res, req) => {
    if (token === variables.token) {
        res(true);
    } else res(false);
})