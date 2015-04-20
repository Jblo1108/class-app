var loginReq = Titanium.Network.createHTTPClient();

$.loginBtn.addEventListener('click', function(e) {
	if($.username.value != '' && $.password.value != '') {
		alert('hooray!');
	} else {
		alert('Username/Password are required.');
	}
});