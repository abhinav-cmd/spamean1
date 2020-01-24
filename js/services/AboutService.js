angular.module('AboutService',[]).factory('About',['$http',function($http){
    return{
        get:function(){
            return $http.get('/api/abouts');
        },
    delete:function(){
        return $http.delete('/api/abouts'+ id);
    }
    }
}]);