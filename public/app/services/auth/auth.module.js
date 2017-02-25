angular.module('auth', []).service('auth',
    [
    function () {
        var currentUser;
        var userAttribs = {
            name: null,
            address: null,
            phone: null
        };
        function init(user) {
            if(user){
                currentUser = user;
                firebase.database().ref('user/' + user.uid).once('value', function (snapshot) {
                    if (snapshot.val() === null){
                        firebase.database().ref('users/' + user.uid).set({
                            name: userAttribs.name || null,
                            email: user.email,
                            address: userAttribs.address || null,
                            phone: userAttribs.phone || null,
                            print_rating: 0,
                            buy_rating: 0,
                            models: {},
                            print_requests: {},
                            bids: {}
                        });
                        userAttribs = {
                            name: null,
                            address: null,
                            phone: null
                        };
                    }
                });
            }
            else{
                currentUser = null;
            }
        }


        if (firebase.auth().currentUser !== null){
            init(firebase.auth().currentUser);
        }

        firebase.auth().onAuthStateChanged(init);

        var isLoggedIn = function() {
            return currentUser !== null;
        };


        registerDefault = function(email, password, name, address, phone) {
            userAttribs.name = name;
            userAttribs.address = address;
            userAttribs.phone = phone;
            firebase.auth().createUserWithEmailAndPassword(email,password);
        };

        loginDefault = function(email, password) {
            return firebase.auth().signInWithEmailAndPassword(email, password);
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
            currentUser :       currentUser,
            isLoggedIn :        isLoggedIn,
            registerDefault :   registerDefault,
            loginDefault :      loginDefault,
            logout :            logout,
            deleteAcc:          deleteAcc
        };
    }]
);