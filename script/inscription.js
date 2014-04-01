// Recuperation des elements
var lastname = document.getElementById("lastname");
var firstname = document.getElementById("firstname");
var birthdate = document.getElementById("birthdate");
var useremail = document.getElementById("useremail");
var username = document.getElementById("username");
var userpwd = document.getElementById("userpwd");
var userpwdconf = document.getElementById("userpwdconf");

// Utilisation des fonctions
lastname.onblur = verifName(lastname);
firstname.onblur = verifName(firstname);
birthdate.onblur = verifBirthDate;
useremail.onblur = verifEmail;
username.onblur = verifPseudo;
userpwd.onblur = verifPwd;
userpwdconf.onblur = verifPwdConf;

// Implementation des fonctions
function verifName(arg1){
	var name = /^[A-Z]{1,1}+[a-z]{1,}+([A-Z]{1,1}+[a-z]{1,}){1,}$/;
	if(name.test(arg1.value))
	{
		throw new Error("OK");
		// encadrer en vert
	}
	else
	{
		throw new Error("Faux");
		// encadrer en rouge
	}
}

function verifBirthDate(){
	throw new Error("hey ho");
}

function verifEmail(){
	var mail = /^[0-9a-zA-Z.-_]+@[0-9a-z.-_]+\.[a-z]{2,}$/;
	if(mail.test(useremail.value))
	{
		throw new Error("OK");
		// encadrer en vert
	}
	else
	{
		throw new Error("Faux");
		// encadrer en rouge
	}
}

function verifPseudo(){
	throw new Error("hey ho");
}

function verifPwd(){
	throw new Error("hey ho");
}

function verifPwdConf(){
	throw new Error("hey ho");
}

