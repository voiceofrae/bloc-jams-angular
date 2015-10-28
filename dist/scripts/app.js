var blocJams = angular.module('blocJams', ['ui.router']);
//blocJams is the name of the identifier assigned to the module
//blocJams is the name of the module and is the link between the apps HTML and the module

blocJams.config(function($stateProvider, $locationProvider) {
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	
$stateProvider.state('landing', {
		url: '/',
		controller: 'LandingCtrl',
		templateUrl: '/templates/landing.html'
	});
	
	$stateProvider.state('collection', {
		url: '/collection',
		controller: 'CollectionCtrl',
		templateUrl: '/templates/collection.html'
	});
	
$stateProvider.state('album', {
		url: '/album',
		controller: 'AlbumCtrl',
		templateUrl: '/templates/album.html'
	});

});

// $locationProvider configures an applications paths
// $stateProvider will configure aspects of a state including name, URL route, controller and template