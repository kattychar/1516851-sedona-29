(function() {
	const formButton = document.querySelector('.form-button');
	const formAppointment = document.querySelector('.appointment-form');

	formButton.addEventListener('click',function(event){
		event.preventDefault();
		if (formAppointment.classList.contains("form-appointment-shown")){
			formAppointment.classList.remove("form-appointment-shown");
		}else {
			formAppointment.classList.add("form-appointment-shown")
		}
	})

}());