angular.module('app.controllers', [])


.controller('page1Ctrl', function ($scope, $http, $ionicLoading) {
    var rooturl = 'http://wii.tw/mvc/products/event';
    var page_size = 50;
    var page = 1;
    $ionicLoading.show({
        template: 'Loading...'
    });
    $http.get(rooturl + '?page_size=' + page_size + '&page=' + page).then(function (resp) {
        console.log('Success', resp);
        $scope.productnewList = resp.data;
        console.log(resp.data);
        // For JSON responses, resp.data contains the result
    }, function (err) {
        console.error('ERR', err);
        // err.status will contain the status code
    });
    $ionicLoading.hide();    
})
   
.controller('page2Ctrl', function($scope,$http) {
    $scope.data = {keyword:'nitecore'};//default
    $scope.SearchProduct = function () {
        var page_size = 50;
        var page = 1;
        var rooturl = 'http://wii.tw/mvc/products/search/' + $scope.data.keyword;
        $http.get(rooturl + '?page_size=' + page_size + '&page=' + page).then(function (resp) {
            console.log('Success', resp);
            $scope.productSearchList = resp.data;
            console.log(resp.data);
        }, function (err) {
            console.error('ERR', err);
        })
    }
})
   
 //建立service classidservice 於page中傳遞
.controller('page3Ctrl', function ($scope, $http, $state, classidService) {
    var page_size = 50;
    var page = 1;
    var rooturl = 'http://wii.tw/mvc/classid';
    $http.get(rooturl + '?page_size=' + page_size + '&page=' + page).then(function (resp) {
        console.log('Success', resp);
        $scope.classidList = resp.data;
        console.log(resp.data);        
    }, function (err) {
        console.error('ERR', err);        
    })

    $scope.productListByClassid = function (classid) {
        classidService.classid = classid.classid;
        classidService.classname = classid.classname;
        $state.go('menu.productList');
    }
})

//classidService :define in services
//functionFactory:define in services
.controller('productListCtrl', function ($scope, $http, classidService, $cordovaToast) {
    var rooturl = 'http://wii.tw/mvc/products/classid/' + classidService.classid;
    var page_size = 50;
    var page = 1;
    $scope.classidService = classidService;
    $http.get(rooturl + '?page_size=' + page_size + '&page=' + page).then(function (resp) {
        console.log('Success', resp);
        $scope.productList = resp.data;
        console.log(resp.data);
    }, function (err) {
        console.error('ERR', err);
    })       
})


//1. bower install ngCordova
//<script src="lib/ngCordova/dist/ng-cordova.js"></script>
//<script src="cordova.js"></script>
//2.cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
//copy plugins\cordova-plugin-flashlight 
.controller('page4Ctrl', function ($scope, $cordovaFlashlight) {
    $scope.switchOn = true;
    $scope.imageUrl = "img/light_1.png";
    try
    {
        $cordovaFlashlight.switchOn();
    }catch(e){
        console.log(e);
    }
    $scope.onTap = function () {
        $scope.imageUrl = getImageUrl();
        try{
            $cordovaFlashlight.toggle();
        }catch(e){
            console.log(e);               
        }
    };
    function getImageUrl() {
        var imageUrlOn = 'img/light_1.png';
        var imageUrlOff = 'img/light_0.png';
        if ($scope.switchOn) {
            $scope.switchOn = false;
            return imageUrlOff;
        } else {
            $scope.switchOn = true;
            return imageUrlOn;
        }
    }
})
   
.controller('page5Ctrl', function($scope) {
     $scope.version='2.1';
     $scope.versionDate='2016/02/26';
     $scope.author='funtech.tw';
})
    