(function ($){
	'use strict';
	//code start
	$('button#read').on("click", function (){
		$('p.article').fadeToggle(1000);
	});



}) (jQuery);

function validation(){
	var userInput = document.getElementById("userInfo"),
		userMail  = document.getElementById("user-mail"),
		userPwd   = document.getElementById("user-passw"),
		termsCons = document.getElementById("tnc").checked;

	if(userInput.value.trim() == ""){
		document.getElementById("user-error").innerHTML = "Enter Your name";
		return false;
	}else{
		document.getElementById('user-error').innerHTML= " ";
	}

	if(userMail.value.trim() == ""){
		document.getElementById("errorMail").innerHTML = "Enter Your Eail";
		return false;
	}else{
		document.getElementById('errorMail').innerHTML= " ";
	}

	if(userPwd.value.trim() == ""){
		document.getElementById("errorPwd").innerHTML = "Enter Your password";
		return false;
	}else{
		document.getElementById('errorPwd').innerHTML= " ";
	}

	if(termsCons == false){
		document.getElementById("checkMe").style.color ="red";

		return false;
	}


}