function divFlicker(elemFlick) 
	{
		if (divColor == 0) 
		  	{
		  		divColor = 1;
		  		elemFlick.style.backgroundColor = "#3c554f42";
		  		elemFlick.style.transition = "2s";
		  	}
		else{
		  		divColor = 0;
		  		elemFlick.style.backgroundColor = "#ffffff00";
		  		elemFlick.style.transition = "2s";
		  	}
	}