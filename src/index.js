angular.module("jasonwong94-mainpage", [])
  .controller('mainPageController', ["$http", "$scope", "$interval", function($http, $scope, $interval){
      var content = this;
      content.isDialogOpen = true;
      content.isSubmitted = false;
      content.name = undefined;
      content.time = new Date().toLocaleTimeString();
      // content.projects = projects;
      content.projectID = 0;

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

      content.getProject = function(){
        $http.get('./src/static/js/projects.json').then(function(response, error){
          if(!error){
            content.projects = response.data;
          } else {
            //content.projects = data.response;
          }
        })
      }

      content.selectProject = function(projectID){
        content.projectID = projectID;
        console.info(content.projectID)
      }

      content.isProject = function(projectID){
        return content.projectID == projectID;
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

      this.getProject()
    }
  ])
