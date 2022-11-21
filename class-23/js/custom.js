/*$(document).ready(function(){
$("#myBtn").click(function(){
	$("#clock").fadeToggle();
});
});*/


(function($){
	'use strict';
	//code start


$("#myBtn").click(function(){
	$("p").fadeToggle(1000);
})

//$("h3").text("We are learning <u>jQuery</u>!");

$("h3").html("We are learning <u>jQuery</u>!");


	//code end
}) (jQuery);