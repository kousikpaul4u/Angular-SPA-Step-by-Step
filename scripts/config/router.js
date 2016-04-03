
	// configure our routes
	myApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'partials/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'partials/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'partials/contact.html',
				controller  : 'contactController'
			})

			// route for the registration page
			.when('/registration',{
				templateUrl : 'partials/registration.html',
				controller : 'registrationController'
			})

			.when('/detail',{
				templateUrl : 'partials/detail.html',
				controller : 'detailController'
			});
	});

	