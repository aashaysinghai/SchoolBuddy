(function () {

    angular.module('app')
        .controller('AllActivitiesController', ['dataService', 'notifier', 'classrooms', '$location', AllActivitiesController]);

    function AllActivitiesController(dataService, notifier, classrooms, $location) {

        var vm = this;

        vm.selectedMonth = 1; // default to January
        vm.allClassrooms = classrooms;
        vm.selectedClassroom = classrooms[0];

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
            })
            .catch(showError);

        vm.search = function() {
            var classroom_detail_url = '/classrooms/' + vm.selectedClassroom.id + '/detail/' + vm.selectedMonth;
            $location.url(classroom_detail_url);
        };

        function showError(message) {
            notifier.error(message);
        }

    }

}());