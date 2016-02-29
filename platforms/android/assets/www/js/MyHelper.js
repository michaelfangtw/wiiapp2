angular.module('app.MyHelper', [])
//======================================================
// customize Helper function
//======================================================
.run(function ($rootScope, $cordovaSocialSharing, $cordovaInAppBrowser, $ionicLoading) {
    $rootScope.handleClick = function () {
        alert('Sample Global Funtion:I got clicked');
    }

    var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'no'
    };

    $rootScope.OpenLink = function (url) {
        //$cordovaInAppBrowser.open(url, '_system', options)
        //.then(function (event) {
        //    // success
        //})

        //.catch(function (event) {
        //    // error
        //});
        window.open(url, '_system', 'location=yes');
        return false;
    }

    $rootScope.SocialShare = function (msg,url) {        
        $cordovaSocialSharing
        .shareViaFacebook(msg, "", url)
        .then(function (result) {
            // Success!
        }, function (err) {
            // An error occurred. Show a message to the user
        });
        return false;
    }
})