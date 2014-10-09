app.controller('UserListCtrl', function($scope, UsersResource) {
    $scope.users = UsersResource.query();

    $scope.deleteUser = function(id){

    }
});