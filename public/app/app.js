(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', '$logProvider', function ($routeProvider, $logProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/', {
                templateUrl: '/app/templates/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .when('/schools', {
                templateUrl: '/app/templates/schools.html',
                controller: 'SchoolsController',
                controllerAs: 'schools'
            })
            //.when('/EditBook/:bookID', {
            //    templateUrl: '/app/templates/editBook.html',
            //    controller: 'EditBookController',
            //    controllerAs: 'bookEditor'
            //})
            .otherwise('/');

    }]);


}());