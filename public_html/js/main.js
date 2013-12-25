var app = angular.module('myApp',[]);
app.run(function($rootScope){
    $rootScope.name = "Paul";
});
app.controller('MyController',function($scope){
    $scope.person = {
        name: "Paul S."
    };
    var updateClock = function(){
    	$scope.clock = new Date();
    }
    var timer = setInterval(function(){
    	$scope.$apply(updateClock);
    },1);
    updateClock();
})
