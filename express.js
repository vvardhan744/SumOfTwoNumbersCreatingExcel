const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
module.exports = () => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(require("./routes/routes"))
    return app;
}