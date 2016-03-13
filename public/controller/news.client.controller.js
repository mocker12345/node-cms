/**
 * Created by rancongjie on 16/3/13.
 */
angular.module('webapp')
  .controller('newsController', ["$scope", "newsService", function ($scope, newsService) {
    $scope.list = [];
    $scope.new = {};
    $scope.getList = function () {
      newsService.list().then(function (data) {
        $scope.list = data;
      }, function (err) {
        console.error(err);
      });
    };
    $scope.getList();

    $scope.openNewsDetail = function (id) {
      $scope.getDetail(id);
      $('#modal-detail').modal('show');
    };
    $scope.getDetail = function (id) {
      newsService.detail(id).then(function (data) {
        $scope.newsDetail = data;
      }, function (err) {
        console.error(err);
      })
    };
    $scope.createNews = function (data) {
      $scope.editorMessage = '';
      if (!$scope.new.title) {
        $scope.editorMessage = 'title must required';
        return;
      }
      if (!$scope.new.content) {
        $scope.editorMessage = 'content must required';
        return;
      }
      newsService.create(data).then(function (res) {
        $('#modal-editor').modal('hide');
        $scope.getList();
      }, function (err) {
        $scope.editorMessage = err;
      });
    };
    $scope.openEditor = function () {
      $('#modal-editor').modal('show');
    }
  }]);