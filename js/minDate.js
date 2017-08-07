/*
	For the date input fields, set min and max as:
	min = today
	max = 10 years from today
*/

function setMinMaxDate(){
	
	var today = new Date();
	var tenyears = new Date();

	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	var lateyyyy = yyyy+10;

	if(dd<10){
		dd='0'+dd
	} 
	if(mm<10){
		mm='0'+mm
	} 

	today = yyyy+'-'+mm+'-'+dd;
	tenyears = lateyyyy+'-'+mm+'-'+dd;

	document.getElementById("earlyStart").setAttribute("min", today);
	document.getElementById("earlyStart").setAttribute("max", tenyears);

	document.getElementById("lateStart").setAttribute("min", today);
	document.getElementById("lateStart").setAttribute("max", tenyears);
}