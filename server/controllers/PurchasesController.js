var Purchase = require('mongoose').model('Purchase');
//TODO: admin role to can: module.exports.Pay(id), module.exports.Ship(id),
//TODO: get payment details depending on payment method

function paymentDetails(formBody){
    var paymentMethod = formBody.paymentMethod;
    if(paymentMethod === 'creditCard'){
        return {
            //TODO
        };
    } else if (paymentMethod === '') {
        return {
            //TODO
        };
    } else {
        return {
            //TODO
        };
    }
};

module.exports = {
    createPurchase: function(req, res, next) {
        var newPurchaseData = req.body;
        newPurchaseData.purchaseDate = new Date();
        newPurchaseData.paid = false;
        newPurchaseData.shipped = false;
        newPurchaseData.paymentDetails = getPaymentDetails(req.body);
        Purchase.create(newPurchaseData, function(err, purchase) {
            if (err) {
                console.log('Failed to create new purchase: ' + err);
                return;
            }

            res.send(purchase);
        });
    },
    getAllPurchasesForUser: function(req, res) {
        // /api/user/purchases
        var username = req.user.username;
        Purchase.find({user : username}).exec(function(err, collection) {
            if (err) {
                console.log('Error while listing purchases: ' + err);
            }

            res.send(collection);
        })
    }
}