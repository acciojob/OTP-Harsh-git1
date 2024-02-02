//your JS code here. If required.
function limitInput(inputField, inputid) {
	// Get the input value
	// console.log("inside limitInput");
	// console.log(inputField);
	var inputValue = inputField.value;
	
	// If input value is empty or not a digit, clear the input field
	if (!(/^\d$/.test(inputValue))) {
		//console.log("reached here wrong");
		inputField.value = '';
		
	}else if(inputid != null) {
		//console.log("reached here");
		var element = document.getElementById(inputid);
		element.focus();
	}
}


function goback(inputField, inputid) {
	if (event.key === 'Backspace' && inputField.value === '') {
		document.getElementById(inputid).focus(); // Focus on the previous input field
	}	
}