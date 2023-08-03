// Create web server
// 1. npm init
// 2. npm install express --save
// 3. npm install body-parser --save

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// Create web server
app.listen(3000, () => {
    console.log('Web server is running on port 3000');
});

// Create route
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Create route
app.get('/comments', (req, res) => {
    res.json({
        status: 'success',
        data: [
            { id: 1, author: 'Thanh', content: 'Hello' },
            { id: 2, author: 'Thang', content: 'Hi' },
            { id: 3, author: 'Dung', content: 'Hey' },
        ]
    });
});

// Create route
app.post('/comments', (req, res) => {
    const { author, content } = req.body;
    res.json({
        status: 'success',
        data: {
            id: Math.floor(Math.random() * 1000),
            author,
            content,
        }
    });
});

// Create route
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { author, content } = req.body;
    res.json({
        status: 'success',
        data: {
            id: Number(id),
            author,
            content,
        }
    });
});

// Create route
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        status: 'success',
        data: {
            id: Number(id),
        }
    });
});
