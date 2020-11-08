(function() {
	const formButton = document.querySelector('.form-button');
	const formAppointment = document.querySelector('.appointment-form');
  	let clickCounter= 0;
  	console.log (clickCounter);
	formAppointment.style.bottom = '100%';
  
  formButton.onclick = function () {
      if (clickCounter % 2 == 0){

      	formAppointment.style.bottom = '33.5%';
      	clickCounter++;

    } else {

    	formAppointment.style.bottom = '100%';
    	clickCounter++;
    }
  }

}());