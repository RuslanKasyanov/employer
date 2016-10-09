/**
 * Created by RuslanK on 08.10.16.
 */
angular.module('employeeEdit').controller('EditController',['$scope', '$rootScope','$http',
    function ($scope, $rootScope, $http) {
    'use strict'
    //todo Здесь должно быть получение данных с сервера
    $rootScope.persons = $rootScope.persons || [];
    $scope.persons = $rootScope.persons;
    $scope.rowActive = function (e, isActive) {
        e.currentTarget.classList.toggle('success', isActive);
    }
    $scope.isDirty = function (e) {
        if(e.currentTarget.classList.contains('ng-dirty')){
            //todo Отправляем изменения на сервер
        };
    }
}]);