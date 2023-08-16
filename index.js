const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { user } = require('./mongo');

dotenv.config();
const port = process.env.APP_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('This app is running properly');
});

app.get('/getUser/:name', async (req,res) => {
    var name = req.params.name;
    const result = await user.find({$or: [{name : name}]});
    res.status(200).json({
        status : true,
        response : result
    });
});

app.get('/getUsers', async (req,res) => {
    const result = await user.find();
    res.status(200).json({
        status : true,
        response : result
    });
});

app.post('/addUser', async (req,res) => {
    const usr = new user(req.body);
    await usr.save();
    res.status(200).json({
        status : true,
        response : 'Success Added User'
    });
});

// if (process.env.NODE_ENV == 'test') {
    module.exports = app;
// } else {
//     app.listen(port, function() {
//         console.log('App running on *: ' + port);
//     });
// }
