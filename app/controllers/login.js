var loginReq = Titanium.Network.createHTTPClient();

$.loginBtn.addEventListener('click', function(e) {
	if($.username.value != '' && $.password.value != '') {
		loginReq.open("POST","http://stephen-wu.com/cmsc491/login.php?username="+$.username.value+"&password="+$.password.value);
        var params = {
            username: $.username.value,
            password: Ti.Utils.md5HexDigest($.password.value)
        };
        loginReq.send(params);
	} else {
		alert('Username/Password are required.');
	}
});

loginReq.onload = function()
{
    var json = this.responseText;
    var response = JSON.parse(json);
    if (response.logged == true)
    {
        alert("Welcome " + response.name + ". Your email is: " + response.email);
        Alloy.Globals.username = $.username.value;
    }
    else
    {
        alert(response.message);
    }
};