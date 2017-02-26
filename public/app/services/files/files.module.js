angular.module('files', ['data', 'auth']).service('files',
    [
        function () {
            var storageRef = firebase.storage().ref();

            var addModelFile = function (model, file, callback) {
                var fileRef = storageRef.child(model.ownerID + '/' + model.id);
                fileRef.put(file).then(callback);

            };
            var removeModelFile = function (model, callback) {
              var fileRef = storageRef.child(model.ownerID + '/' + model.id);
              fileRef.delete().then(callback).catch(function () {
                  console.log("There was an error deleting the file");
              })
            };
            return {

            };
        }]
);