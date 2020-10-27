//declare and assign variable for your library or module
var http = require('http');
var fs = require('fs');
var url = require('url');

//create a function for request and response
http.createServer(function(req,res) {
	var q = url.parse(req.url,true);
	var filename = "." + q.pathname;
// remove the  . html extension 	
	if (filename == './') {filename = './index';}
//add this html variable to filename or Concatenate with filename	
	filename = filename + ".html";
// we are inside a function now add console.log(filename); to show the user		
	console.log(filename);


	fs.readFile(filename, function(err,data){
		if(err) {
			res.writeHead(404,{'Content-Type': 'text/html'});
			return res.end("404 Page not Found");
		
		}
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
	
}).listen(8080);

//Show server running status message  to the user
console.log("Please Wait! server Is listening on port 8080....")