
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

var mainPage = '<div id="home-section" class="row section">'+
'				<div class="col-lg-4">'+
'					<div class="banner-btns banner-btn1">TRANSFORMATIONS</div>'+
'					<div class="banner-btns banner-btn2">NUTRITION</div>'+
'				</div>'+
'				<div class="col-lg-4">'+
'					<div id="banner-title">'+
'						<h3 id="name-title">Marcus Watson</h3>'+
'						<h5 id="under-title">Performance & Nutrition</h5>'+
'					</div>'+
'				</div>'+
'				<div class="col-lg-4">'+
'					<div class="banner-btns banner-btn2">MY SERVICES</div>'+
'					<div class="banner-btns banner-btn2">ABOUT ME</div>'+
'					<div class="banner-btns banner-btn2">CONTACT</div>'+
'				</div>		'+
'			</div>'+
'			<div class="row section">'+
'				ABOUT ME'+
'			</div>'+
'			<div class="row section">'+
'				MY SERVICES'+
'			</div>'+
'			<div class="row section">'+
'				TRANSFORMATIONS'+
'			</div>'+
'			<div class="row section">'+
'				NUTRITION'+
'			</div>'+
'			<div id="contact-section" class="row section">'+
'				<div class="col-lg-4"></div>'+
'				<div class="col-lg-4">'+
'					<div class="row">'+
'						<div class="col-lg-12">NAME:</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="col-lg-12"><input id="name-input" type="text" name="name"></div>'+
'					</div>					'+
'					<div class="row">'+
'						<div id="email-title" class="col-lg-2">EMAIL:</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="col-lg-12"><input id="email-input" type="text" name="email"></div>'+
'					</div>															'+
'					<div id="details" class="row">'+
'						<div class="col-lg-12">DETAILS:</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="col-lg-12">'+
'							<textarea id="details-input"></textarea>'+				
						'</div>'+
					'</div>'+
'					<div class="row">'+
'						<div class="col-lg-12">'+
'							<button id="submit-btn">Submit</button>'+
'						</div>'+
'					</div>		'+
'				</div>'+
'				<div class="col-lg-4"></div>'+
'			</div>';

var currentHeight;

$(document).ready(function(){
	currentHeight = window.innerHeight;
});


$('#full-site').on('click', '#submit-btn', function(){
	var name = $('#name-input').val();
	var email = $('#email-input').val();
	var details = $('#details-input').val();

	console.log(name);
	console.log(email);
	console.log(details);

	if(name == 'music' && email == '' && details == ''){
		
		var password = prompt('password');

		if(password == 'watty'){
			$('#full-site').html(musicPage);
			$('#full-site').prepend('<div class="watty-parallax"><button>IF UR BORED AND READING THIS, CLICK ME!</button></div>');
		} else {
			alert(':(');
		};

	} else {
		// *require things here, alert if empty
	}

});

$('#full-site').on('click', '#return-site-btn', function(){

	$('#full-site').html(mainPage);

});


$('#full-site').on('click', '.banner-btns', function(){

	var section = parseInt($(this).attr("data-id"));
	var scroll; 

	scroll = currentHeight*section;

    $('html,body').animate({
        scrollTop: scroll
    }, 800);	

});