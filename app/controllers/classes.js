$.classesWin.addEventListener("focus", function() {
	var classesReq = Titanium.Network.createHTTPClient({
		onload: function(e) {
		    var json = this.responseText;
		    var response = JSON.parse(json);
		    if (response != null) {
		    	alert('hi');
		    } else {
		        alert("ERROR");
		    }
		},
		onerror: function(e) {
			alert("classes error");
		}
	});
	classesReq.open("POST","http://stephen-wu.com/cmsc491/getClasses.php?username="+Alloy.Globals.username);
	var params = {
	    username: Alloy.Globals.username
	};
	classesReq.send(params);
});