/**
 * Created by yudragon on 2016/10/31.
 */
angular.module('chatapp').directive('queryArea',[function () {
    return {
        template:'<div class="clearfix">'+
                         '<div class="col-md-1 col-sm-2 control-label"><small>国家地区：</small></div>'+
                               '<div class="col-md-9 col-sm-9">' +
                                    '<label class="checkbox-inline" ng-repeat="area in areaData">'+
                                          '<input type="checkbox" name="{{area}}" ng-click="areaChecked({name:area})"/>{{area}}'+
                                   '</label>'+' </div>'+' </div>',

        restrict:'AE',
        scope:{
            areaData:'=',
            areaChecked:'&',
        }
    };
}]).directive('queryType',[function () {
    return {
        template:'<div class="clearfix">'+
        '<div class="col-md-1 col-sm-2 control-label"><small>专利类型：</small></div>'+
        '<div class="col-md-9 col-sm-9">' +
        '<label class="checkbox-inline" ng-repeat="type in typeData">'+
        '<input type="checkbox"  ng-click="typeChecked({name:type})"/>{{type}}'+
        '</label>'+' </div>'+' </div>',
        restrict:'AE',
        scope:{
            typeData:'=',
            typeChecked:'&',
        }
    };
}]).directive('queryPatent',[function () {
    return {
        templateUrl:'QueryTerms.html',
        restrict:'AE',
        scope:{
            patentData:'=',
            patentSubmit:'&'
        }
    };
}]);
