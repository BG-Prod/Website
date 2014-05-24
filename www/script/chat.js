/**************************************

	Envoi de message

***************************************/
(function(){

// Bouton d'envoi du message
var chat = document.getElementById("chatsend");

chat.onsubmit = function() {
	var req; 
	try {  req = new ActiveXObject('Msxml2.XMLHTTP');   }
	catch (e) 
	{
		try {   req = new ActiveXObject('Microsoft.XMLHTTP'); }
		catch (e2) 
		{
		   try {  req = new XMLHttpRequest();  }
		   catch (e3) {  req = false;   }
		}
	}
	
	var params = "num=0&msg=";
	
	var message = getElementById("msg");
	var params = params + message.innerText;
	
	req.open("POST", "./htbin/chatsend.py", true);
	
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Content-length", params.length);
	req.setRequestHeader("Connection", "close");	
	
	req.onreadystatechange  = function() { 
   if(req.readyState  == 4 && req.status  == 200)
		document.ajax.dyn="Received:"  + req.responseText; 
	else
		document.ajax.dyn="Error code " + req.status;
	};

	req.send(params);  
	   
	return false;
};

}());