(function () {

    angular.module('app')
        .controller('homeController', homeController);

    function homeController() {

        var vm = this;

        vm.message = 'Welcome to the app.';

    }

}());