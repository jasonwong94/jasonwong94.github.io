var projects = [{
  "title": "Connect 4",
  "tag": "Embedded",
  "description": "In my opinion, one of the best projects I've managed while in Spark."
}, {
  "title": "Wall Charging with GaN",
  "tag": "Hardware",
  "description": "4th Year Capstone Design Project. For capstone, we designed a USB-C controller, comparing effeciencies of gallium nitride (GaN) vs silicon (Si) transistors"
}, {
  "title": "You're Next Career Network",
  "tag": "Software",
  "description": "Designed and brought new features to the You're Next website. New features include events, jobs and resources. Developed with Python and jQuery"
}, {
  "title": "Android Development",
  "tag": "Software",
  "description": "Designing an Android App.."
}, {
  "title": "Music Switchboard",
  "tag": "Embedded",
  "description": ""
}]

angular.module("jasonwong94-mainpage", [])
  .controller('mainPageController', ["$http", "$scope", function($http, $scope){
      var content = this;
      content.isDialogOpen = true;
      content.name = undefined;
      content.projects = projects;

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
