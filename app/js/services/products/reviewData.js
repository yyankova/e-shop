app.factory('reviewData', function ($http, $q) {
    var baseUrl = '/api/products';

    function createReview(productId, review) {
        var deferred = $q.defer();

        $http.post(baseUrl + '/' + productId + '/reviews', review)
            .success(function () {
                deferred.resolve();
            })
            .error(function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    }

    return {
        createReview: createReview
    }
});