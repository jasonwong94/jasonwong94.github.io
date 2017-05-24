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
  "title": "Music Switchboard",
  "tag": "Embedded",
  "description": "A giant array of tactile switches used to compose music. Measuring 4 feet by 3 feet, this enormous (and heavy!) display was programmed with an Arduino and Raspberry Pi. A MOSFET circuit was used to multiplex each column to read the values."
}]

angular.module("jasonwong94-mainpage", [])
  .controller('mainPageController', ["$http", "$scope", "$interval", function($http, $scope, $interval){
      var content = this;
      content.isDialogOpen = true;
      content.isSubmitted = false;
      content.name = undefined;
      content.time = new Date().toLocaleTimeString();
      content.projects = projects;

      console.debug("Controller loaded!");

      $interval(setTime, 1000);

      content.submit = function(){
        console.debug("Name submitted!");
        content.isSubmitted = true;
        content.greeting = setGreeting(content.name)
      }

      content.togglePane = function(){
        content.isDialogOpen = !content.isDialogOpen
      }

      content.resetName = function(){
        content.name = undefined;
        content.isSubmitted = false
      }

      function setTime(){
        content.time = new Date().toLocaleTimeString();
      }

      function setGreeting(name){
        var h = new Date().getHours();
        if(h>=0 && h< 12)
          return "Good Morning, " + name;
        else if( h>=12 && h<=17 )
          return "Good Afternoon, " + name;
        else
          return "Good Evening, " + name;
      }
    }
  ])
