var Purchase = require('mongoose').model('Purchase');
//TODO: only admin role to can: module.exports.update()
//TODO: add validation to payment details

function isComposedOfDigits(cardNumber){
    var isnum = /^\d+$/.test(cardNumber);
    return isnum;
}

function validateCreditCard(cardNumber, securityCode){
    return typeof(cardNumber) == 'string' &&
        cardNumber.length == 12 &&
        isComposedOfDigits(cardNumber);
}

function validatePaymentDetails(formBody){
    var paymentMethod = formBody.paymentMethod;
    if(paymentMethod === 'creditCard'){
        var valid = validateCreditCard(formBody.cardNumber, formBody.securityCode);
        if(!valid){
            throw {message: 'Invalid card number and/or security code!'};
        }
    } else if (paymentMethod === 'paymentOrder') {
        return {
            code: formBody.paymentOrderNumber
        };
    } else {
        // cash on delivery
        return {

        };
    }
}

function paymentDetails(formBody){
    var paymentMethod = formBody.paymentMethod;
    if(paymentMethod === 'creditCard'){
        return {
            cardNumber: formBody.cardNumber
        };
    } else if (paymentMethod === 'paymentOrder') {
        return {
            code: formBody.paymentOrderNumber
        };
    } else {
        // cash on delivery
        return {

        };
    }
};

module.exports = {
    createPurchase: function(req, res, next) {
        var newPurchaseData = req.body;
        newPurchaseData.purchaseDate = new Date();
        newPurchaseData.paid = false;
        newPurchaseData.shipped = false;
        validatePaymentDetails(req.body);
        newPurchaseData.paymentDetails = getPaymentDetails(req.body);
        Purchase.create(newPurchaseData, function(err, purchase) {
            if (err) {
                console.log('Failed to create new purchase: ' + err);
                res.json(err);
                return;
            }

            res.json(purchase);
        });
    },
    getAllPurchasesForUser: function(req, res) {
        // /api/user/purchases
        var username = req.user.username;
        Purchase.find({user : username}).exec(function(err, collection) {
            if (err) {
                console.log('Error while listing purchases: ' + err);
                res.json(err);
                return;
            }

            res.json(collection);
        });
    },
    update: function(req, res){
        // admin/:userId/purchases/:purchaseId
        var id = req.params['purchaseId'];
        //req.body = {shipped: true} AND/OR {paid: true}
        var update = req.body;
        Purchase.findOneAndUpdate({_id: id}, {paid: true}).exec(function(err){
            if (err) {
                console.log('Error while updating purchase: ' + err);
                res.json(err);
                return;
            }
        });
    }
}