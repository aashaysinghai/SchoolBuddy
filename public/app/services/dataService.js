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
            return $http.get('api/schools1')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving schools: ' + response.statusText);
                    return $q.reject('An error occurred retrieving schools.');
                })
        }

        function getAllClassrooms() {

        }

        function getAllActivities() {

        }

    }

}());