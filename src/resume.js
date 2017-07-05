angular.module("jasonwong94-resume", [])
	.controller('resumeController', ['$http', '$scope', 'resumeDebugger', function($http, $scope, resumeDebugger){
		console.info("Controller loaded!")

		var content = this;

		$scope.smth = [1, 2, 3, 4]
		content.smth = [5, 6, 7, 8]

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
