angular.module("jasonwong94-resume", [])
	.controller('resumeController', ['$http', '$scope', 'resumeDebugger', function($http, $scope, resumeDebugger){
		console.info("Controller loaded!")

		var content = this;

		content.hardware = true;
		content.software = true;

		content.getResume = function(){
			$http.get("/src/static/js/resume.json").then(function(response, error){
			 	if(!error){
					content.dataFetched = new Date();

					content.resume = response.data
					resumeDebugger.printType("Education", content.resume.education)	;
					resumeDebugger.printType("Experience", content.resume.experience)
					resumeDebugger.printType("Projects", content.resume.projects)
					resumeDebugger.printType("Skills", content.resume.skills)
				} else {

				}
			})
		}

		content.toggleHardware= function(){
			content.hardware = !content.hardware
		}

		content.toggleSoftware= function(){
			content.software = !content.software
		}

		content.isType= function(type){
			return content[type]
		}

		this.getResume()
	}])

	//some debug feature to help debug the code lol
	.factory('resumeDebugger', function(){
		var printType = function(title, data){
			console.debug(title + " : " + typeof(data));
			console.debug(data);
		}

		return{
			printType: printType
		}

	})
