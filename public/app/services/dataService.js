(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$log', dataService]);

    function dataService($http, $q, $log) {

        return {
            getAllSchools: getAllSchools,
            getAllClassrooms: getAllClassrooms,
            getAllActivities: getAllActivities
        };

        function getAllSchools() {
            return $http.get('api/schools')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving schools: ' + response.statusText);
                    return $q.reject('Error retrieving schools.');
                })
        }

        function getAllClassrooms() {
            return $http.get('api/classrooms')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving classrooms: ' + response.statusText);
                    return $q.reject('Error retrieving classrooms.');
                })
        }

        function getAllActivities() {

        }

    }

}());