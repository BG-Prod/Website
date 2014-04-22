(function()
{
	var formulaire = document.getElementById("login");
	
	formulaire.onsubmit = function()
	{
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
	  
		xhr.onreadystatechange  = function() 
		{ 
		   if(xhr.readyState  == 4)
		   {
			if(xhr.status  == 200) 
				document.ajax.dyn="Received:"  + xhr.responseText; 
			else
				document.ajax.dyn="Error code " + xhr.status;
			}
		}; 
	 
	   xhr.open( "POST", "./htbin/login.py",  true);
	   
	   var username = getElementById("username");
	   var passwd = getElementById("userpwd");
	   
	   xhr.send("username="+username.innerText + "&" + "userpwd=" + passwd.innerText);
	   
	   var text = document.createElement("p");
	   text.appendChild(document.createTextNode("Texte"));
	   
	   formulaire.appendChild(text);
	   
	   return false;
	};
}());