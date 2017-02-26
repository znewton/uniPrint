angular.module('testing', ['auth', 'data']).component('testing',{
    templateUrl: 'app/components/testing/testing.template.html',
    controller: [
        '$scope',
        'auth',
        'data',
        function testingController($scope, auth, data) {
            var userData = null;
            setInterval(function () {
                $scope.$apply(function () {
                    $scope.isLoggedIn = auth.isLoggedIn();
                    if (auth.isLoggedIn() && userData == null){
                        data.getUserData(auth.currentUser, function (snapshot) {
                            userData = snapshot.val();
                        })
                    }
                });
            }, 200);

            $scope.isLoggedIn = auth.isLoggedIn();
            console.log(auth.currentUser);
            $scope.user = function () {
                auth.loginDefault("test@duyve.com", "Testing1");
                console.log("Logging in");
            };

            $scope.model = function () {
                if(auth.isLoggedIn()){
                    var model = {
                        ownerID: auth.currentUser.uid,
                        name: "Test"
                    };
                    data.addUserModel(auth.currentUser, model);
                }
            };

            $scope.bid = function () {
                if(auth.isLoggedIn()){

                }
            };

            $scope.request = function () {
                if(auth.isLoggedIn()){

                }
            };

            $scope.info = function () {
                if(auth.isLoggedIn()){
                    console.log(userData);
                }
            };

            $scope.logout = function () {
                $scope.isLoggedIn = false;
                auth.logout(function () {

                });
            }
        }
    ]
});
