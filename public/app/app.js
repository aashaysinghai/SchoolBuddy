(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', '$logProvider', function ($routeProvider, $logProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: '/app/templates/home.html'
            })
            .when('/schools', {
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: '/app/templates/allSchools.html'
            })
            .when('/classrooms', {
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: '/app/templates/allClassrooms.html'
            })
            .when('/activities', {
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html'
            });
        //.when('/classrooms/:id', {
            //    templateUrl: '/app/templates/classroom.html',
            //    controller: 'ClassroomController',
            //    controllerAs: 'classroom'
            //})
            //.when('/classrooms/:id/detail/:month?', {
            //    templateUrl: '/app/templates/classroomDetail.html',
            //    controller: 'ClassroomController',
            //    controllerAs: 'classroom'
            //})
            //.otherwise('/');

    }]);


}());