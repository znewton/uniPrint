angular.module('auth', []).service('auth',
    [
    function () {
        var currentUser = null;

        firebase.auth().onAuthStateChanged(function (user) {
            if(user){
                currentUser = user;
            }
            else{
                currentUser = null;
            }
        });

        var onChange = function (callback) {
            firebase.auth().onAuthStateChanged(callback);
        };

        var isLoggedIn = function() {
            return firebase.auth().currentUser != null;
        };


        registerDefault = function(email, password) {
            return firebase.auth().createUserWithEmailAndPassword(email,password);
        };

        registerGoogle = function () {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                console.log("TEST");
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch(function(error) {
                console.log("TEST1");
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        };

        loginDefault = function(email, password) {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        };

        loginGoogle = function () {
            var provider = new firebase.auth().GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        };

        logout = function(callback) {
            if (currentUser){
                firebase.auth().signOut().then(callback);
            }
            else{
                callback();
            }
        };

        deleteAcc = function () {
            return firebase.auth().currentUser.delete();
        };

        return {
            onChange:           onChange,
            currentUser :       currentUser,
            isLoggedIn :        isLoggedIn,
            registerDefault :   registerDefault,
            // registerGoogle:     registerGoogle,
            loginDefault :      loginDefault,
            // loginGoogle:        loginGoogle,
            logout :            logout
        };
    }]
);