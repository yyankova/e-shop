'use strict';

app.controller('PurchaseDetailsCtrl', function PurchaseDetailsCtrl($scope, $routeParams, notifier, purchasesData) {
    $scope.leaveReview = leaveReview;

    purchasesData.getPurchaseDetails($routeParams.id)
        .then(function(data){
            $scope.currPurchase = data;
        }, function(err){
            notifier.error(err.message);
        });

    function leaveReview(){

    }
});
