myApp.controller('ChartController',function($scope,$state,graphData){
 
    $scope.data =  graphData.getData();
    var seriesData = {};
    

    
    var makeChart = function(seriesData,i){
        
        var chart = AmCharts.makeChart("chartdiv"+i, {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY",
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
     "titles": [{
        "text": seriesData.title
      }],         
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
       "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "valueLineAlpha":0.2,
        
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": false,
        "dashLength": 1,
        "minorGridEnabled": false
    },
    "export": {
        "enabled": true
    },
    "dataProvider": seriesData.graphArray
});
    
    }
   
   $scope.showGraph = function(){
      
        for(i in $scope.data){
        var newArray = $scope.data[i].split(',');
        seriesData.title= newArray[0];
        newArray.shift();
        
       seriesData.graphArray = newArray.map(function(item){
           return {
                "date": item.substr(0, item.indexOf("|")),
                "value": (item.substr(item.indexOf("|")+1))
            };
             
        });
         
        makeChart(seriesData,i)
    }
   }
      
});