(function () {

    angular.module('app')
        .controller('ClassroomController', ['$routeParams', 'dataService', 'notifier', ClassroomController]);

    function ClassroomController($routeParams, dataService, notifier) {

        var vm = this;

        dataService.getClassroom($routeParams.id)
            .then(function(classroom) {
                vm.month = $routeParams.month;
                vm.currentClassroom = classroom;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());