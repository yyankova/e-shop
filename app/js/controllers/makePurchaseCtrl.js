'use strict'
app.controller('MakePurchaseController', function($scope, $routeParams, purchasesData, notifier) {
    $scope.productId = $routeParams.id;
    $scope.makePurchase = makePurchase;

    function makePurchase(purchase){
        purchase.productId = $scope.productId;

        purchasesData.create(purchase)
            .then(function(data){
                notifier.success('Purchase made!');
            }, function(err){
                notifier.error(err.message);
            });
    }
});
