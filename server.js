
// Dependencies
// =============================================================
	var express = require("express");
	var bodyParser = require("body-parser");
// =============================================================

// Database Setup
// =============================================================
	var mysql = require('mysql');
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

// Routes
// =============================================================
	app.post('/send-form', function(req, res){

		var formData = req.body['formData'];

		sendMsg(formData);

		res.end('{"success" : "Updated Successfully", "status" : 200}');

	});
// =============================================================

// Twilio
// =============================================================

var Twilio = require('twilio');

var accountSid = 'AC9dc753dd9f3825a9702a160d4d17722a';
var token = 'e76cdb44be679c2ca69a04901fe7b032';

var twilio = new Twilio(accountSid, token);

function sendMsg(data){

	console.log(data);


	twilio.messages.create({
	  from: '+12029337071',
	  to: '+14077174398',
	  // to: '+13212783762',
	  body: '>>>Train With Blaine<<< \n\n NEW FORM SUBMISSION \n\n name: '+data.first+' '+data.last+' \n\n email: '+data.email+' \n\n reason: '+data.reason+' \n\n appt date:'+data.apptDate+' \n\n appt time: '+data.apptTime+' \n\n appt location: '+data.apptLocation+' \n\n appt address: '+data.apptAddress+' \n\n prefered method of contact: '+data.methOfContact+' \n\n phone #: '+data.phoneNum+' \n\n details: \n '+data.details+''
	}, function(err, result) {
		if(err){ console.log(err); } else {
		  console.log('Created message using callback');
		  console.log(result.sid);

		};
	});

};




















// =============================================================


	// Starts the server
// =============================================================
	app.listen(process.env.PORT || 3000, function(){
		console.log("Express server running on port %d in %s mode", this.address().port, app.settings.env);

	});
// =============================================================