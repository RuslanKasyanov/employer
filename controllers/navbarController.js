/**
 * Created by RuslanK on 08.10.16.
 */
angular.module('employeeEdit').controller('navbarController',['$scope',
    function ($scope) {
    'use strict'
    $scope.itemActive = function (e) {
             var target = e.currentTarget, oldTarget = $scope.isActive;
            !oldTarget || oldTarget.classList.remove('active');
            target.classList.add('active');
            $scope.isActive = target;
    }
}]);