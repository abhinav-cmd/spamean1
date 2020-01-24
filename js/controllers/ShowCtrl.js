angular.module('AddCtrl',[]).controller('ShowController',function($scope,$http){
    $scope.retrieve_data=function(){
      $http.post('/api/abouts',$scope.form_data).then(function(respo){
        console.log(respo);
      });
    }
  });