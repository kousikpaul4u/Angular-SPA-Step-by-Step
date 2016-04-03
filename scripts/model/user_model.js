angular.module('myApp')
	.factory('userModel', function () {
		var user = null;
        var storedObject;
        var user ={
				email : "",
				firstName : "",
				lastName : "",
				company: ""
			};
        return {
            setUser: function (o) {
                this.storedObject = o;
            },
            getUser: function () {
                return this.storedObject;
            },
            setFirstName: function(data){
            	user.firstName = data;
            },
            getFirstName: function(){
            	return user.firstName;
            }
        };

        
	});

