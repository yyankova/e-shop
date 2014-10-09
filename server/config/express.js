var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    busboy = require('connect-busboy'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function (app, config) {
    app.set('view engine', 'jade');
    app.set('views', config.rootPath + '/server/views');
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(busboy({ immediate: true }));
    app.use(session({
        secret: 'magic unicorns',
        resave: true,
        saveUninitialized: true
    }));
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/app',
            compile: function (str, path) {
                return stylus(str).set('filename', path);
            }
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/app'));
};