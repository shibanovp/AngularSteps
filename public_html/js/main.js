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
});
app.controller('DemoController', function($scope){
	$scope.counter = 0;
	$scope.add = function(amount){
		$scope.counter+=amount;
	};
	$scope.subtract = function(amount){
		$scope.counter-=amount;
	}
});
