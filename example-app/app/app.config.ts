configure.$inject = ["$routeProvider",'$locationProvider'];
export function configure($routeProvider: ng.route.IRouteProvider,   $locationProvider: ng.ILocationProvider,) {
  $locationProvider.html5Mode(false);
  
  $routeProvider
    .when("/phones", {
      template: "<pc-phone-list></pc-phone-list>"
    })
    .when("/phones/:phoneId", {
      template: "<pc-phone-detail></pc-phone-detail>"
    })
    .otherwise({
      redirectTo: "/phones"
    });
}
