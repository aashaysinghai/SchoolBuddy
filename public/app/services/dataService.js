(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$q', '$log', dataService]);

    function dataService($http, $q, $log) {

        return {
            getAllSchools: getAllSchools,
            getAllClassrooms: getAllClassrooms,
            getAllActivities: getAllActivities,
            getClassroom: getClassroom
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

        function getClassroom(id) {
            return $http.get('api/classrooms/' + id)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving classroom (' + id + '): ' + response.statusText);
                    return $q.reject('Error retrieving classroom.');
                })
        }

        function getAllActivities() {
            return $http.get('api/activities')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving activities: ' + response.statusText);
                    return $q.reject('Error retrieving activities.');
                })
        }

    }

}());