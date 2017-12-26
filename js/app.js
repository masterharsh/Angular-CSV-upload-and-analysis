///////////////////////////////////////////////////////POC made by Harsh Jain///////////////////////////////////////////////////
////////////////////////////////////////////////////////25-12-2017//////////////////////////////////////////////////////////////
var myApp = angular.module('fissionLabs',['ui.router']);


myApp.config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
     .state('home', {
             url: '/home',
            templateUrl: "views/home.html",
            controller: 'HomeController'            
        })
     .state('chart', {
             url: '/chart',
            templateUrl: "views/chart.html",
            controller: 'ChartController'            
  })
    
});

myApp.service('graphData',function(){
     var data = [], getData, setData;
    
     getData = function(){
        return data;
     };
     setData = function(d) {
            data =d;
     };
     return {
        getData: getData,
        setData: setData
       
     };
});//Service to fetch Data from home controller 