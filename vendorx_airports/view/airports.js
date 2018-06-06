angular.module('page', []);
angular.module('page').controller('PageController', function ($scope, $http) {

	var api = '/services/v3/js/vendorx_airports/service/airports.js';

	function load() {
		$http.get(api)
		.success(function(data) {
			$scope.data = data;
		});
	}
	load();

	$scope.openNewDialog = function() {
		$scope.actionType = 'new';
		$scope.entity = {};
		toggleEntityModal();
	};

	$scope.openEditDialog = function(entity) {
		$scope.actionType = 'update';
		$scope.entity = entity;
		toggleEntityModal();
	};

	$scope.openDeleteDialog = function(entity) {
		$scope.actionType = 'delete';
		$scope.entity = entity;
		toggleEntityModal();
	};

	$scope.close = function() {
		load();
		toggleEntityModal();
	};

	$scope.create = function() {
		$http.post(api, JSON.stringify($scope.entity))
		.success(function(data) {
			load();
			toggleEntityModal();
		}).error(function(data) {
			alert(JSON.stringify(data));
		});
			
	};

	$scope.update = function() {
		$http.put(api + '/' + $scope.entity.id, JSON.stringify($scope.entity))

		.success(function(data) {
			load();
			toggleEntityModal();
		}).error(function(data) {
			alert(JSON.stringify(data));
		})
	};

	$scope.delete = function() {
		$http.delete(api + '/' + $scope.entity.id)
		.success(function(data) {
			load();
			toggleEntityModal();
		}).error(function(data) {
			alert(JSON.stringify(data));
		});
	};


	function toggleEntityModal() {
		$('#entityModal').modal('toggle');
	}
});