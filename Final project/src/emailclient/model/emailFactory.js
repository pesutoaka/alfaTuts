angular.module("emailclient")
    .factory("emailFactory", ["$http", function($http){
        var factory = {};
        factory.getEmailById = function(id){return $http.get("/emails/"+id);};
        
        $http.get("/emails")
            .success(function(data){
                factory.emails = data;
            console.log(data);
            })
            .error(function(data,status){
                factory.emails = {};
                console.log({"status":status, "data": data});
            });
        
        return factory;
    }]);