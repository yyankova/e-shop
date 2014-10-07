var mongoose = require('mongoose');
//var productSchema = mongoose.model('Product').schema;

var purchaseSchema = mongoose.Schema({
    product: Object,
    user: String,
    purchaseDate: Date,
    paid: Boolean,
    paymentMethod: {type: String, required: true},
    paymentDetails: {type: Object},
    shipDate: Date,
    shipped: Boolean
});

var Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports.seed = function() {
    Purchase.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find products: ' + err);
            return;
        }

        if (collection.length === 0) {
            Purchase.create({user: 'user 1', paymentMethod: 'credit-card'});
            Purchase.create({user: 'user 2', paymentMethod: 'cash'});
            console.log('Purchases seeded.');
        }
    });
};