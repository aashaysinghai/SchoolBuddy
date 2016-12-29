(function () {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$logProvider', '$routeProvider','$locationProvider', function ($logProvider, $routeProvider,$locationProvider) {

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
                        templateUrl: '/app/templates/allActivities.html',
                        resolve: {
                            activities: function(dataService){
                                return dataService.getAllActivities();
                            }
                        }
                    })
                    .when('/classrooms/:id', {
                        controller: 'ClassroomController',
                        controllerAs: 'classroom',
                        templateUrl: '/app/templates/classroom.html'
                    })
                    .when('/classrooms/:id/detail/:month?', {
                        controller: 'ClassroomController',
                        controllerAs: 'classroom',
                        templateUrl: '/app/templates/classroomDetail.html'
                    })
                    .otherwise('/');
            
            //$locationProvider.hashPrefix('!');
            
            //$locationProvider.html5Mode(true);

        }]);


    app.run(['$rootScope', '$log', function ($rootScope, $log) {

            $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
                $log.log('successfully changed routes.');
                $log.debug(event);
                $log.debug(current);
                $log.debug(previous);
            });

            $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
                $log.log('error changing routes.');
                $log.debug(event);
                $log.debug(current);
                $log.debug(previous);
                $log.debug(rejection);
            });
        }]);

}());