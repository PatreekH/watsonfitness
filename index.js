var currentHeight;
var contactReason = 'Free Consultation';
var methOfContact = 'In Person'; 
var apptTime = '7:00am';
var apptLocation = 'Fitness CF';
$(document).ready(function(){
	currentHeight = window.innerHeight;
	$('#home-parallax').css('height',  window.innerHeight-60);
});
var password = '';
$('#full-site').on('click', '.music-btn', function(){
	var letter = $(this).attr("data-id");
	password+=letter;
	if(password == 'music'){
		var pw = prompt('password?');
		if(pw == 'watty'){
			$('#site-body').html(musicPage);
			$('#mobile-nav-fixed').css("display", "none");
			$('#header-nav-fixed').css("display", "none");
			$('#footer-section').css("display", "none");
			$('#site-body').css("paddingTop", "0px");
			$('#full-site').css("height", "100%");
			$('#site-body').css("height", "100%");
			$('#site-body-row').css("height", "100%");
		} else {
			alert(':(');
		};	
	};
});
$('#full-site').on('click', '#return-site-btn', function(){
	$('#mobile-nav-fixed').css("display", "block");
	$('#footer-section').css("display", "block");
	$('#header-nav-fixed').css("display", "block");
	$('#site-body').css("paddingTop", "60px");
	$('#full-site').css("height", "auto");
	$('#site-body').css("height", "auto");
	$('#site-body-row').css("height", "auto");	
	$(window).scrollTop(0);
	$('#site-body').html(homePage+abtmePage);
	$('#home-parallax').css('height',  window.innerHeight-60);
});
$("form").submit(function(e){
	e.preventDefault();
	var first = $('#firstname-input').val();
	var last = $('#lastname-input').val();
	var email = $('#email-input').val();
	var date = $('.datepicker').val();
	if(apptLocation == 'Fitness CF'){
		var apptAddress = '1714 US Highway 27 Clermont, FL 34714';
	} else if(apptLocation == 'Other'){
		var apptAddress = $('#meetup-address').val();
	} else {
		var apptAddress = 'None';
	};
	var phoneNum = $('#phone-input').val();
	var details = $('#details-input').val();


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


});
$('#full-site').on('click', '.banner-btns, .side-nav-btn, #banner-title', function(){
	var section = parseInt($(this).attr("data-id"));
	password = '';
	$(window).scrollTop(0);
	if(section == '0'){ //home
		$(window).scrollTop(0);
		$('#site-body').html(homePage+abtmePage);
	} else if(section == '1'){ //about me
		$('#site-body').html(homePage+abtmePage);
		$("body,html").animate({
			scrollTop: window.innerHeight-10
		}, 800);
	} else if(section == '2'){ //my services
		$('#site-body').html(servPage);
	} else if(section == '3'){ //free consult
		loadContactPage();
	} else if(section == '4'){ //nutrition
		$('#site-body').html(nutPage);
	} else if(section == '5'){ //contact me
		loadContactPage();
		scrollContact();
	};
	if(menuStatus){
		$('.change').removeClass('change');
		menuStatus = false
		$('.side-nav').animate({left: "-75%"});
		$('#site-body-row').css("opacity", "1");
	};
	$('#home-parallax').css('height',  window.innerHeight-60);
	var rellax = new Rellax('.rellax');
});
$('#full-site').on('click', '.sched-btn, #footer-consult-btn', function(){
	password = '';
	loadContactPage();
	scrollContact();
});
function loadContactPage(){
	$('#site-body').html(consultPage+contactPage);
	$('.datepicker').datepicker(options);
};
function scrollContact(){
	$(window).scrollTop(0);
	setTimeout(function(){
		var consultHeight = $("#consult-section").height();
		console.log(consultHeight);		
		$('html,body').animate({
        	scrollTop: consultHeight+40
    	});
	}, 120);	
}
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
var menuStatus = false;
function openMenu(x) {
	password = '';
	x.classList.toggle("change");
	if(menuStatus == false){
		menuStatus = true;
		$('.side-nav').animate({left: '0px'});
		$('#site-body-row').css('opacity', '0.25');
	} else {
		menuStatus = false
		$('.side-nav').animate({left: '-75%'});
		$('#site-body-row').css('opacity', '1');
	}
}
$(window).resize(function() {
	if ($(window).width() > 992) {
	   $('#site-body-row').css('opacity', '1');
	} else {
		if(menuStatus){
			$('#site-body-row').css('opacity', '0.25');
		};
	};
});
// <!-- have min be today -->
var options={
        format: 'mm/dd/yyyy',
        todayHighlight: true,
        autoclose: true
      };


AOS.init();