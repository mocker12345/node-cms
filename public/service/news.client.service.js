/**
 * Created by rancongjie on 16/3/13.
 */
angular.module('webapp').service('newsService',["$http","$q",function($http,$q){
  function handleRequest(method,url,data){
    var defered = $q.defer();
    var config = {
      method:method,
      url:url
    };
    if("POST" === method){
      config.data = data;
    }
    if ("GET" === method){
      config.params = data;
    }
    $http(config).success(function (data) {
      return defered.resolve(data);
    }).error(function (err) {
      return defered.reject(err);
    });
    return defered.promise;

  }
  return {
    list: function (params) {
      return handleRequest('GET','/news',params);
    },
    create: function (data) {
      return handleRequest('POST','/news',data);
    },
    detail: function (id) {
      return handleRequest('GET','/news/'+id);
    }
  }
}]);