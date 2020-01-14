
var musicPage = '<div id="music-section" class="row section">'+
'				<div class="col-lg-4">'+
'					<div id="return-site-btn" class="banner-btns banner-btn3">Return to Site</div>'+
'					<p>Lost2</p><audio src="lost2.wav" controls><source src="./lost2.wav" type="audio/wav">Your browser does not support the audio element.</audio>'+
'				</div>'+
'				<div class="col-lg-4">'+
'					<div id="banner-title">'+
'						<h3 id="name-title">Watty</h3>'+
'						<h5 id="under-title">Rapper</h5>'+
'					</div>'+
'				</div>'+
'				<div class="col-lg-4">'+
'					<div class="banner-btns banner-btn3">Nightrider</div>'+
'					<div class="banner-btns banner-btn3">in the xone</div>'+
'					<div class="banner-btns banner-btn3">Songs that no one sings</div>'+
'					<div class="banner-btns banner-btn3">How did I end up here without you</div>'+
'				</div>		'+
'			</div>';

var currentHeight;

$(document).ready(function(){
	currentHeight = window.innerHeight;
	$('#home-parallax').css('height',  window.innerHeight-60);


});

var contactReason = 'Free Consultation';
var methOfContact = 'In Person'; 
var apptTime = '7:00am';
var apptLocation = 'Fitness CF';

$("form").submit(function(e){
	e.preventDefault();

	var first = $('#firstname-input').val();
	var last = $('#lastname-input').val();

	var email = $('#email-input').val();
	//reason == contactReason
	// meth of contact methOfContact = 
	var date = $('.datepicker').val();
	//var apptTime
	//apptLoc
	if(apptLocation == 'Fitness CF'){
		var apptAddress = '1714 US Highway 27 Clermont, FL 34714';
	} else if(apptLocation == 'Other'){
		var apptAddress = $('#meetup-address').val();
	} else {
		var apptAddress = 'None';
	}
	var phoneNum = $('#phone-input').val();
	var details = $('#details-input').val();


	if(name == 'music' && email == '' && details == ''){
		
		var password = prompt('password');

		if(password == 'watty'){
			$('#full-site').html(musicPage);
		} else {
			alert(':(');
		};

	} else {


		//create validation

		var contactForm = {
			first: first,
			last: last,
			email: email,
			reason: contactReason,
			methOfContact: methOfContact,
			apptTime: apptTime,
			apptLocation: apptLocation,
			apptAddress: apptAddress,
			phoneNum: phoneNum,
			details: details
		};

		console.log(contactForm);



		// *require things here, alert if empty

		// ajax call

		// loading screen while awaiting response

		//refresh page after submission?

	};

});


$('#full-site').on('click', '#return-site-btn', function(){

	$('#full-site').html(mainPage);

});


$('#full-site').on('click', '.banner-btns', function(){

	var section = parseInt($(this).attr("data-id"));

	window.scrollTo(0, 0);

	if(section == '0'){ //home

		$('#site-body').html(homePage+abtmePage);

	} else if(section == '1'){ //about me

		$('#site-body').html(homePage+abtmePage);
		$("body,html").animate({
			scrollTop: window.innerHeight-40
		}, 800);

	} else if(section == '2'){ //my services

		$('#site-body').html(servPage);

	} else if(section == '3'){ //free consult

		loadContactPage();

	} else if(section == '4'){ //nutrition

		$('#site-body').html(nutPage);

	} else if(section == '5'){ //contact me

		loadContactPage();
		$("body,html").animate({
			scrollTop: "600px"
		}, 800);		

	}

	$('#home-parallax').css('height',  window.innerHeight-60);

	var rellax = new Rellax('.rellax');

});

$('#full-site').on('click', '.sched-btn, #footer-consult-btn', function(){

	loadContactPage();

});

function loadContactPage(){

	window.scrollTo(0, 0);

	$('#site-body').html(consultPage+contactPage);

	//initalizes datepicker
	$('.datepicker').datepicker(options);

}


//CHANGE THIS TO dropdown-item on CLICK
$('#full-site').on('click', '.dropdown-item', function(){

	if($(this).attr("data-type") == 'time'){

		apptTime = $(this).attr("data-id");
		$('#time-label').html($(this).attr("data-id"));

	} else if($(this).attr("data-type") == 'reason'){

	    if ($(this).attr("data-id") == 'consult'){

	    	$('#phone-label').removeClass('phone-spacing');

	    	methOfContact = 'In Person';
	    	contactReason = 'Free Consultation';

	    	$('#reason-label').html('Free Consultation');
	        $('#extra-space1').html(freeConsultSelected);

	    } else if($(this).attr("data-id") == 'sched'){

	    	$('#phone-label').removeClass('phone-spacing');

	    	methOfContact = 'In Person';
	    	contactReason = 'Schedule Workout';

	    	$('#reason-label').html('Schedule Workout');
	    	$('#extra-space1').html(scheduleSelected);

	    } else {

	    	methOfContact = 'Over Phone';
	    	contactReason = 'Other';

	    	$('#phone-label').addClass('phone-spacing');

	    	$('#reason-label').html('Other');
	        $('#extra-space1').empty();

	    };

    	$('.datepicker').datepicker(options);

	};

});

$('#full-site').on('click', '#in-per', function(){

	if($('#in-per').is(':checked')) {

		methOfContact = 'In Person';
		$('#extra-space2').html(locationInput);

	};
});

$('#full-site').on('click', '#ovr-pho', function(){

	if($('#ovr-pho').is(':checked')) {

		methOfContact = 'Over Phone';
		apptLocation = 'None';
		$('#extra-space2').empty();

	};
});

$('#full-site').on('click', '#my-gym', function(){

	if($('#my-gym').is(':checked')) {

		apptLocation = 'Fitness CF';
		$('#meetup-address-col').html('<a href="https://goo.gl/maps/gU8nXEFHxjUyBtcW6">1714 US Highway 27 Clermont, FL 34714</a>');

	};

});

$('#full-site').on('click', '#other-gym', function(){

	if($('#other-gym').is(':checked')) {

		apptLocation = 'Other';
		$('#meetup-address-col').html('<input id="meetup-address" class="form-control" placeholder="1234 street city, state zip" type="text" name="meetupAddress" required>');

	};

});

$('#full-site').on('click', '#menu-btn', function(){

	openMenu(this);

});

function openMenu(x) {

  x.classList.toggle("change");
  $('#banner-btn-container').css("display", "block");

}

// <!-- have min be today -->
var options={
        format: 'mm/dd/yyyy',
        todayHighlight: true,
        autoclose: true
      };


AOS.init();