var map, mapCenter, mapOptions, infoWindow, mapZoom = 10;

// Drawing the map
function myMap() {

	//The default center of the map is NYC
	mapCenter = {
		lat : 40.7128,
		lng : -74.0059
	};

	mapOptions = {
		center : mapCenter,
		zoom : mapZoom,
		mapTypeId: google.maps.MapTypeId.ROADMAP 
	};

	map = new google.maps.Map(document.getElementById('mapOfJobs'), mapOptions);
	
	infoWindow = new google.maps.InfoWindow;

	// Get the user's location if browser's geolocation works
	// The map will be loaded around the user's location then
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
    		var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			infoWindow.open(map);
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	}
	else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
                    	'Error: Cannot load your location.' :
                    	'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}