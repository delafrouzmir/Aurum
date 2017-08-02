function myMap() {

	// The default center of the map is New York City
	var mapCenter = {lat: 40.7128, lng: -74.0059};

	var mapOptions = {
    center: mapCenter,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	
	// If the browser supports geolocation,
	// the center of the map would be the user's location
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            mapCenter = {
            	lat: position.coords.latitude,
            	lng: position.coords.longitude
            };
            map.setCenter(mapCenter);
        }
        );
	}

	var map = new google.maps.Map(document.getElementById("mapOfJobs"), mapOptions);
	
}