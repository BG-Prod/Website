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
	
	req.onreadystatechange  = function() { 
	   if(req.readyState  == 4 && req.status  == 200)
			document.ajax.dyn="Received:"  + req.responseText; 
		else
			document.ajax.dyn="Error code " + req.status;
	};
	
	req.open( "POST", "./htbin/chatsend.py",  true);
	var message = getElementById("msg");
	   
	req.send("num=0" + "&" + "msg=" + msg.innerText);  
	   
	return false;
};

}());