/*****************************

	Lecture des messages

******************************/

var cptMessage = 0; //compteur de messages pour savoir au quel on en est
var affichage = document.getElementById("viewmessage"); //la div specialement faite pour

setInterval(function(){

	var retour = $.ajax({url : "./htbin/chatget.py", type : "GET", data : null});

	/*if(retour.length != cptMessage){
		for(var i = cptMessage; i < retour.length; i++){
			affichage.appendChild(mettreEnForme(retour[i]));
		}
	}*/
	
	/*retour.forEach(function(i){
		
		
	});*/

	cptMessage = retour.length;
	
	affichage.appendChild(document.createTextNode("Coucou"));

	alert(retour);

}, 2000); //on regarde toutes les 5s si un nouveau message

function mettreEnForme(json){
	var element = document.createElement("p");
	
	var chaine = "";
	chaine += json["user"] + "(" + json["time"] + ") : " + json["msg"];
	
	element.appendChild(document.createTextNode(chaine)); //username + ( + heure + ) + : + message
	
	return element;
}