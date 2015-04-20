var googleAuth = Alloy.Globals.googleAuth;

function login() {
    googleAuth.isAuthorized(function() {
        Ti.API.info('Access Token: ' + googleAuth.getAccessToken());
        //user is authorized so do something... just dont forget to add accessToken to your requests
    }, function() {
        //authorize first
        googleAuth.authorize();
    });
    var url = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + googleAuth.getAccessToken();
	var loader = Titanium.Network.createHTTPClient({
		onload: function(e) {
			userInfo = JSON.parse(this.responseText);
			//Ti.API.info(this.responseText);
			alert(userInfo.id);
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

function logout() {
	googleAuth.deAuthorize();
}

$.index.open();

//login();