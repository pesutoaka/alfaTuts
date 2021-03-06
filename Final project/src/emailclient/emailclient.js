angular.module("emailclient", ["ngAnimate","ngRoute"])
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/index", {templateUrl:"src/emailclient/views/index.html",controller:"indexCtrl"})
            .when("/list", {templateUrl:"src/emailclient/views/list.html",controller:"listCtrl"})
            .when("/email/:id", {templateUrl:"src/emailclient/views/email.html",controller:"emailCtrl"})
            .otherwise({redirectTo:"/index"});   
    }]);