var Review = require('mongoose').model('Review');

module.exports = {
    createReview: function(req, res, next) {
        var newReviewData = req.body;
        newReviewData.date = new Date();
        newReviewData.user = req.user.username;
        Review.create(newReviewData, function(err, review) {
            if (err) {
                console.log('Failed to create new review: ' + err);
                return;
            }

            res.send(review);
        });
    },
    getAllReviewsForProduct: function(req, res) {
        // /api/products/reviews
        var productId = req.body.productId;
        Purchase.find({product : productId}).exec(function(err, collection) {
            if (err) {
                console.log('Error while listing reviews: ' + err);
            }

            res.send(collection);
        })
    }
}