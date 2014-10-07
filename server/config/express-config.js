var serveStatic = require('serve-static'),//TODO: check if should use connect.static
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),//TODO: fix, deprecated
    passport = require('passport');

function config(app, config){
    app.set('view engine', 'jade');
    app.set('views', config.rootPath + '/server/views');
    app.use(cookieParser);
    app.use(bodyParser);
    app.use(session({secret: 'magic cars'}));
    app.use(stylus.middleware({
        src: config.rootPath + '/app',
        compile: function (str, path){
            return stylus(str).set('filename', path);
        }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(serveStatic(config.rootPath + '/app')); //TODO: check if should use connect.static
};

module.exports = config;