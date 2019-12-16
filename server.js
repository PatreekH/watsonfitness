
// Dependencies
// =============================================================
	var express = require("express");
	var bodyParser = require("body-parser");
// =============================================================

// Database Setup
// =============================================================
	var mysql = require('mysql');

	// var con = mysql.createConnection({
	//   host: "localhost",
	//   user: "root",
	//   password: "newave",
	//   database: "address_data"
	// });

	// var addyLatLongs = [];

	// con.connect(function(err) {
	// 	if (err) throw err;
	// 	console.log("Database Connected!");
	// 	con.query("SELECT * FROM address", function (err, result, fields) {
	// 		if (err) throw err;
	// 		// console.log(addyLatLongs);
	// 	});
	// });
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
	app.get('/get-all-data', function(req, res){

	});
// =============================================================

// Twilio
// =============================================================



var Twilio = require('twilio');

var accountSid = 'ACb8b154266a476a47016f0d5c66403123';
var token = '55b1feea705a213d70ac4f0b9a36580a';

var twilio = new Twilio(accountSid, token);

function sendMsg(){


	twilio.messages.create({
	  from: '+14243724246',
	  to: '+14077174398',
	  // to: '+13212783762',
	  body: '>>>Train With Blaine<<< \n\n NEW MESSAGE \n\n name: patrick \n\n email: patty@hotmail.com \n\n reason: Free Consultation \n\n appt date: 12/14/2019 \n\n appt time: 1:00pm \n\n phone #: 407-717-4398 \n\n details: \n "Testing to see if this works"'
	}, function(err, result) {
		if(err){ console.log(err); console.log('WARNING: unauthorized access. Report how you got here at https://www.verizon.com/info/reportsecurityvulnerability/') } else {
		  console.log('Created message using callback');
		  console.log(result.sid);
		};
	});



};

// sendMsg();




















// =============================================================


	// Starts the server
// =============================================================
	app.listen(process.env.PORT || 3000, function(){
		console.log("Express server running on port %d in %s mode", this.address().port, app.settings.env);

	});
// =============================================================