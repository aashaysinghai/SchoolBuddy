(function () {

    angular.module('app')
        .controller('AllActivitiesController', ['dataService', 'notifier', AllActivitiesController]);

    function AllActivitiesController(dataService, notifier) {

        var vm = this;

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