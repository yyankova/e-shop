app.controller('ProductDetailsCtrl', function($scope, $routeParams, cachedProducts) {
    $scope.product = cachedProducts.query().$promise.then(function(collection) {
        collection.forEach(function(product) {
            if (product._id === $routeParams.id) {
                $scope.product = product;
            }
        })
    })
});