var Product = require('mongoose').model('Product');
//TODO: delete, update, find by id, load file in create/update product

module.exports = {
    createProduct: function(req, res, next) {
        var newProductData = req.body;
        Product.create(newProductData, function(err, product) {
            if (err) {
                console.log('Failed to create new product: ' + err);
                return;
            }

            res.send(product);
        });
    },
    getAllProducts: function(req, res) {
        Product.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Error while listing products: ' + err);
            }

            res.send(collection);
        });
    },
    getAllProductsFromCategory: function(req, res) {
        // /api/products?category=<category>
        var category = req.params.category;
        Product.find({categories : {$elemMatch: {description: category}}}).exec(function(err, collection) {
            if (err) {
                console.log('Error while listing products: ' + err);
            }

            res.send(collection);
        });
    },
    getDetails: function(req, res) {
        var id = req.params.id;
        Product.findOne({_id: id}).exec(function(err, product){
            if (err) {
                console.log('Error while getting details for product: ' + err);
            }

            res.send(product);
        })
    }
}