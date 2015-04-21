var loginReq = Titanium.Network.createHTTPClient();

$.loginBtn.addEventListener('click', function(e) {
	if($.username.value != '' && $.password.value != '') {
		loginReq.open("POST","http://stephen-wu.com/cmsc491/login.php?username="+username.value+"&password"+password.value);
        var params = {
            username: username.value,
            password: Ti.Utils.md5HexDigest(password.value)
        };
        loginReq.send(params);
	} else {
		alert('Username/Password are required.');
	}
});