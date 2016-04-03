myApp.controller('registrationController',function($scope,$location,userModel){
		$scope.message = 'Enter data to all fields';
		$scope.user = userModel.getUser();
		if($scope.user == 'undefined' || $scope.user =='' || $scope.user == null){
			$scope.user ={
				email : "",
				firstName : "",
				lastName : "",
				company: "",
				fullName: function() {
            		var user;
            		user = $scope.user;
            		return user.firstName + " " + user.lastName;
        		}
			}
		}
		

		$scope.submit = function(){
			console.log("Registration is successful");
			console.log($scope.user);
			//$state.go('/detail');
			userModel.setUser($scope.user);
			userModel.setFirstName('abc');
			$location.path('/detail');
		}

		
	});