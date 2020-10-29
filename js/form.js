(function() {
	const formButton = document.querySelector('.form-button');
	const appointmentForm = document.querySelector('.appointment-form');

	appointmentForm.style.top = '-100%';

	const toggleAppointmentFormVisibility = () => {
		if (document.querySelector('.appointment-form').style.top === '-100px') {
			document.querySelector('.appointment-form').style.top === '0px';
		} else {
			document.querySelector('.appointment-form').style.top === '-100px'
		}
	}
		/*
		if (appointmentForm.style.top === '-100%') {
			appointmentForm.style.top === '0';
			alert ('Ку-ку');
		} else {
			appointmentForm.style.top === '-100%';
		}
	}
*/
	formButton.addEventListener('click',()=> toggleAppointmentFormVisibility);

}());