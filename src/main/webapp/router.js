/**
 * Created by kenkozheng on 2015/7/10.
 */
define(['angular', 'require', 'angular-route'], function (angular, require) {

    var app = angular.module('webapp', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', '$controllerProvider','$locationProvider',
        function ($routeProvider, $controllerProvider,$locationProvider) {
            $locationProvider.html5Mode({enabled:true,requireBase:true,rewriteLinks:true});
            function generateRouterSetting(tplPath, ctrlPath, ctrlName) {
                return {
                    templateUrl: tplPath,
                    controller: ctrlName,
                    resolve: {
                        keyName: function ($route, $q) {
                            var deferred = $q.defer();
                            require([ctrlPath], function (module) {
                                $controllerProvider.register(ctrlName, module.controller);
                                $route.current.template = module.tpl;
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                }
            }

            $routeProvider
                .when('/module1',
                    generateRouterSetting('module1/tpl.html', 'module1/module1.js', 'module1Controller'))
                .when('/module2', generateRouterSetting('module2/tpl.html', 'module2/module2.js', 'module2Controller'))
                .when('/module3', generateRouterSetting('module3/tpl.html', 'module3/module3.js', 'module3Controller'))
                .otherwise({
                    redirectTo: '/module1'      //angular就喜欢斜杠开头
                });
        }]);
    return app;
});
