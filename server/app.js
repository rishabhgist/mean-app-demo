const express = require('express');

const app = express();

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