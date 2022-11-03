const mongoose = require('mongoose');
mongoose.connect(process.env.MONGURI, {useNewUrlParser : true});

const user = mongoose.model('users', {
    name : String,
    email : String,
    gender : String,
}, 'users');

module.exports = {
    user
};


