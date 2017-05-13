//move to a separate file...


var resume = {
	"education": [
		{
			"title": "University of Toronto",
			"major": "B.ASc - Electrical Engineering",
			"duration": [2012, 2017]
		}
	],
	"experience": {},
	"projects": {},
	"skills": {}
}

angular.module("jasonwong94-resume", [])
	.controller('resumeController', ['$http', 'resumeDebugger', function($http, resumeDebugger){
		console.info("Controller loaded!")

		var content = this;
		content.resume = resume;

		resumeDebugger.printType("Education", content.resume.education)	;
		resumeDebugger.printType("Experience", content.resume.experience)
		resumeDebugger.printType("Projects", content.resume.projects)
		resumeDebugger.printType("Skills", content.resume.skills)

		// todo:
		// $http.get("./src/resume.json").then(function(response){
		// 	console.log(response)
		// })
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