angular.module('chatapp').factory('YearAreaQuantityService',[function () {
    var data=[{"area":"BR","year":"2012","quantity":9},{"area":"CD","year":"2012","quantity":7},
        {"area":"CN","year":"2012","quantity":36},{"area":"CU","year":"2012","quantity":12},
        {"area":"DE","year":"2012","quantity":6},{"area":"FI","year":"2012","quantity":7},
        {"area":"FR","year":"2012","quantity":11},{"area":"GB","year":"2012","quantity":7},
        {"area":"GH","year":"2012","quantity":13},{"area":"GR","year":"2012","quantity":6},
        {"area":"HK","year":"2012","quantity":9},{"area":"IR","year":"2012","quantity":8},
        {"area":"IS","year":"2012","quantity":6},{"area":"IT","year":"2012","quantity":6},
        {"area":"KP","year":"2012","quantity":8},{"area":"MA","year":"2012","quantity":7},
        {"area":"NP","year":"2012","quantity":6},{"area":"PA","year":"2012","quantity":14},
        {"area":"PH","year":"2012","quantity":6},{"area":"RO","year":"2012","quantity":6},
        {"area":"RU","year":"2012","quantity":9},{"area":"SO","year":"2012","quantity":7},
        {"area":"US","year":"2012","quantity":8},{"area":"BR","year":"2013","quantity":15},
        {"area":"CD","year":"2013","quantity":9},{"area":"CN","year":"2013","quantity":73},
        {"area":"CU","year":"2013","quantity":17},{"area":"DE","year":"2013","quantity":23},
        {"area":"FI","year":"2013","quantity":10},{"area":"FR","year":"2013","quantity":15},
        {"area":"GB","year":"2013","quantity":14},{"area":"GH","year":"2013","quantity":20},
        {"area":"GR","year":"2013","quantity":18},{"area":"HK","year":"2013","quantity":11},
        {"area":"IR","year":"2013","quantity":19},{"area":"IS","year":"2013","quantity":23},
        {"area":"IT","year":"2013","quantity":14},{"area":"KP","year":"2013","quantity":22},
        {"area":"MA","year":"2013","quantity":11},{"area":"NP","year":"2013","quantity":18},
        {"area":"PA","year":"2013","quantity":14},{"area":"PH","year":"2013","quantity":20},
        {"area":"RO","year":"2013","quantity":17},{"area":"RU","year":"2013","quantity":13},
        {"area":"SO","year":"2013","quantity":21},{"area":"US","year":"2013","quantity":21},
        {"area":"BR","year":"2014","quantity":19},{"area":"CD","year":"2014","quantity":27},
        {"area":"CN","year":"2014","quantity":101},{"area":"CU","year":"2014","quantity":31},
        {"area":"DE","year":"2014","quantity":26},{"area":"FI","year":"2014","quantity":24},
        {"area":"FR","year":"2014","quantity":25},{"area":"GB","year":"2014","quantity":14},
        {"area":"GH","year":"2014","quantity":25},{"area":"GR","year":"2014","quantity":21},
        {"area":"HK","year":"2014","quantity":21},{"area":"IR","year":"2014","quantity":16},
        {"area":"IS","year":"2014","quantity":22},{"area":"IT","year":"2014","quantity":23},
        {"area":"KP","year":"2014","quantity":21},{"area":"MA","year":"2014","quantity":20},
        {"area":"NP","year":"2014","quantity":21},{"area":"PA","year":"2014","quantity":16},
        {"area":"PH","year":"2014","quantity":27},{"area":"RO","year":"2014","quantity":20},
        {"area":"RU","year":"2014","quantity":22},{"area":"SO","year":"2014","quantity":28},
        {"area":"US","year":"2014","quantity":28},{"area":"BR","year":"2015","quantity":29},
        {"area":"CD","year":"2015","quantity":34},{"area":"CN","year":"2015","quantity":119},
        {"area":"CU","year":"2015","quantity":31},{"area":"DE","year":"2015","quantity":32},
        {"area":"FI","year":"2015","quantity":30},{"area":"FR","year":"2015","quantity":37},
        {"area":"GB","year":"2015","quantity":29},{"area":"GH","year":"2015","quantity":22},
        {"area":"GR","year":"2015","quantity":26},{"area":"HK","year":"2015","quantity":19},
        {"area":"IR","year":"2015","quantity":27},{"area":"IS","year":"2015","quantity":36},
        {"area":"IT","year":"2015","quantity":30},{"area":"KP","year":"2015","quantity":26},
        {"area":"MA","year":"2015","quantity":28},{"area":"NP","year":"2015","quantity":29},
        {"area":"PA","year":"2015","quantity":28},{"area":"PH","year":"2015","quantity":24},
        {"area":"RO","year":"2015","quantity":32},{"area":"RU","year":"2015","quantity":28},
        {"area":"SO","year":"2015","quantity":26},{"area":"US","year":"2015","quantity":28}]
    return{
        YAQData:function () {
            return data;
        }
    }
}]).factory('YearQuantityService',['$http',function ($http) {


    // var data=[{"year":"2012","quantity":214},{"year":"2013","quantity":438},{"year":"2014","quantity":598},{"year":"2015","quantity":750}];
    return {
        getyqdata: function (param) {
            var url='http://1.202.156.17:8017/KnowledgeCenter/PatentAPI/Patent/QueryYearQuantity';
           return $http({
                method:'Post',
                url:url,
                data:param,
                header:{"Content-Type": "application/json"}
            }).then(function (response) {
                return response;
            },function (errresponse) {
                console.log("取得数据错误，错误信息："+errresponse)
            });
        }
    };
}]);