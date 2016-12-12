var app = angular.module("angular-seed", ["ngRoute", "controllers"]);

app.config(function($routeProvider) {
    $routeProvider
    	.when("/", {
    		templateUrl: "views/home.template.html",
        // controller: "homeController"
    	})

});
