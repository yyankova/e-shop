var auth = require('./auth'),
    controllers = require('../controllers');
//TODO: not finished

module.exports = function (app){
//    //users
//    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
//    app.post('/api/users', controllers.users.createUser);
//    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);
//
//    //products
//    app.get('/api/products', controllers.products.getAllProducts);
//    app.get('/api/products/:id', controllers.products.getDetails);
//    app.post('/api/products', auth.isInRole('admin'), controllers.products.createProduct);
//    app.post('/api/products/:id', auth.isAuthenticated, controllers.purchases.createPurchase);
//
//    //categories
//    //app.get('/api/categories/', controllers.categories.getAllCategories);
//    //app.post('/api/categories', auth.isInRole('admin'), controllers.categories.createCategory);
//
//    //purchases
//    app.get('/api/user/purchases/', auth.isAuthenticated, controllers.purchases.getAllPurchasesForUser);
//
//    //reviews
//
//    //partials
//    app.get('/partials/:partialName', function(req, res) {
//        res.render('../../app/views/partials/' + req.params.partialName)
//    });
//
//    app.post('/login', auth.login);
//    app.post('/logout', auth.logout);
//
//    app.get('/api/*', function(req, res){
//        res.status(404);
//        res.end();
//    });
//    app.get('*', function(req, res) {
//        res.render('index', {currentUser: req.user});
//    });
    app.get('/', function(req, res){
        res.send('opopopo');
    });
}