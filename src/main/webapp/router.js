/**
 * Created by kenkozheng on 2015/7/10.
 */
define(['angular', 'require', 'angular-route'], function (angular, require) {

    var app = angular.module('webapp', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', '$controllerProvider',
        function($routeProvider, $controllerProvider) {
            $routeProvider.
                when('/module1', {
                    templateUrl: 'module1/tpl.html',
                    controller: 'module1Controller',
                    resolve: {
                        /*
                        这个key值会被注入到controller中，对应的是后边这个function返回的值，或者promise最终resolve的值。函数的参数是所需的服务，angular会根据参数名自动注入
                         对应controller写法（注意keyName）：
                         controllers.controller('module2Controller', ['$scope', '$http', 'keyName',
                             function($scope, $http, keyName) {
                         }]);
                         */
                        keyName: function ($route,$q) {
                            var deferred = $q.defer();
                            require(['module1/module1.js'], function (module1) {
                                $controllerProvider.register('module1Controller', module1.controller);      //由于是动态加载的controller，所以要先注册，再使用
                                $route.current.template=module1.tpl;
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                }).
                when('/module2', {
                    template: 'module2/tpl.html',
                    controller: 'module2Controller',
                    resolve:{
                        keyName: function ($route, $q) {
                            var deferred = $q.defer();
                            require(['module2/module2.js'], function (module2) {
                                $controllerProvider.register('module2Controller', module2.controller);
                                $route.current.template = module2.tpl;
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                }).
                when('/module3',{
                    template:'',
                    controller:'',
                     resolve:{

                     }
                }).
                otherwise({
                    redirectTo: '/module1'      //angular就喜欢斜杠开头
                });
        }]);

    return app;
});