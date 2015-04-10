(function () {

    angular.module('app')
        .controller('HomeController', ['dataService', 'notifier', HomeController]);

    function HomeController(dataService, notifier) {

        var vm = this;

        vm.message = 'Welcome to the app.';

        dataService.getAllSchools()
            .then(function(schools) {
                vm.allSchools = schools;
            })
            .catch(showError);

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());