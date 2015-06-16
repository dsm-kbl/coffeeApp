var app = angular.module('coffeeApp', []);

app.controller('mainController', function($scope){
         $scope.userData = [
            {username: "Verruckt Folger", numOfCups: 2, balance: 0.50},
            {username: "John Doe", numOfCups: 3, balance: 0.75}
        ];

});