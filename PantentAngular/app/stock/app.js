/**
 * Created by yudragon on 2016/10/31.
 */
angular.module('stockMarketApp',[]).config([function () {

}]).controller('MainCtrl',[function () {
    var self=this;
    self.stocks=[
        {name:'First Stocks',price:100,previous:200},
        {name:'Second Stocks',price:140,previous:120},
        {name:'Third Stocks',price:110,previous:110},
        {name:'Fourth Stocks',price:400,previous:420},
    ];
    // self.getChange=function (stock) {
    //     return Math.ceil(((stock.price-stock.previous)/stock.previous)*100);
    // }
    self.changeAllStocks=function () {
        for(var i=0;i<4;i++){
            self.stocks[i]={
                name:'Controller Stock',
                price:200,
                previous:250,
            };
        }
    };

    self.changeFirstStock=function () {
      self.stocks[0].name='change first Stock';
    };

    self.onStockSelect=function (price,name) {
        console.log('Select Price ',price,'Name ',name)
    };
}]);
