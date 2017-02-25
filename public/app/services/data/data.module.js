angular.module('data', ['auth']).service('data',
    [
        'auth',
        function (auth) {
            /**
             * Schema Types
             * User: {
             *          username,
             *          email,
             *          address,
             *          phone,
             *          print_rating,
             *          buy_rating,
             *          models (list of models),
             *          print_requests (list of requests),
             *          bids (list of bids)
             *       }
             * Model: {
             *          ownerName,
             *          ownerID
             *          name,
             *          imageURL,
             *          fileURL,
             *          fileSize
             *        }
             * Print_Request: {
             *                  model (model id),
             *                  user (user id),
             *                  username
             *                  dimx,
             *                  dimy,
             *                  dimz,
             *                  unit,
             *                  colors,
             *                  bids,
             *                }
             * Bid : {
             *          username,
             *          userID,
             *          price,
             *          message
             *        }
             *
             */
            var createUser = function (email, password, name, address, phone) {
                auth.registerDefault(email,password, name, address, phone);
            };

            var getUserData = function (user, callback) {
                if (user){
                    firebase.database().ref('users/' + user.uid).on('value',callback);
                }
            };

            var setUserData =function (user, data, key) {
                if(key){
                    firebase.database().ref('users/' + user.uid + '/' + key).set(data);
                }
                else{
                    firebase.database().ref('users/' + user.uid).set(data);
                }
            };

            var deleteUser = function (user, callback) {
                firebase.database().ref('users/' + user.uid).off('value', function () {
                    firebase.database().ref('users/' + user.uid).remove(callback);
                });
                auth.deleteAcc();
            };

            var addUserModel = function (user, model) {
                model.owner = user.username;
                model.user = user.uid;
                var modelKey = firebase.database().ref('models').push(model).key;
                firebase.database().ref('users/' + user.uid + '/models/' +modelKey).set(model.name);
            };

            var deleteUserModel = function (user, id) {
                firebase.database().ref('users/' + user.uid + '/models/' + id ).remove();
                firebase.database().ref('models/' + id).remove();
            };

            var addUserRequest = function (user, request) {
                request.name = user.username;
                request.user = user.uid;
                var reqKey = firebase.database().ref('print_requests').push(request).key;
                firebase.database().ref('users/' + user.uid + '/print_requests/' + reqKey).set(true);
            };

            var deleteUserRequest = function (user, id) {
                firebase.database().ref('users/' + user.uid + '/print_requests/' + id ).remove();
                firebase.database().ref('print_requests/' + id).remove();
            };

            var addUserBid = function (user, bid) {
                bid.name = user.username;
                bid.user = user.uid;
                var bidKey = firebase.database().ref('bids').push(bid).key;
                firebase.database().ref('users/' + user.uid + '/bids/' + bidKey).set(user.username);
            };

            var deleteUserBid = function (user, id) {
                firebase.database().ref('users/' + user.uid + '/bids/' + id ).remove();
                firebase.database().ref('bids/' + id).remove();
            };

            var getUsers = function (callback, id) {
                if (id){
                    firebase.database().ref('user/' + id).once(callback);
                }
                else {
                    firebase.database().ref('user/').once(callback);
                }
            };

            var getModels = function (callback, id) {
                if (id){
                    firebase.database().ref('models/' + id).once(callback);
                }
                else{
                    firebase.database().ref('models/').once(callback);
                }
            };

            var getPrintRequests = function (callback, id) {
                if (id){
                    firebase.database().ref('print_requests/' + id).once(callback);
                }
                else{
                    firebase.database().ref('print_requests/').once(callback);
                }
            };

            var getBids = function (callback, id) {
                if (id){
                    firebase.database().ref('bids/' + id).once(callback);
                }
                else{
                    firebase.database().ref('bids/').once(callback);
                }
            };








            return {
                createUser:         createUser,
                getUserData:        getUserData,
                setUserData:        setUserData,
                deleteUser:         deleteUser,
                addUserModel:       addUserModel,
                addUserRequest:     addUserRequest,
                addUserBid:         addUserBid,
                deleteUserModel:    deleteUserModel,
                deleteUserRequest:  deleteUserRequest,
                deleteUserBid:      deleteUserBid,
                getUsers:           getUsers,
                getModels:          getModels,
                getPrintRequests:   getPrintRequests,
                getBids:            getBids
            };
        }]
);