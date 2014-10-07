var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    categories: [String], //one product may be in several categories
    count: {type: Number, min: 0, required: true},
    name: {type: String, required: true},
    description: {type: String, maxLength: 300},
    picture: {type: String},
    price: Number,
    shipDuration: Number
});

var Product = mongoose.model('Product', productSchema);

module.exports.seed = function() {
    Product.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find products: ' + err);
            return;
        }

        if (collection.length === 0) {
            Product.create({name: 'Product 1', description: 'Description some description', price: 10.3, count: 10, categories: ['category 1', 'category 2']});
            Product.create({name: 'Product 2', description: 'Description some description', price: 10.3, count: 10, categories: ['category 1', 'category 3']});
            Product.create({name: 'Product 3', description: 'Description some description', price: 10.7, count: 10, categories: ['category 1']});
            Product.create({name: 'Product 4', description: 'Description some description', price: 10.9, count: 10, categories: ['category 1', 'category 3']});
            Product.create({name: 'Product 5', description: 'None', price: 10.3, count: 10, categories: ['category 1']});
            console.log('Products seeded.');
        }
    });
};
