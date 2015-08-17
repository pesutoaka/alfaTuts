angular.module("emailclient")
    .factory("emailFactory", ["$http", function($http){
        var factory = {};
        
        $http.get("/emails")
            .success(function(data){
                factory.emails = data;
            })
            .error(function(data,status){
                factory.emails = {};
                console.log({"status":status, "data": data});
            });
        
        
        return factory;
    }]);