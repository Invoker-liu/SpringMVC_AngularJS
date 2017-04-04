/**
 * Created by Administrator on 2017/4/2.
 */
define(['angular','text!module3/tpl.html'],function (angular,tpl) {
    return{
        tpl:tpl,
        controller:function ($scope) {
            $scope.title="这是Module3";
        }
    }
});