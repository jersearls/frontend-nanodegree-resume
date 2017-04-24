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

