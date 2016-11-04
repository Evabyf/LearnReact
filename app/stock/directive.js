/**
 * Created by yudragon on 2016/10/31.
 */
angular.module('stockMarketApp').directive('stockWidget',[function () {
    return{
        templateUrl:'stock.html',
        restrict:'AE',
        scope:{
            stockData:'=',
            stockTitle:'@',
            whenStock:'&'
        },
        link:function ($scope,$element,$attrs) {
            $scope.getChange=function (stock) {
                return Math.ceil((($scope.stockData.price-$scope.stockData.previous)/$scope.stockData.previous)*100);
            };
            // $scope.changeStock=function () {
            //   $scope.stockData={
            //       name:'Directive Stock',
            //       price:500,
            //       previous:200
            //   };
            // };
            $scope.onSelect=function () {
              $scope.whenStock({
                  stockName:$scope.stockData.name,
                  stockPrice:$scope.stockData.price,
                  stockPrevious:$scope.stockData.previous
              })  ;
            };
        }
    }
}]);
