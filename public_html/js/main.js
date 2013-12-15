var app = angular.module('myApp',[]);
app.run(function($rootScope){
    $rootScope.name = "Paul";
});
app.controller('MyController',function($scope){
    $scope.person = {
        name: "Paul S."
    };
})
app.controller('ParentController', function($scope) {
  $scope.person = {greeted: false};
});

app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.greeted = true;
  }
});