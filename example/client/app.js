angular.module('app', ['ngWebUser']);

angular.module('app').config(routeConfig);

function routeConfig($urlRouterProvider, $stateProvider, $authProvider, $webUserProvider) {

  $urlRouterProvider.otherwise('/');

  $authProvider.baseUrl = 'http://localhost:3000/';

  $webUserProvider.scopes([
    'consumer',
    'developer',
    'admin'
  ]);

  $stateProvider.state('login', {
    url: '/login?redirectTo',
    templateUrl: 'login.html'
  });

  $stateProvider.state('signup', {
    url: '/signup?redirectTo',
    templateUrl: 'signup.html'
  });

  $stateProvider.state('root', {
    url: '/',
    templateUrl: 'root.html'
  });

  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'dashboard.html',
    data: {
      permissions: {
        only: ['consumer'],
        redirectTo: function() {
          return {state: 'login', params: {redirectTo: 'dashboard'}};
        }
      }
    }
  });

}
