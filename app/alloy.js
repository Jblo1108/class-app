// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.GoogleAuth_module = require('googleAuth');
Alloy.Globals.googleAuth = new Alloy.Globals.GoogleAuth_module({
	clientId : '809132537693-fe2pma0vrh30dcu758m4pvh9lug71e71.apps.googleusercontent.com',
	clientSecret : 'yIUELoD1Acvw-vMYY4rsgHcs',
	propertyName : 'googleToken',
	quiet : false,
	scope : ['https://www.googleapis.com/auth/userinfo.profile']
});