(function () {

    angular.module('app')
        .controller('AllActivitiesController', ['dataService', 'notifier', AllActivitiesController]);

    function AllActivitiesController(dataService, notifier) {

        var vm = this;

        // temp variable until classrooms are injected as part of the route
        var classrooms = [
            {
                "id": 1,
                "name": "Mrs. Cox's 2nd Grade"
            },
            {
                "id": 2,
                "name": "Mr. Elliott's Kindergarten"
            },
            {
                "id": 3,
                "name": "Mrs. Smith's 1st Grade"
            },
            {
                "id": 4,
                "name": "Mr. Johnson's 4th Grade"
            }
        ];

        vm.selectedMonth = 1; // default to January
        vm.allClassrooms = classrooms;
        vm.selectedClassroom = classrooms[0];

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());