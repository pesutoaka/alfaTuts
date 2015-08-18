angular.module("emailclient")
    .controller("emailCtrl", ["$scope","$routeParams", "emailFactory", function($scope, $routeParams, emailFactory){
        $scope.factory = emailFactory;
        $scope.email = {}; 
        $scope.factory.getEmailById($routeParams.id)
        .success(function(data){
        $scope.email = data;});
        $scope.showElements = function(){
             $scope.factory.getEmailById($scope.emailId)
        .success(function(data){
        $scope.email = data;});
        };
        
    }]);