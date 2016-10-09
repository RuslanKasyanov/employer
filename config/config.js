/**
 * Created by RuslanK on 08.10.16.
 */
angular.module('employeeEdit', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when('/createEmployee',
            {
                templateUrl: 'views/create.html',
                controller: 'CreateController'
            });
        $routeProvider.when('/edit',
            {
                templateUrl: 'views/edit.html',
                controller: 'EditController'
            });
    });