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
	
