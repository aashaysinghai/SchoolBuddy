(function () {

    angular.module('app')
        .controller('ClassroomController', ['$routeParams', 'dataService', 'notifier', ClassroomController]);

    function ClassroomController($routeParams, dataService, notifier) {

        var vm = this;

        dataService.getClassroom($routeParams.id)
            .then(function(classroom) {
                vm.month = $routeParams.month;
                vm.currentClassroom = classroom;

                if($routeParams.month) {
                    if(classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($routeParams.month);
                    }
                    else {
                        vm.timePeriod = 'No activities this month';
                    }
                }
                else {
                    vm.timePeriod = 'All activities';
                }
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());