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
                templateUrl: '/app/templates/allSchools.html',
                controller: 'AllSchoolsController',
                controllerAs: 'schools'
            })
            .when('/classrooms', {
                templateUrl: '/app/templates/allClassrooms.html',
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms'
            })
            .otherwise('/');

    }]);


}());