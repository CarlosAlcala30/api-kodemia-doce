const mongoose = require('mongoose');

const DB_USER = 'Carlos';
const DB_PASSWORD = 'EUMtZZTG6J9bAeNX';
const DB_HOST = 'kodemia-12va.7djcx.mongodb.net';
const DB_NAME = 'kodemia';

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect(){
    return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = connect;