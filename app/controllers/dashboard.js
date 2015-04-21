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
var checkInReq = Titanium.Network.createHTTPClient();
 
checkInReq.addEventListener('click',function(e)
{
	var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
	var latitude1 = 37.545569;
	var longitude1 = -77.449576 ;
	if(latitude==latitude1 && longitude==longitude1){
        loginReq.open("POST","http://stephen-wu.com/cmsc491/checkin.php?username="+username+"&classname="+class_name);
        var params = {
            username: username.value,
        };
        loginReq.send(params);
    }
    else
    {
        alert("too far away");
    }
});
function sendEmail() {
	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.open();
}

loadWeather();
//This refreshes the weather feed every 15 minutes
setInterval(loadWeather, 900000);