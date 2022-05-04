const StudentController = require('./controllers/StudentController');

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.json('API of Visual Thinking welcome')
});

app.listen(port, () => {
    console.log(`Visual Thinking API listen on port ${port}!`)
});