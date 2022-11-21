
function ghori(){

var time 	= new Date(),
	ghanta	= time.getHours(),
	minute	= time.getMinutes(),
	sec		= time.getSeconds(),
	dayNight= "PM";


	// AM/PM

	if(ghanta<12){
		dayNight = "AM";
	}
	

	// 0=12
	if(ghanta == 0){
		ghanta = 12;
	}


	// 24 to 12
	if(ghanta>12){
		ghanta = ghanta - 12;
	}

	//Adding zero(0) before ghanta
	if(ghanta<10){
		ghanta = "0" + ghanta;
	}

	//Adding zero(0) before minute
	if(minute<10){
		minute = "0" + minute;
	}

	//Adding zero(0) before second
	if(sec<10){
		sec = "0" + sec;
	}

	document.getElementById("clock").innerHTML = ghanta + ":" + minute + ":" + sec + " " +dayNight;

}

setInterval(ghori, 1000);

