// var GoogleAuth = require('googleAuth');
// var googleAuth = new GoogleAuth({
	// clientId : '809132537693-fe2pma0vrh30dcu758m4pvh9lug71e71.apps.googleusercontent.com',
	// clientSecret : 'yIUELoD1Acvw-vMYY4rsgHcs',
	// propertyName : 'googleToken',
	// quiet : false,
	// scope : [ 'https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/tasks.readonly' ]
// });

var googleAuth = Alloy.Globals.googleAuth;

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