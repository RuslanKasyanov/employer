/**
 * Created by RuslanK on 08.10.16.
 */
angular.module('employeeEdit').controller('CreateController',['$scope', '$rootScope', function ($scope, $rootScope) {
    'use strict'
    $scope.person = {};
    $rootScope.persons = $rootScope.persons || [];
    $scope.submit = function(){
        //todo Здесь должна быть отправка на сервер
        $rootScope.persons.push($scope.person);
        $scope.person = {};
    }
}])