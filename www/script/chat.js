/**************************************

	Envoi de message

***************************************/
(function(){

	$('#post').click(function(e){
		e.preventDefault();

		var message = document.getElementById('msg').value;

		$.ajax({url : "./htbin/chatsend.py", type : "POST", data : "num="+"0"+"&msg="+message});
	});

}());