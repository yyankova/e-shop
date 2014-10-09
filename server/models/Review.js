var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = mongoose.Schema({
    productId: {type: Schema.Types.ObjectId, ref: 'Product'},
    product: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    user: String,
    text: {type: String, maxLength: 300},
    date: Date
});

var Review = mongoose.model('Review', reviewSchema);

module.exports.seed = function() {
    Review.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find products: ' + err);
            return;
        }

        if (collection.length === 0) {
            Review.create({user: 'user 1', text: 'KLKLKLKLKLKLKLKLKLK'});
            Review.create({user: 'user 2', text: 'irogjklfbghiuosdkl'});
            console.log('Reviews seeded.');
        }
    });
};