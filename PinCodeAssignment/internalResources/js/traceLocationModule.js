var letMeFindYouApp = angular.module("letMeFindYouApp", ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute']);

letMeFindYouApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});