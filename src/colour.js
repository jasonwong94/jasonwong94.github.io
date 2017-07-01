angular.module('jasonwong94-colour', [])
  .controller('colourController', ["$http", "$scope", function($http, $scope){
    console.info("hello world");

    var content = this;
    content.error = true;
    var URL = "./src/static/css/colour.json"

    this.loadContent = function(){
      content.dataFetched = new Date();

      $http.get(URL).then(function(response){
        console.log(response.message);
        content.data = response.data;
        content.error = false;
      }, function(error){
        console.log(error);
        content.error = true;
      })
    }

    this.loadContent();
  }])
