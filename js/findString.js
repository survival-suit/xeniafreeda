function findString(elemDissipate)
	{
		let bookString;
		slowHide(elemDissipate);

		/*запрашиваем с сервера  JSON*/
		let xhr = new XMLHttpRequest(); 
		let adr = 'json/bookStrings.json';									
		xhr.open("GET", adr, true);									
		xhr.responseType = "json"; 
		xhr.send();		
		xhr.onload = () => 
			{    
				if (xhr.status === 200) 
					{																
						let paths = xhr.response;	
						let stringNum = Math.floor(Math.random() * paths.length); //от 0 до paths.length-1											
						bookString = paths[stringNum].bookString;											
					}
				else alert(`${xhr.status}: ${xhr.statusText}`);
			};			
		xhr.onerror = () => {alert(`Ошибка сети. Сервер не отдал код ошибки.`);};

		if(!elemDissipate.hidden)
		{			
			setTimeout(
				function()
					{
						/*Присваиваем div-блоку значение строки*/
						document.getElementById("string").innerHTML = bookString;
						slowShow(document.getElementById("string"));
					}, 1500);			
		}		

		divStringInterval = setInterval(() => divFlicker(document.getElementById("string")), 2000);			
		clearInterval(divButtonInterval);//остановка интервала мерцания div-кнопки				
	}