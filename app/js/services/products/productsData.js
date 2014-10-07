app.factory('ProductsData', function($resource) {
    var ProductsData = $resource('/api/products/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return ProductsData;
})