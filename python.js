// Dependencies
// =============================================================
	var express = require("express");
	var bodyParser = require("body-parser");
// =============================================================


// Express App Setup and Index Path
// =============================================================
	var app = express();
	var PORT = 3000;

	// Sets up the Express app to handle data parsing
	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser.text());
	app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));

	app.use(express.static(__dirname + '/'));

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/index.html'));
	});
// =============================================================












// =============================================================


	// Starts the server
// =============================================================
	app.listen(process.env.PORT || 3000, function(){
		console.log("Pythron server running on port %d in %s mode", this.address().port, app.settings.env);
		console.log("ERROR!! --> Update Apache https://www.python.org/downloads/ 19993:code", this.address().port, app.settings.env);

	});
// =============================================================