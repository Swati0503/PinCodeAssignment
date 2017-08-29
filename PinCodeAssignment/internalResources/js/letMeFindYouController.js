letMeFindYouApp.controller("letMeFindYouController", function($scope, $http, $location) {
     $scope.currentPage = 0;
     $scope.pageSize = 10;
     $scope.mapData = [];

    $scope.sortType     = 'mapData.city'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchPinCode   = 'mapData.city';

    $http.get('internalResources/json/mapData.json')
      .success(function(data) {
           console.log("I found You!");
           $scope.mapData = data;
          // console.log($scope.mapData[0].postal_code);
        })
       .error(function() {
           console.log("I didn't got You!");
        });

    $scope.numberOfPages=function(){
        console.log("return "+Math.ceil($scope.mapData.length/$scope.pageSize));
        return Math.ceil($scope.mapData.length/$scope.pageSize);                
    }
    
});