(function () {

    angular.module('app')
        .controller('HomeController', ['dataService', '$log', HomeController]);

    function HomeController(dataService, $log) {

        var vm = this;

        vm.message = 'Welcome to the app.';

        dataService.getAllSchools()
            .then(function(schools) {
                vm.allSchools = schools;
            })
            .catch(function(reason) {
                // do some ui notification here
                //$log.error(reason);
            })

    }

}());