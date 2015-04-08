var map;
function initialize(){
	var inputLat = [ 
		42.359051307364425,
		42.37680737157286,
		42.376300125104024,
		42.37782185221891,
		42.338244963350846
	];
	var inputLng = [
		-71.06781005859375,
		-71.12136840820312,
		-71.22917175292969,
		-71.15501403808594,
		-71.1309814453125
	];
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
		center: new google.maps.LatLng(42.37782185221891,-71.15501403808594),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(mapCanvas, mapOptions);
	for(var i=0; i<inputLat.length; i++){
		createMarkerAndFence(inputLat[i], inputLng[i]);
	}
}

function createMarkerAndFence(lat, lng){
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat,lng),
		map: map,
	});

	var fence = new google.maps.Circle({
		map: map,
		radius: 1609.3,
		fillColor: '#AA0000'
	});

	fence.bindTo('center', marker, 'position');
}

google.maps.event.addDomListener(window, 'load', initialize);

/*
This code is to get the location of the mouse click
google.maps.event.addListener(map, 'click', function(event) {
		var mLat = event.latLng.lat();
    	var mLng = event.latLng.lng();

    	console.log(mLat + ":" + mLng);
	});
*/