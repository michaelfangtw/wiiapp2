angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.page1', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page1.html',
        controller: 'page1Ctrl'
      }
    }
  })

  .state('menu.page2', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('menu.page3', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('menu.page4', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('menu.page5', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

    .state('menu.productList', {
        url: '/productList',
        views: {
            'side-menu21': {
                templateUrl: 'templates/productList.html',
                controller: 'productListCtrl'
            }
        }
    })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});

