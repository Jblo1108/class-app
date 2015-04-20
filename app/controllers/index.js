var googleAuth = Alloy.Globals.googleAuth;

function loadWeather() {
	var url = "http://api.wunderground.com/api/1e757fdf8c6a622c/conditions/q/VA/Richmond.json";
	var loader = Titanium.Network.createHTTPClient({
		onload: function(e) {
			weatherJson = JSON.parse(this.responseText);
			Ti.API.info(this.responseText);
			alert("Current Temperature: " + weatherJson.current_observation.temp_f + "\nCurrent Conditions: " + weatherJson.current_observation.icon);
		},
		onerror: function(e) {
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout:5000
	});
	loader.open("GET", url);
	loader.send();
}

function login() {
    googleAuth.isAuthorized(function() {
        Ti.API.info('Access Token: ' + googleAuth.getAccessToken());
        //user is authorized so do something... just dont forget to add accessToken to your requests

    }, function() {
        //authorize first
        googleAuth.authorize();
    });
}

function logout() {
	googleAuth.deAuthorize();
}

function openClasses () {
    var classes = Alloy.createController('classes').getView();
    classes.open();
}

function openGrades() {
	var grades = Alloy.createController('grades').getView();
	grades.open();
}
$.index.open();