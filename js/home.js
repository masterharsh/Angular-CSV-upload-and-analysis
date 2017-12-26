myApp.controller('HomeController',function($scope,$state,graphData){
 
     var read;
     $scope.data = [];
        angular.element(document.getElementById('csvFile')).bind('change',function(event){
                    var files = event.target.files;
                    if (files.length) {
                         document.getElementById('uploadBtn').disabled=false;
                     read = new FileReader();
                     read.readAsText(files[0]);                                  
            }// Reading data from csv
        });

    $scope.upload = function(){
      var arr = read.result.replace(/\n/g, "||").split('||');
        graphData.setData(arr);  
        document.getElementById('analysisBtn').disabled=false;
        $scope.message="File uploaded succesfully";
    }//function to push csv data to array
    
  
});