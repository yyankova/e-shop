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
            Product.create({
                picture: '',
                name: 'Black and white blazer',
                description: 'Description some description',
                price: 10.3,
                count: 10,
                categories: ['casual', 'sport']
            }).then(function(product){
                product.picture = __dirname + '/../../app/images/' + product._id + '.jpeg';
            });
            Product.create({
                picture: '',
                name: 'Skinny Jeans',
                description: 'Description some description',
                price: 10.3, count: 10,
                categories: ['winter', 'sport']
            }).then(function(product){
                product.picture = __dirname + '/../../app/images/' + product._id + '.jpeg';
            });
            Product.create({
                picture: '',
                name: 'Ripped Jeans',
                description: 'Description some description',
                price: 10.7,
                count: 10,
                categories: ['summer', 'basic']
            }).then(function(product){
                product.picture = __dirname + '/../../app/images/' + product._id + '.jpeg';
            });
            Product.create({
                picture: '',
                name: 'White skirt',
                description: 'Description some description',
                price: 10.9,
                count: 10,
                categories: ['basic', 'casual']
            }).then(function(product){
                product.picture = __dirname + '/../../app/images/' + product._id + '.jpeg';
            });
            Product.create({
                picture: '',
                name: 'Skinny trousers',
                description: 'None',
                price: 10.3,
                count: 10,
                categories: ['winter']
            }).then(function(product){
                product.picture = __dirname + '/../../app/images/' + product._id + '.jpeg';
            });
            console.log('Products seeded.');
        }
    });
};
