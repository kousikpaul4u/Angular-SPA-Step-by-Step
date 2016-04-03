myApp.controller('detailController', function($scope,userModel,$location) {
		$scope.message = 'Detail page';
		$scope.user = userModel.getUser();
		console.log("Int detail page:"+$scope.user);
		console.log("In detail page:"+userModel.getFirstName());
		if($scope.user == 'undefined' || $scope.user =='' || $scope.user == null)
		{
			$location.path('/');
		}

		$scope.edit = function(){
			$location.path('/registration');
		}


	});