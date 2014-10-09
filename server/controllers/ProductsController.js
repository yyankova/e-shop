var Product = require('mongoose').model('Product'),
    fs = require('fs');
//TODO: delete, update, find by id, load file in create/update product

module.exports = {
    //TODO: validate data
    createProduct: function (req, res, next) {
        //var newProductData = req.body;
        var fstream;
        req.pipe(req.busboy);

        var product = {};

        req.busboy.on('file', function (fieldname, file, filename) {
            fstream = fs.createWriteStream(__dirname + '/../pictures/' + filename);
            file.pipe(fstream);
            product.picture = filename;
        });

        req.busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
            product[fieldname] = val;
        });

        req.busboy.on('finish', function () {
            Product.create({
                    name: req.params.name,
                    description: req.params.description,
                    price: req.params.price,
                    count: req.params.count,
                    categories: req.params.categories},
                function (err, product) {
                    if (err) {
                        console.log('Failed to create new product: ' + err);
                        return;
                    }

                    //res.redirect('/customer');
                    res.send(product);
                });
        });
    },
    getAllProducts: function (req, res) {
        Product.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Error while listing products: ' + err);
            }

            res.send(collection);
        });
    },
    getAllProductsFromCategory: function (req, res) {
        // /api/products?category=<category>
        var category = req.params.category;
        Product.find({categories: {$elemMatch: {description: category}}}).exec(function (err, collection) {
            if (err) {
                console.log('Error while listing products: ' + err);
            }

            res.send(collection);
        });
    },
    getDetails: function (req, res) {
        var id = req.params.id;
        Product.findOne({_id: id}).exec(function (err, product) {
            if (err) {
                console.log('Error while getting details for product: ' + err);
            }

            res.send(product);
        })
    }
}