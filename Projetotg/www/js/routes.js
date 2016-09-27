angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.pedidos', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('inscrevaSe', {
    url: '/page5',
    templateUrl: 'templates/inscrevaSe.html',
    controller: 'inscrevaSeCtrl'
  })

  .state('menu.nomeDaComida', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nomeDaComida.html',
        controller: 'nomeDaComidaCtrl'
      }
    }
  })

  .state('menu.nomeDoRestaurante', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nomeDoRestaurante.html',
        controller: 'nomeDoRestauranteCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});