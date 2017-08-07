/*
	show the list of countries
*/
function showCountries(){
	
	var countryDD = document.getElementById("countryDropDown");
	var selectMenu = document.createElement("SELECT");

	var countryList = new Array("Everywhere","United States","Canada");
	
	for (i=0; i < countryList.length; ++i){
		var opt = document.createElement("OPTION");
		opt.appendChild(document.createTextNode(countryList[i]));
		selectMenu.appendChild(opt);
	}
	countryDD.appendChild(selectMenu);
}