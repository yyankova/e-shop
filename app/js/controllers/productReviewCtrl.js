app.controller('ProductReviewCtrl', function ($scope, $routeParams, reviewData, identity) {
    $scope.prodId = $routeParams.id;
    $scope.sendReview = reviewData.createReview;
    $scope.identity = identity;
});