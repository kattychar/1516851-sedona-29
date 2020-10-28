(function() {
	var buttonForm= document.querySelector('.form-button');
	var form = document.querySelector('.appointment-form ');

	buttonForm.addEventListener('click', function (evt) {
		evt.preventDefault();
		form.classList.toggle('hidden');
		form.classList.toggle('visible');
	}
}());