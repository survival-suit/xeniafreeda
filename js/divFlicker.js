function divFlicker(elemFlick) 
	{
		if (divColor == 0) 
		  	{
		  		divColor = 1;
		  		elemFlick.style.backgroundColor = "#3c554f42";
		  		elemFlick.style.transition = "2s";
		  		
		  		/*
		  		document.getElementById("mainbtn").style.backgroundColor = "#3c554f42";
		  		document.getElementById("mainbtn").style.transition = "2s";
		  		*/
		  		console.log(divColor);

		  	}
		else{
		  		divColor = 0;
		  		document.getElementById("mainbtn").style.backgroundColor = "#ffffff00";
		  		document.getElementById("mainbtn").style.transition = "2s";
		  		
		  		/*
		  		document.getElementById("mainbtn").style.backgroundColor = "#ffffff00";
		  		document.getElementById("mainbtn").style.transition = "2s";
		  		*/
		  		console.log(divColor);
		  	}
	}