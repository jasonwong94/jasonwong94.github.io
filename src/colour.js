angular.module('jasonwong94-colour', [])
  .controller('colourController', ["$http", "$scope", function($http, $scope){
    console.info("hello world");

    var content = this;
    var URL = "./src/static/css/colour.json"

    $http.get(URL).then(function(response){
      console.log(response.message);
      content.data = response.data;
      content.dataFetched = new Date()
    })
  }])
