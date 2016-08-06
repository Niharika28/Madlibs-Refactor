angular.module('madlibs')
.controller("madlibsController", function($scope) {
$scope.madLibForm = [];
$scope.isMaleSelected = false;
$scope.isFemaleSelected = false;

$scope.displayData = function(){
	if($scope.gender == "male"){
		$scope.isMaleSelected = true;
		$scope.isFemaleSelected = false;
	}else{
		$scope.isMaleSelected = false;
		$scope.isFemaleSelected = true;
	}
}
	
});