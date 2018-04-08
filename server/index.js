const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    path = require('path'),
    python = require('python-shell'),
    Q = require('q');

const Database = require('./db.js');
let dbconfig = {
    savelocation: path.join(__dirname + '/..' + '/uploaded-datasets')
}
const db = new Database(dbconfig);

require('./static-paths')(express, app, path);
require('./models.js')(python, path, Q);
require('./pugpack.js')(path);
require('./api')(app, db, path, Q); 

const port = 8081;
module.exports = http.listen(port, () => {
console.log('Listeting at port: ' + port);
});