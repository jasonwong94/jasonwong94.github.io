//move to a separate file...

var resume = {
	"education": [
		{
			"title": "University of Toronto",
			"major": "B.ASc - Electrical Engineering",
			"duration": [2012, 2017]
		}, {

		}
	],
	"experience": [
		{
			"title": "Front End Developer",
			"company": "You're Next Career Network",
			"duration": ["May 2016", "May 2017"],
			"keypoints": [
				"Implemented new features to the existing website to cater for engineering students. Features include a new event and job listings to expand services to students",
				"Collaborated with various undergraduate students from different coding background to create a framework architecture for future YNCN developers"
			]
		},{
			"title": "Summer Volunteer Researcher",
			"company": "University of Toronto",
			"duration": ["May 2016", "August 2016"],
			"keypoints": [
				"Assisted in investigating Class D Audio Amplifiers with Si and GaN transistors",
				"Utilized lab equipment (logic analyzer and Audio Precision interface) to analyze digitalized sound sent to programmable codec board",
				"Interfaced a CODEC device using C"
			]
		},{
			"title": "Front End Intern",
			"company": "AdParlor",
			"duration": ["November 2015", "April 2016"],
			"keypoints": [
				"Enhanced and modified the frontend AdParlor platform using Backbone, MarionetteJS and StickIt",
				"Proactively investigated and closed bug requests as they became available through request queues- reduced existing bug queue by 40%",
				"Maintained frontend system with Twitter and Facebook advertising APIs via collaboration with backend developer to minimize downtime",
				"Added new features and assisted with testing during beta and public launch phases for admocks.adparlor.com"
			]
		},{
			"title": "Software Developer",
			"company": "Desire2Learn (D2L)",
			"duration": ["May 2015", "September 2015"],
			"keypoints": [
				"Refurbished existing product features using Javascript libraries (NodeJS, Karma and Angular), HTML and Sass",
				"Collaborated and modified code with senior developers through GitHub, communicated with UI designer to redesign UI",
				"Learned development cycle and procedure; first internship with industry experience in web development after self-teaching web development"
			]
		}
	],
	"projects": {},
	"skills": [
		{
			"title": "Web Development",
			"keypoints": ["HTML", "Javascript", "CSS", "MongoDB"],
			"description": "Experience with various JS frameworks- AngularJS, Marionette/Backbone. I have played around with NodeJS and libraries such as Karma, SaSS and Gulp"
		},
		{
			"title": "Embedded Systems",
			"keypoints": ["Arduino", "Raspberry Pi", "Altera FPGA"],
			"description": "Worked with Arduino during Spark to integrate electrical and mechanical components. In addition, I have worked with FPGAs for digital systems courses",
		},
		{
			"title": "Analyitcal",
			"keypoints": ["LTspice", "MATLAB", "PLECS"],
			"description": "Utilized MATLAB for controls courses as well for analog circuits courses for feedback design"
		}
	]
}

angular.module("jasonwong94-resume", [])
	.controller('resumeController', ['$http', '$scope', 'resumeDebugger', function($http, $scope, resumeDebugger){
		console.info("Controller loaded!")

		var content = this;
		content.resume = resume;

		resumeDebugger.printType("Education", content.resume.education)	;
		resumeDebugger.printType("Experience", content.resume.experience)
		resumeDebugger.printType("Projects", content.resume.projects)
		resumeDebugger.printType("Skills", content.resume.skills)

		$scope.smth = [1, 2, 3, 4]
		content.smth = [5, 6, 7, 8]

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
