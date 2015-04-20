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

login();