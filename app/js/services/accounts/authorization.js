'use strict';

app.factory('authorization', ['identity', function(identity) {
    return {
        getAuthorizationHeader: function() {
            return {
                'Authorization': 'Bearer ' + identity.user['access_token']
            }
        }
    }
}]);