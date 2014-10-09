var Review = require('mongoose').model('Review');

module.exports = {
    createReview: function(req, res, next) {
        //req.body = {text: '', productId: '', product: 'name'}
        var newReviewData = req.body;
        newReviewData.date = new Date();
        newReviewData.userId = req.user._id;
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
        // /api/products/:id/reviews
        var productId = req.body.productId;
        Purchase.find({productId : productId}).exec(function(err, collection) {
            if (err) {
                console.log('Error while listing reviews: ' + err);
            }

            res.send(collection);
        });
    },
    getAllReviewsFromUser: function(req, res) {
        // /api/users/:id/reviews
        var userId = req.body.productId;
        Purchase.find({userId : userId}).exec(function(err, collection) {
            if (err) {
                console.log('Error while listing reviews: ' + err);
            }

            res.send(collection);
        });
    },
    remove: function(req, res){
        // delete on /api/users/:userId/reviews/:reviewId
        var id = req.params['reviewId'];
        Purchase.findOneAndRemove({_id: id}).exec(function(err){
            if(err){
                console.log('Error deleting review');
            }
        });
    },
    update: function(req, res){
        // put on /api/users/:userId/reviews/:reviewId
        var id = req.params['reviewId'];
        Purchase.findOneAndUpdate({_id: id}, req.body).exec(function(err){
            if(err){
                console.log('Error deleting review');
            }
        });
    }
}