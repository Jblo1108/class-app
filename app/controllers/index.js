var GoogleAuth = require('googleAuth');
var googleAuth = new GoogleAuth({
	clientId : '809132537693-fe2pma0vrh30dcu758m4pvh9lug71e71.apps.googleusercontent.com',
	clientSecret : 'yIUELoD1Acvw-vMYY4rsgHcs',
	propertyName : 'googleToken',
	quiet : false,
	scope : [ 'https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/tasks.readonly' ]
});

function doClick(e) {
    alert("You clicked a button!");
    googleAuth.isAuthorized(function() {
        Ti.API.info('Access Token: ' + googleAuth.getAccessToken());
        //user is authorized so do something... just dont forget to add accessToken to your requests

    }, function() {
        //authorize first
        googleAuth.authorize();
    });
}

$.index.open();
