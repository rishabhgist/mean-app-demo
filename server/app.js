const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Header', "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/posts", (req, res, next) => {
    console.log();
});

app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'fihahda',
            title: 'First server post',
            content: 'Form Server'
        },
        {
            id: 'dsfs683',
            title: 'Second server post',
            content: 'Form Server !!'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched  successfully',
        posts: posts
    });
});

module.exports = app;