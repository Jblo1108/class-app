var classesReq = Titanium.Network.createHTTPClient();
$.classReq.addEventListener('click', function(e) {
	classReq.open("POST","http://stephen-wu.com/cmsc491/getClasses.php?username="+username);
		var params = {
            username: username.value,
             };
             classReq.send(params);
             

classReq.onload = function()
{
    var json = this.responseText;
    var response = JSON.parse(json);
    if (response.logged == true)
    {
      
    }
    else
    {
        alert(response.message);
    }
};