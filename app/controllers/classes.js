
open("POST","http://stephen-wu.com/cmsc491/getClasses.php?username="+username);
var params = {
            username: username.value,
            
        };
        loginReq.send(params);