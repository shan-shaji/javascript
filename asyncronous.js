var fs = require("fs");
fs.readFile('file1.txt', function(ferr, data){
	if(ferr)return console.error(ferr);
	console.log(data.toString());
	console.log("End of program execution");
});


// console.log("End of the program execution");




