const {Router} = require ('express');
const router = Router();

const mysqlConnection = require('../database');

app.post('/upload', (req, res) => {
    res.send('upload')
})