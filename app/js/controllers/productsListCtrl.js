app.controller('ProductsListCtrl', function ($scope, $location, ProductsData) {
    $scope.products = ProductsData.ProductsData.query();

    $scope.createProductRedirect = function () {
        $location.path('/products/create');
    }
});