var app = angular.module('communiotics', []);
app.controller('login', function($scope, $http) {
    $http.post("http://192.168.1.77:3000/api/login")
    .success(function(response) {
    	$scope.response = response;
    	$scope.delete = function(id) {
    	if(confirm('¿Está seguro?')){
	        $http.post('http://192.168.1.77:3000/communiotics/alerts/'+id).
	    	success(function(response) {
	    		var index = -1;		
				var comArr = eval( $scope.response );
				for( var i = 0; i < comArr.length; i++ ) {
					if( comArr[i].id === id ) {
						index = i;
						break;
					}
				}	
				if( index === -1 ) {
					alert( "Something gone wrong" );
				}
				$scope.response.splice( index, 1 );	
	    	}).
	    	error(function(data){
	    		console.log('Error: ' + data);
	    	});
	   	}};
    });
    
});