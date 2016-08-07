angular.module('madlibs')
.controller("madlibsController", function() {
var vm = this;
vm.madLibForm = [];
vm.isMaleSelected = false;
vm.isFemaleSelected = false;

vm.displayData = function(){
	if(vm.gender == "male"){
		vm.isMaleSelected = true;
		vm.isFemaleSelected = false;
	}else{
		vm.isMaleSelected = false;
		vm.isFemaleSelected = true;
	}
}
	
});