function AppCtrl($scope, $http) {
	console.log("hello");

	$http.get('/contactlist').success(function(response) {
		console.log("I got the data I requested");
		$scope.contactlist = response;
	});

$scope.addcontact = function() {
	console.log($scope.contact);
	$http.post('/contactlist', $scope.contact);
};

}