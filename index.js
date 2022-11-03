const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.APP_PORT; 
const { user } = require('./mongo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('This app is running properly');
});

app.post('/get', async (req,res) => {
    try {
        const result = await user.find();
        res.status(200).json({
            status : true,
            response : result
        });
    } catch (error){
        res.status(500).json({
            status : false,
            response : error
        });
    }
});

app.post('/post', async (req,res) => {
    const usr = new user(req.body);
    try {
        const result = await usr.save();
        res.status(200).json({
            status : true,
            response : 'Data Berhasil Di Tambahkan'
        });
    } catch (error){
        res.status(500).json({
            status : false,
            response : error
        });
    }
});

app.listen(port, function() {
    console.log('App running on *: ' + port);
});