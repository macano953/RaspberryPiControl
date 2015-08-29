var app = angular.module('raspberrypi', []);

app.controller('charact', function($scope, $http) {
	$http.get("/api/charact")
	    .success(function(charact) {
	    	$scope.charact = charact;
	    	$scope.connected = true;
	    }).
	    error(function(err){
	    	console.log(err);
	    	$scope.connected = false;
	    });
	setInterval(function(){
	    $http.get("/api/charact")
	    .success(function(charact) {
	    	$scope.charact = charact;	    	
	    	$scope.connected = true;
	    }).
	    error(function(err){
	        console.log(err);	        
	    	$scope.connected = false;
	    });
	}, 1000);
});
