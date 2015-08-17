angular.module("emailclient")
    .controller("listCtrl", ["$scope", "emailFactory", function($scope, emailFactory){
        $scope.factory = emailFactory;
    }]);