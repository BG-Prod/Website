// Recuperation des elements
var lastname = document.getElementById("lastname");
var firstname = document.getElementById("firstname");
var birthdate = document.getElementById("birthdate");
var useremail = document.getElementById("useremail");
var username = document.getElementById("username");
var userpwd = document.getElementById("userpwd");
var userpwdconf = document.getElementById("userpwdconf");

// Utilisation des fonctions
lastname.onblur = verifLastName;
firstname.onblur = verifFirstName;
birthdate.onblur = verifBirthDate;
useremail.onblur = verifEmail;
username.onblur = verifPseudo;
userpwd.onblur = verifPwds;
userpwdconf.onblur = verifPwds;

// Implementation des fonctions
function verifLastName(){
	var name = /^[A-Z]{1}[a-zçîïéèàù]*([\s-][A-Z]{1}[a-zçîïéèàù]*)*$/
	if(name.test(lastname.value))
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

function verifFirstName(){
	var name = /^[A-Z]{1}[a-zçîïéèàù]*([\s-][A-Z]{1}[a-zçîïéèàù]*)*$/
	if(name.test(firstname.value))
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
	var date = /^(\d{1,2}\/){2}\d{4}$/;
	
    if(!date.test(birthdate.value)){
		throw new Error('Date non valable !')
	}
    else{
        var tmp = birthdate.value.split('/');
        tmp[1] -=1;
        var correct = new Date();
        correct.setFullYear(tmp[2]);
        correct.setMonth(tmp[1]);
        correct.setDate(tmp[0]);
        if(correct.getFullYear()==tmp[2] && correct.getMonth()==tmp[1] && correct.getDate()==tmp[0]){
            throw new Error("Date valable !");
        }
        else{
            throw new Error("Date non valable !");
        }
    }
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
	var psd = /^[\w]{6,}$/;
	if(psd.test(username.value))
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

function verifPwds(){
	verifPwd();
	verifPwdConf();
}

function verifPwd(){
	var pwd = /([a-zA-Z0-9]){8,}/;
	var pwd2 = /.*[A-Z]{1,}.*/;
	var pwd3 = /.*[a-z]{1,}.*/;
	var pwd4 = /.*\d{1,}.*/;
	if(pwd.test(userpwd.value) && pwd2.test(userpwd.value) && pwd3.test(userpwd.value) && pwd4.test(userpwd.value))
	{
		alert("OK");
		// encadrer en vert
	}
	else
	{
		alert("Faux");
		// encadrer en rouge
	}
}

function verifPwdConf(){
	if(userpwd.value===userpwdconf.value)
	{
		alert("OK");
		// encadrer en vert
	}
	else
	{
		alert("Faux");
		// encadrer en rouge
	}
}

