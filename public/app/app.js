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
            .when('/activities', {
                templateUrl: '/app/templates/allActivities.html',
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                resolve: {
                    classrooms: function(dataService) {
                        return dataService.getAllClassrooms();
                    }
                }
            })
            .when('/classrooms/:id', {
                templateUrl: '/app/templates/classroom.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .when('/classrooms/:id/detail/:month?', {
                templateUrl: '/app/templates/classroomDetail.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .otherwise('/');

    }]);


}());