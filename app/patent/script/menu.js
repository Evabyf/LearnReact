/**
 * Created by yudragon on 2016/10/31.
 */
//配置route跳转，以及Config
angular.module('chatapp',[ 'ngRoute']).config(['$locationProvider','$routeProvider',function ($locationProvider,$routeProvider) {
    $routeProvider.when('/YQ',{
        templateUrl:'YearQuantity.html',
        controller:'YQController'
    }).when('/YIQ',{
        templateUrl:'YearInventorsQuantity.html',
        controller:'YIQController'
    }).when('/YAQ',{
        templateUrl:'YearAreaQuantity.html',
        controller:'YAQController'
    }).when('/AIP',{
        templateUrl:'AreaIPCClassPercent.html',
        controller:'AIPController'
    }).when('/AQ',{
        templateUrl:'ApplicantsQuantity.html',
        controller:'AQController'
    }).when('/YKQ',{
        templateUrl:'YearKeywordQuantity.html',
        controller:'YKQController'
    });
    $routeProvider.otherwise({redirectTo:'/reportmenu'});
}])
    .controller('menuController',['YearQuantityService','YearAreaQuantityService',function(YearQuantityService,YearAreaQuantityService){
     var self=this;
    self.areaData=['中国','美国','日本','英国','法国','德国','瑞士','欧洲专利局','国际知识产权组织'];
    self.typeData=['发明专利','使用新型','外观设计','发明授权'];
    self.patentparam={Summary:"*"};
    self.patent={ApplicationDateStart:null,
        ApplicationDateEnd:null,
        PublicationDateStart:null,
        PublicationDateEnd:null,
        ID:null,ApplicationNumber:"",
        PublicationNumber:"Test",
        ApplicationDate:null,
        ApplicationYear:"",
        PublicationDate:null,
        PublicationYear:"",
        Invention:"",
        Type:"",
        Keywords:"Hello",
        Summary:"*",
        Manual:"",
        Claim:"",
        legalStatus:"",
        Address:"",
        Validity:"",
        IPCCodes:"",
        MainIPCCode:"",
        Applicants:"",
        IsApplicantOrganization:"",
        Inventors:"",
        Preemption:"",
        Agency:"",
        Agents:"",
        Kins:"",
        LCode:"",
        LName:"",
        ExCode:"",
        ACode:"Code",
        AName:"Name",
        PatentAreas:[],
        PatentTypes:[],
        MaxRange:null,
        MinRange:null
    };
    self.quantityrange={max:null,min:null};
    self.selectArea=[];
    self.selectType=[];
    //国别复选框
    self.areacheck=function (name) {
        if(self.selectArea==null){
            self.selectArea.push(name);
        }else {
            //判断是否存在，如果不存在插入，存在删除
            var isExist=false;
            angular.forEach(self.selectArea,function (data,index,array) {
                if(name==data){
                    self.selectArea.splice(index,1);
                    isExist=true;
                }
            });
            if(!isExist){
                self.selectArea.push(name);
            }
        }
        alert("controller中调用"+name);
    }
   //类型的复选框
    self.typecheck=function (name) {
        if(self.selectType==null){
            self.selectType.push(name);
        }else {
            //判断是否存在，如果不存在插入，存在删除
            var isExist=false;
            angular.forEach(self.selectType,function (data,index,array) {
                if(name==data){
                    self.selectType.splice(index,1);
                    isExist=true;
                }
            });
            if(!isExist){
                self.selectType.push(name);
            }
        }
        alert("controller中调用"+name);
    }
    //根据赛选条件重新加载图表
    self.reloadchart=function (patent) {
        patent.PatentAreas=self.selectArea;
        patent.patentTypes=self.selectType;
        loaddata(patent);
    }
    self.initloadchart=function () {
        loaddata(self.patentparam)
    }
    function loaddata(patent) {
        YearQuantityService.getyqdata(self.patentparam).then(function (response) {
            if(response.data!==null)
            {
                //取得服务端返回的数据
                var object={};
                var year=[];
                var quantity=[];
                angular.forEach(response.data,function (data,index,array) {
                    year.push(data.year);
                    quantity.push(data.quantity);
                })
                object.year=year;
                object.quantity=quantity;
                //加载图表
                loadChart(object);
            }else {
                console.log("返回数据为空")
            }
            return response.data;
        },function (errresponse) {

        });
    }
    function loadChart(chartdata) {
        var option = {
            title : {
                text: '专利逐年变化趋势分析'
            },
            tooltip : {
                trigger: 'axis'
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : chartdata.year
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'数量',
                    type:'bar',
                    data:chartdata.quantity,
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
            ]
        };
        var myChart = echarts.init(document.getElementById('main'),'macarons');
        myChart.setOption(option);
    }

        loadYearAreaQuantity();
    function loadYearAreaQuantity() {
      var yaqdata= YearAreaQuantityService.YAQData();
        yaqdata.sort();
        //取得地区列表
        //取得年份列表
        var years=[];
        var areas=[];
        angular.forEach(yaqdata,function (data,index,array) {
            years.push(data.year);
            areas.push(data.area);
        })
        //数组去重排序
        years.sort();
        areas.sort();
        var newyears=ArrayDuplicate(years);
        var newareas=ArrayDuplicate(areas);

        //生成列表数据
        var newyaqdata=[];
        angular.forEach(yaqdata,function (datad,indexd,arrayd) {
            var d=[];
            angular.forEach(newyears,function (datay,indexy,arrayy) {
                if(datad.year==datay){
                    d.push(indexy);
                }
            });
            angular.forEach(newareas,function (dataa,indexa,arraya) {
                if(datad.area==dataa){
                    d.push(indexa);
                }
            });
            d.push(datad.quantity);
            newyaqdata.push(d);
        });
    }
    
    function ArrayDuplicate(array) {
        var newArray=[array[0]];
        for (var i=1;i<array.length;i++){
            if(array[i]!==newArray[newArray.length-1]){
                newArray.push(array[i]);
            }
        } ;
        return newArray;
    }
    
    loadyearAreaquantity();
    function  loadyearAreaquantity() {


        var hours = ['6a', '12a', '6p'];
        var days = ['Saturday', 'Friday'];

        var datassss = [[0,0,5],[0,1,10],[0,2,8],[1,0,9],[1,1,15],[1,2,18]];
        datassss = datassss.map(function (item) {
            return [item[1], item[0], item[2]];
        });

       var option = {
            title: {
                text: 'Punch Card of Github',
                link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
            },
            legend: {
                data: ['Punch Card'],
                left: 'right'
            },
            tooltip: {
                position: 'top',
                formatter: function (params) {
                    return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
                }
            },
            grid: {
                left: 2,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: hours,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                axisLine: {
                    show: false
                }
            },
            series: [{
                name: 'Punch Card',
                type: 'scatter',
                symbolSize: function (val) {
                    return val[2] * 2;
                },
                data: datassss,
                animationDelay: function (idx) {
                    return idx * 5;
                }
            }]
        };

        var myChart = echarts.init(document.getElementById('YAQmain'));
        myChart.setOption(option);
    }

}]);