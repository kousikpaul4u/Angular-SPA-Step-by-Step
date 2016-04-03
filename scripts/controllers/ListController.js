myApp.controller('ListController',function($scope) {
	$scope.message = "All Users List";
	
	$scope.userList = [{
			email : "kousikpaul4u@gmail.com",
			firstName : "Koushik",
			lastName : "Pal",
			company: "CTS"
		},
		{
			email : "anupdey@gmail.com",
			firstName : "Anup",
			lastName : "Dey",
			company : "TCS"
		},
		{
			email : "ramesh_hp@yahoo.com",
			firstName : "Ramesh",
			lastName : "Gupta",
			company : "HP"
		}
	];
});