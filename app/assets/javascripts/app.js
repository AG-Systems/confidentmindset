var app = angular.module('demo', ['ngFlowGrid']);

app.controller('appCtrl',['$scope','fgDelegate',function($scope,fgDelegate){
	$scope.items = [
		{
			id:1,
			img:'../confidence.jpg',
			name:'Confidence',
			link:'/contents/confidence-intro',
			paid: false,
		},
		{
			id:2,
            img:'../career.png',
			name:'Career',
			link:'/contents/career-intro',
			paid: true,
		},
		{
			id:3,
            img:'../comingsoon.jpg',
			name:'Coming soon',
			link:'',
			paid: false,
		},
		
	]
	$scope.confidence = [
		{
			id:1,
			img:'../confidenceintro.jpg',
			name:'Intro',
			link:'/contents/confidence-intro',
		},
		{
			id:2,
            img:'../acceptence.jpg',
			name:'Accepting yourself',
			link:'/contents/accepting',
		},
		
	]
	
	$scope.career = [
		{
			id:1,
			img:'../confidenceintro.jpg',
			name:'Intro',
			link:'/contents/career-intro',
		},
		{
			id:2,
            img:'../acceptence.jpg',
			name:'Asking for an raise',
			link:'/contents/accepting',
		},
		
	]

}]);
