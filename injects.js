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
'						</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="col-lg-12">'+
'							<button id="submit-btn">Submit</button>'+
'						</div>'+
'					</div>		'+
'				</div>'+
'				<div class="col-lg-4"></div>'+
'			</div>';


var freeConsultSelected = '		<div class="row">'+
'									<div class="contact-labels col-lg-12">PREFERED METHOD FOR THE CONSULTATION:</div>'+
'								</div>'+
'								<div class="row">'+
'									<div id="prefered-meth-col" class="col-lg-12">'+
'										<div class="form-check">'+
'										  <label class="form-check-label">'+
'										    <input id="in-per" type="radio" class="form-check-input" name="method" value="person" checked="checked">In Person<br>'+
'										  </label>'+
'										</div>'+
'										<div class="form-check">'+
'										  <label class="form-check-label">'+
'										    <input id="ovr-pho" type="radio" class="form-check-input" name="method" value="phone">Over the Phone<br> '+
'										  </label>'+
'										</div>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<div class="contact-labels col-lg-12">'+
'										<label id="date-title" for="date">DATE:</label>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<input class="datepicker" data-date-format="mm/dd/yyyy" value="mm/dd/yyyy">'+
'								</div>'+
'								<div class="row">'+
'									<div id="time-col" class="col-lg-12">'+
'										<div class="form-group dropdown-group">'+
'											<label id="time-title" for="time">TIME:</label>'+
'											<div class="dropdown dropright">'+
'												<button id="time-label" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">'+
'													7:00am'+
'												</button>'+
'												<div id="time-dropdown" class="dropdown-menu">'+
'													<div class="dropdown-item" data-type="time" data-id="7:00am">7:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="7:30am">7:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="8:00am">8:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="8:30am">8:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="9:00am">9:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="9:30am">9:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="10:00am">10:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="10:30am">10:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="11:00am">11:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="11:30am">11:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="12:00pm">12:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="12:30pm">12:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="1:00pm">1:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="1:30pm">1:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:00pm">2:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:30pm">2:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:00pm">3:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="3:30pm">3:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="4:00pm">4:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="4:30pm">4:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="5:00pm">5:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="5:30pm">5:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="6:00pm">6:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="6:30pm">6:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="req">request other</div>'+
'												</div>'+
'											</div>'+
'										</div>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<div id="extra-space2" class="col-lg-12">'+
'										<div class="row">'+
'											<div class="contact-labels col-lg-12">LOCATION TO MEET AT:</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="col-lg-12">'+
'												<div class="form-check">'+
'												  <label class="form-check-label">'+
'												    <input id="my-gym" type="radio" class="form-check-input" name="location" value="mine" checked="checked">Fitness CF<br>'+
'												  </label>'+
'												</div>'+
'												<div class="form-check">'+
'												  <label class="form-check-label">'+
'												    <input id="other-gym" type="radio" class="form-check-input" name="location" value="other">Other<br> '+
'												  </label>'+
'												</div>'+
'											</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="contact-labels col-lg-12">ADDRESS:</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="col-lg-12" id="meetup-address-col" required><a href="https://goo.gl/maps/gU8nXEFHxjUyBtcW6" target="_blank">1714 US Highway 27 Clermont, FL 34714</a></div>'+
'										</div>'+
'									</div>'+
'								</div>';


var scheduleSelected = '		<div class="row">'+
'									<div class="contact-labels col-lg-12">'+
'										<label id="date-title" for="date">DATE:</label>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<input class="datepicker" data-date-format="mm/dd/yyyy" value="mm/dd/yyyy">'+
'								</div>'+
'								<div class="row">'+
'									<div id="time-col" class="col-lg-12">'+
'										<div class="form-group dropdown-group">'+
'											<label id="time-title" for="time">TIME:</label>'+
'											<div class="dropdown dropright">'+
'												<button id="time-label" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">'+
'													7:00am'+
'												</button>'+
'												<div id="time-dropdown" class="dropdown-menu">'+
'													<div class="dropdown-item" data-type="time" data-id="7:00am">7:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="7:30am">7:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="8:00am">8:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="8:30am">8:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="9:00am">9:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="9:30am">9:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="10:00am">10:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="10:30am">10:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="11:00am">11:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="11:30am">11:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="12:00pm">12:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="12:30pm">12:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="1:00pm">1:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="1:30pm">1:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:00pm">2:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:30pm">2:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:00pm">3:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="3:30pm">3:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="4:00pm">4:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="4:30pm">4:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="5:00pm">5:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="5:30pm">5:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="6:00pm">6:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="6:30pm">6:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="req">request other</div>'+
'												</div>'+
'											</div>'+
'										</div>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<div id="extra-space2" class="col-lg-12">'+
'										<div class="row">'+
'											<div class="contact-labels col-lg-12">LOCATION TO MEET AT:</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="col-lg-12">'+
'												<div class="form-check">'+
'												  <label class="form-check-label">'+
'												    <input id="my-gym" type="radio" class="form-check-input" name="location" value="mine" checked="checked">Fitness CF<br>'+
'												  </label>'+
'												</div>'+
'												<div class="form-check">'+
'												  <label class="form-check-label">'+
'												    <input id="other-gym" type="radio" class="form-check-input" name="location" value="other">Other<br> '+
'												  </label>'+
'												</div>'+
'											</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="contact-labels col-lg-12">ADDRESS:</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="col-lg-12" id="meetup-address-col" required><a href="https://goo.gl/maps/gU8nXEFHxjUyBtcW6" target="_blank">1714 US Highway 27 Clermont, FL 34714</a></div>'+
'										</div>'+
'									</div>'+
'								</div>';
	
var locationInput = '<div class="row">'+
'						<div class="contact-labels col-lg-12">LOCATION TO MEET AT:</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="col-lg-12">'+
'							<div class="form-check">'+
'							  <label class="form-check-label">'+
'							    <input id="my-gym" type="radio" class="form-check-input" name="location" value="mine" checked="checked">Fitness CF<br>'+
'							  </label>'+
'							</div>'+
'							<div class="form-check">'+
'							  <label class="form-check-label">'+
'							    <input id="other-gym" type="radio" class="form-check-input" name="location" value="other">Other<br> '+
'							  </label>'+
'							</div>'+
'						</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="contact-labels col-lg-12">ADDRESS:</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="col-lg-12" id="meetup-address-col" required><a href="https://goo.gl/maps/gU8nXEFHxjUyBtcW6" target="_blank">1714 US Highway 27 Clermont, FL 34714</a></div>'+
'					</div>';


var servPage = '<div id="serv-section" class="row section">'+
'				<div class="col-lg-12">'+
'					<div class="row">'+
'						<div class="col-lg-1"></div>'+
'						<div class="col-lg-10">'+
'                   		<h1 id="ptraining-title" data-aos="fade-up" data-aos-offset="150">1 on 1 PERSONAL TRAINING</h1>'+
'                   	</div>'+
'						<div class="col-lg-1"></div>'+
'                   </div>'+
'					<div class="row">'+
'						<div class="col-lg-1"></div>'+
'						<div class="col-lg-10">'+
'							<div id="ptraining-overall-row" class="row">'+
'								<div class="col-lg-7 services" data-aos="fade-up" data-aos-offset="150">'+
'									<img id="ptraining-img" class="imgs" src="./css/img/watty-111.jpg">'+
'								</div>'+
'								<div id="ptraining-includes-col" class="col-lg-5 services" data-aos="fade-up" data-aos-offset="150">'+
'									<div id="ptraining-includes-title">1 on 1 TRAINING INCLUDES:</div><br>'+
'									<div class="ptraining-feat">In person training at <a href="https://goo.gl/maps/gU8nXEFHxjUyBtcW6" target="_blank"><i>Fitness CF</i></a> or facility of your choice</div><br>'+
'									<div class="ptraining-feat">Custom training program</div><br>'+
'									<div class="ptraining-feat">Weekly Nutrition/Macro coaching</div><br>'+
'									<div class="ptraining-feat">Cardio Program (if needed)</div><br>'+
'									<div class="ptraining-feat">InBody Measurements (monthly or bi-weekly)</div><br>'+
'									<button id="ptraining-btn" class="btn btn-danger sched-btn free-con-btn">SCHEDULE FREE CONSULTATION</button>'+
'								</div>					'+
'							</div>'+
'							<div id="ptraining-options-row" class="row">'+
'								<div class="col-lg-4 services" data-aos="fade-up" data-aos-offset="150">'+
'									<div class="pt-options-title"><span style="color:red;">1</span> Time per Week</div>'+
'									<div class="pt-options-text">Maintenance frequency for individuals who feel comfortable working out on their own at the facility of their choice to complete the rest of their weekly workouts.</div>'+
'								</div>'+
'								<div class="col-lg-4 services" data-aos="fade-up" data-aos-offset="150">'+
'									<div class="pt-options-title"><span style="color:red;">2</span> Times per Week</div>'+
'									<div class="pt-options-text">Hybrid program in between working out on your own and working out with me. More coaching time as well as enough time to practice on your own.</div>'+
'								</div>'+
'								<div class="col-lg-4 services" data-aos="fade-up" data-aos-offset="150">'+
'									<div class="pt-options-title"><span style="color:red;">Unlimited</span> Training</div>'+
'									<div class="pt-options-text">The Ultimate lifestyle change. We will jump start your fitness journey by increasing the frequency we see each other and leave no stones un-turned, guaranteeing you the results you\'re looking for.</div>'+
'								</div>					'+
'							</div>'+
'						</div>'+
'						<div class="col-lg-1"></div>'+
'					</div>				'+
'				</div>'+
'			</div>';
	
var contactPage = '<div id="contact-section" class="row section">'+
'				<div class="col-lg-1"></div>'+
'				<div class="col-lg-3"></div>'+
'				<div class="col-lg-4">'+
'					<form class="needs-validated">'+
'						<div id="contact-top" class="row">'+
'							<div class="col-lg-12">'+
'								<div class="row">'+
'									<div class="col-lg-12">'+
'										<h1 id="contact-title">Sign Up Now!</h1>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<div class="col-lg-6">'+
'										<div class="form-group">'+
'											<label for="name">NAME</label>'+
'											<input id="firstname-input" class="form-control" placeholder="first" type="text" name="firstname" required>'+
'										</div>'+
'									</div>'+
'									<div class="col-lg-6">'+
'										<div class="form-group">'+
'											<input id="lastname-input" class="form-control" placeholder="last" type="text" name="lastname" required>'+
'										</div>'+
'									</div>'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="row">'+
'							<div class="col-lg-12">'+
'								<div class="form-group">'+
'									<label id="email-title" for="email">EMAIL</label>'+
'									<input id="email-input"  class="form-control" placeholder="email@email.com" type="email" name="email" required>'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="row">'+
'							<div class="col-lg-12">'+
'								<div class="form-group dropdown-group">'+
'									<label id="reason-title" for="reason">REASON:</label>'+
'									<div class="dropdown dropright">'+
'										<button id="reason-label" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">'+
'											Free Consultation'+
'										</button>'+
'										<div class="dropdown-menu">'+
'											<div class="dropdown-item" data-type="reason" data-id="consult">Free Consultation</div>'+
'											<div class="dropdown-item" data-type="reason" data-id="sched">Schedule Workout</div>'+
'											<div class="dropdown-item" data-type="reason" data-id="othr">Other</div>'+
'										</div>'+
'									</div>'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="row">'+
'							<div id="extra-space1" class="col-lg-12">'+
'								<div class="row">'+
'									<div class="contact-labels col-lg-12">PREFERED METHOD FOR THE CONSULTATION:</div>'+
'								</div>'+
'								<div class="row">'+
'									<div id="prefered-meth-col" class="col-lg-12">'+
'										<div class="form-check">'+
'										  <label class="form-check-label">'+
'										    <input id="in-per" type="radio" class="form-check-input" name="method" value="person" checked="checked">In Person<br>'+
'										  </label>'+
'										</div>'+
'										<div class="form-check">'+
'										  <label class="form-check-label">'+
'										    <input id="ovr-pho" type="radio" class="form-check-input" name="method" value="phone">Over the Phone<br> '+
'										  </label>'+
'										</div>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<div class="contact-labels col-lg-12">'+
'										<label id="date-title" for="date">DATE:</label>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<input class="datepicker" data-date-format="mm/dd/yyyy" value="mm/dd/yyyy">'+
'								</div>'+
'								<div class="row">'+
'									<div id="time-col" class="col-lg-12">'+
'										<div class="form-group dropdown-group">'+
'											<label id="time-title" for="time">TIME:</label>'+
'											<div class="dropdown dropright">'+
'												<button id="time-label" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">'+
'													7:00am'+
'												</button>'+
'												<div id="time-dropdown" class="dropdown-menu">'+
'													<div class="dropdown-item" data-type="time" data-id="7:00am">7:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="7:30am">7:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="8:00am">8:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="8:30am">8:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="9:00am">9:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="9:30am">9:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="10:00am">10:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="10:30am">10:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="11:00am">11:00 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="11:30am">11:30 am</div>'+
'													<div class="dropdown-item" data-type="time" data-id="12:00pm">12:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="12:30pm">12:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="1:00pm">1:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="1:30pm">1:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:00pm">2:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:30pm">2:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="2:00pm">3:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="3:30pm">3:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="4:00pm">4:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="4:30pm">4:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="5:00pm">5:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="5:30pm">5:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="6:00pm">6:00 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="6:30pm">6:30 pm</div>'+
'													<div class="dropdown-item" data-type="time" data-id="req">request other</div>'+
'												</div>'+
'											</div>'+
'										</div>'+
'									</div>'+
'								</div>'+
'								<div class="row">'+
'									<div id="extra-space2" class="col-lg-12">'+
'										<div class="row">'+
'											<div class="contact-labels col-lg-12">LOCATION TO MEET AT:</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="col-lg-12">'+
'												<div class="form-check">'+
'												  <label class="form-check-label">'+
'												    <input id="my-gym" type="radio" class="form-check-input" name="location" value="mine" checked="checked">Fitness CF<br>'+
'												  </label>'+
'												</div>'+
'												<div class="form-check">'+
'												  <label class="form-check-label">'+
'												    <input id="other-gym" type="radio" class="form-check-input" name="location" value="other">Other<br> '+
'												  </label>'+
'												</div>'+
'											</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="contact-labels col-lg-12">ADDRESS:</div>'+
'										</div>'+
'										<div class="row">'+
'											<div class="col-lg-12" id="meetup-address-col" required><a href="https://goo.gl/maps/gU8nXEFHxjUyBtcW6" target="_blank">1714 US Highway 27 Clermont, FL 34714</a></div>'+
'										</div>'+
'									</div>'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="row">'+
'							<div class="col-lg-12">'+
'								<div class="form-group">'+
'									<label id="phone-label" for="phone-num">PHONE #:</label>'+
'									<input id="phone-input" maxlength="12" class="form-control" placeholder="555-555-5555" type="tel" name="phoneNum" required>'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="row">'+
'							<div class="col-lg-12">'+
'								<div class="form-group">'+
'								  <label for="details">DETAILS:</label>'+
'								  <textarea class="form-control rounded-0" id="details-input" name="details" rows="10"></textarea>'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="row">'+
'							<div class="col-lg-12">'+
'								<button id="submit-btn" class="btn btn-light">Submit</button>'+
'							</div>'+
'						</div>'+
'					</form>'+
'				</div>'+
'				<div class="col-lg-3"></div>'+
'				<div class="col-lg-1"></div>'+
'			</div>';

var homePage = '<div id="home-section" class="row section">'+
'						<div class="col-lg-12">'+
'							<div id="home-parallax" class="row">'+
'								<div class="col-lg-1"></div>'+
'								<div id="home-banner" class="col-lg-10">'+
'									<div id="home-banner-name">MARCUS BLAINE</div>'+
'									<div id="home-sub-banner">PERSONAL TRAINER <span class="red-text">&</span> NUTRITIONAL COACHING</div>'+
'									<button class="btn btn-danger sched-btn free-con-btn">SCHEDULE FREE CONSULTATION</button>'+
'								</div>'+
'								<div class="col-lg-1"></div>'+
'							</div>'+
'						</div>'+
'					</div>';
	


var abtmePage = '<div id="abtme-section" class="row section">'+
'						<div class="col-lg-12">'+
'							<div class="row">'+
'								<div class="col-lg-1"></div>'+
'								<div class="col-lg-10">'+
'									<div class="row">'+
'										<div class="col-lg-4" data-aos="fade-up" data-aos-offset="350">'+
'											<h1 id="abtme-title">ABOUT ME</h1>'+
'											<img id="abtme-img" class="imgs" src="./css/img/watty-02.png">'+
'										</div>'+
'										<div id="abtme-text-col" class="col-lg-8" data-aos="fade-up" data-aos-offset="350">'+
'											<p id="abtme-text">I believe that everyone deserves to look and feel how they want. Unfortunately not everyone has the correct knowledge or motivation needed to see those results. I will not let you be one of these people. I will give you the proper knowledge and push you until you are satisfied with how you feel and or look. My goal is to help as many people as possible feel that satisfaction of be coming the best versions of themselves. This journey will not be easy but with my help we will get you to where you need to be. Stop putting other things in your life before your health. At the end of the day our health is all we have.</p>'+
'											<br>'+
'											<div id="abtme-sendoff">Marcus Blaine</div>'+
'										</div>'+
'									</div>'+
'								</div>'+
'								<div class="col-lg-1"></div>'+
'							</div>'+
'						</div>'+
'					</div>';

var consultPage = '<div id="consult-section" class="row section" data-aos="fade-up" data-aos-offset="150">'+
'				<div class="col-lg-12">'+
'					<div id="consult-content" class="row">'+
'						<div class="col-lg-1"></div>'+
'						<div class="col-lg-10">'+
'							<div class="row">'+
'								<div class="col-lg-12">'+
'									<h1 id="consult-title">FREE CONSULTATION</h1>'+
'								</div>'+
'							</div>'+
'							<div class="row">'+
'								<div class="col-lg-6">'+
'									<img id="consult-pic" src="./css/img/consult-pic.jpg">'+
'								</div>'+
'								<div class="col-lg-6">'+
'									<p id="consult-paragraph">Everyone gets a free consultation with me at Fitness CF or facility of your choice. <br><br> We will discuss your goals in depth, go over your medical history to see if there is anything we need to be careful with, and develop a plan best suited for your goals in the time frame that you are looking for <br><br><br><br> Sign Up for your FREE CONSULTATION.</p>'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="col-lg-1"></div>'+
'					</div>'+
'				</div>'+
'			</div>';

var nutPage = '<div id="nut-section" class="row section">'+
'				<div class="col-lg-12">'+
'					<div class="row">'+
'						<div class="col-lg-1"></div>'+
'						<div class="col-lg-10">'+
'                   		<h1 id="nut-title" data-aos="fade-up" data-aos-offset="150">NUTRITION</h1>'+
'                   	</div>'+
'						<div class="col-lg-1"></div>'+
'                   </div>'+
'					<div id="nut-content" class="row" data-aos="fade-up" data-aos-offset="150">'+
'						<div class="col-lg-1"></div>'+
'						<div class="col-lg-10">'+
'							<div class="row">'+
'								<div id="nut-pic-2" class="col-lg-6">'+
'									<img id="nut-pic" src="./css/img/nut-pic.jpg">'+
'								</div>'+
'								<div class="col-lg-6">'+
'									<div id="nut-paragraph"><p id="nut-p-1">The food that we eat day to day does more then just give us fuel for our bodies, it plays a major role on how we look and feel.</p> While exercising plays Not only will I teach you about what foods to eat I will teach you what times of the day are best to eat certain foods. With that being said everyone&rsquo;s body is different so it is very important to have a failed in game plan when it comes to diet.</div>'+
'									<br>'+
'									<button type="button" class="btn btn-warning sched-btn">SCHEDULE FREE NUTRITIONAL CONSULTATION</button>'+
'								</div>'+
'								<div id="nut-pic-1" class="col-lg-6">'+
'									<img id="nut-pic" src="./css/img/nut-pic.jpg">'+
'								</div>'+
'							</div>'+
'						</div>'+
'						<div class="col-lg-1"></div>'+
'					</div>'+
'				</div>'+
'			</div>';