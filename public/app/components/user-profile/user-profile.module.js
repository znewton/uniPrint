angular.module('userProfile', []).component('userProfile',{
    templateUrl: 'app/components/user-profile/user-profile.template.html',
    controller: function userProfileController($scope) {
        $scope.user =
        {
            fullName: 'Tristan DuyveJonck',
            username: 'Duyve',
            address: '1121 Friley Stange',
            phoneNumber: '1234567890',
            myIcon: 'account_circle',
            email: 'tduyve@gmail.com',
            printRating: '5'


        };
    }

});