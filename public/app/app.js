(function() {

    var app = angular.module('app', []);

    app.config(['$routeProvider', '$logProvider', function ($logProvider) {

        $logProvider.debugEnabled(true);

    }]);

}());