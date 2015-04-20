function loadWeather() {
	var url = "http://api.wunderground.com/api/1e757fdf8c6a622c/conditions/q/VA/Richmond.json";
	var loader = Titanium.Network.createHTTPClient({
		onload: function(e) {
			weatherJson = JSON.parse(this.responseText);
			//Ti.API.info(this.responseText);
			$.weatherInfo.setText("Current Temperature: " + weatherJson.current_observation.temp_f + "\nCurrent Conditions: " + weatherJson.current_observation.weather);
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

function sendEmail() {
	var emailDialog = Ti.UI.createEmailDialog()
	emailDialog.open();
}
// loadWeather();
// setInterval(loadWeather, 900000);