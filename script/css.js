var button1 = window.document.getElementById("styleNormal");
button1.addEventListener(onclick, styleDefault());

var button2 = window.document.getElementById("styleNuit");
button2.addEventListener(onclick, styleNuit());

var stylesheet = window.document.getElementById("style");

function styleDefault(){
	stylesheet.href = "./stylesheet/stylesheet.css";
	//document.styleSheets = "./stylesheet/stylesheet.css";
};

function styleNuit() {
	stylesheet.href = "./stylesheet/stylesheet_nuit.css";
	//document.styleSheets = "./stylesheet/stylesheet_nuit.css";
};