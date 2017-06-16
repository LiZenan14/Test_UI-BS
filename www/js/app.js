'use strict';
// ui.bootstrap
angular.module('Test_UI-BS',['ui.router','ui.bootstrap','controllers'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/test");
	$stateProvider
	.state('test',{
		url:"/test",
		templateUrl:"templates/test.html",
		controller:"testCtrl"
	})
}])