const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('Express Welcome');
});

module.exports = app;