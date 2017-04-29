//$("#main").append("Jeremy Searls is a really neat fellow ");
//var awesome = "I am AWESOME!";
//var fun = awesome.replace("AWESOME", "FUN");
//console.log(awesome);
//console.log(fun);
//$("#main").append(fun);

var myName = "Jeremy Searls"
var formattedName = HTMLheaderName.replace("%data%", myName);

var myRole = "Technical Consultant"
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
"name" : "Jeremy Searls",
"role": "Developer",
"contact_info" : {
  "email" : "searls@me.com",
  "phone" : "734-645-6189",
  "twitter" : "@jersearls"
},
"welcome_message" : "If you can read this, you don't need glasses",
"picture_url" : "https://avatars0.githubusercontent.com/u/13757044?v=3&s=460",
	"skills" : [
		"Hadoop Ecosystem Applications",
		"open source Data Tools",
		"Jupyter Notebook",
		"Anaconda",
		"NumPy",
		"SciPy",
		"Apache Spark",
		"Flume",
		"Apache Falcon",
		"Oozie"
	]
};

//Example of dot notation, creates city key with kzoo value
//bio.city = "Kalamazoo"
//
//same result as dot notation
//bio["city"] = "Kalamazoo"

var work = {}
	work.position = "Technical Consultant";
	work.employer = "Ranzal";
	work.years = "2";
	work.city = "Chicago";

var education = "schools": [{	{"name": "MSU",
	"city" : "Grand Rapids",
	"degree" : "Master of Arts",
	"major" : "Clinical Medicine"
	},
	{"name": "LSSU",
	"city" : "Sault Ste Marie",
	"degree" : "Bachelor of Science",
	"major" : "Fire Science"
	}
    ]
}
	education["name"] = "MSU";
	education["years_attended"] = "2013-2015";
	education["city"] = "Grand Rapids";

$("#main").append(work["position"]);
$("#main").append(education.name);

