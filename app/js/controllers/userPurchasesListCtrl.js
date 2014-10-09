'use strict';

app.controller('UserPurchasesListCtrl', function UserPurchasesListCtrl($scope, notifier, purchasesData) {
    purchasesData.getUserPurchases()
        .then(function (data){
            console.log(data);
            $scope.purchases = data;
        }, function (errorData){
            console.log(errorData);
            notifier.error('Error getting user purchases');
        });
});