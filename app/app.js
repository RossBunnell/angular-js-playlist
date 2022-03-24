// Creating an angular module.  Modules allow us to segment our code.   An app can have many modules, or just one.   Depending on it's size and the way you'd like ot organize it's code.
// used to house controllers, config, run methods, etc  Controllers are used to control different parts of the app
var MyNinjaApp = angular.module('myNinjaApp', []);

// MyNinjaApp.config(function() {
//     //used prior to any applicaiton running (routing).  For configuration.
// })

// MyNinjaApp.run(function() {
//     //used when application runs
// });

MyNinjaApp.controller('NinjaController', ['$scope', function($scope) {
    //contains all code for this section of the application.
    // $scope must be passed to funciton.   Pass dependencies as array as best practice.

    //$scope.message = 'Hello'

    $scope.ninjas = [{
        name: 'Greg',
        belt: 'lavender',
        rate: 10.00,
        available: true
    }, {
        name: 'Chad',
        belt: 'magenta',
        rate: 15.00,
        available: false
    }, {
        name: 'Terry',
        belt: 'clear',
        rate: 20.00,
        available: false
    }, {
        name: 'Mr. Lahey',
        belt: 'dark black',
        rate: 6000.00,
        available: true
    }];

}]);