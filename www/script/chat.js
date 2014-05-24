/**************************************

	Envoi de message

***************************************/
// Bouton d'envoi du message
var bEnvoyer = document.getElementById("post");

bEnvoyer.addEventListener("click", function() {
	var xhr; 
	try {  xhr = new ActiveXObject('Msxml2.XMLHTTP');   }
	catch (e) 
	{
		try {   xhr = new ActiveXObject('Microsoft.XMLHTTP'); }
		catch (e2) 
		{
		   try {  xhr = new XMLHttpRequest();  }
		   catch (e3) {  xhr = false;   }
		}
	}
	
	xhr.onreadystatechange  = function() { 
		   if(xhr.readyState  == 4){
			if(xhr.status  == 200) 
				document.ajax.dyn="Received:"  + xhr.responseText; 
			else
				document.ajax.dyn="Error code " + xhr.status;
			}
		};
		
	xhr.open( "POST", "./htbin/chatsend.py",  true);
	   
	   var message = getElementById("msg");
	   
	   xhr.send("num=0" + "&" + "msg=" + msg.innerText);
	   
	   
	   return false;
});