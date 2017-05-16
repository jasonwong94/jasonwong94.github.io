angular.module("jasonwong94-mainpage", [])
  .controller('mainPageController', ["$http", "$scope", function($http, $scope){
      var content = this;
      content.isDialogOpen = true;
      content.name = undefined;

      console.debug("Controller loaded!");

      content.submit = function(){
        console.debug("Name submitted!");
        this.togglePane();
      }

      content.togglePane = function(){
        content.isDialogOpen = !content.isDialogOpen
      }

      content.resetName = function(){
        content.name = undefined;
      }
    }
  ])
