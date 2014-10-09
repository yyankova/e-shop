app.controller('ProductsListCtrl', function ($scope, $location, cachedProducts) {
    $scope.products = cachedProducts.query();

    $scope.createProductRedirect = function () {
        $location.path('/products/create');
    }
});