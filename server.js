var express = require('express');

var env = process.env.NODE_ENV || 'development';

var app = express();
var envConfig = require('./server/config/env-config')[env];
require('./server/config/express-config')(app, envConfig);
require('./server/config/mongoose-config')(envConfig);
require('./server/config/passport-config')();
require('./server/config/routes-config')(app);

app.listen(envConfig.port);
console.log('Server running on port: ' + envConfig.port);