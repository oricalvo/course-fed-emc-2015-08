﻿function HomeCtrl($scope) {
    $scope.message = "Hello Angular";

    $scope.sayHello = function () {
        alert("Hello " + $scope.name);
    }

    $scope.contacts = [
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" },
    ];
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);