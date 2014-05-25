var connect = document.getElementById("envoyer");
connect.addEventListener("click", function() {
	verifCo();
});

function verifCo()
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
			{
				var text = document.createElement(xhr.responseText());

				formulaire.replaceChild(text,document.getElementById("login").firstChild);
			}
			else
			{
				document.ajax.dyn="Error code " + xhr.status;
			}
		}; 
	 
	   xhr.open( "POST", "../htbin/login.py",  true);
	   
	   var username = document.getElementById("username");
	   var passwd = document.getElementById("userpwd");
	   
	   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	   
	   xhr.send("username="+username.innerText + "&" + "userpwd=" + passwd.innerText);
	   
	   return false;
	};
}