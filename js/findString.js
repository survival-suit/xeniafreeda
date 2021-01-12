async function findString(elemDissipate)
	{
		slowHide(elemDissipate);

		if(!elemDissipate.hidden)
		{			
			setTimeout(
				function()
					{
						document.getElementById("string").innerHTML = "Это строка";
						slowShow(document.getElementById("string"));
					}, 1500);
						
			clearInterval(divColorInterval);//остановка интервала мерцания div-кнопки				
		}			

		
		let response =  await fetch('json/bookStrings.json');

		if (response.ok) { // если HTTP-статус в диапазоне 200-299
		  // получаем тело ответа (см. про этот метод ниже)
		  let json =  await response.json();
		  alert(json);
		} else {
		  alert("Ошибка HTTP: " + response.status);
		}
		
		/*
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
						alert(paths);	
						let stringNum = Math.floor(Math.random() * (paths.length));	
						alert(stringNum);
						let bookString = paths[stringNum].bookString;												
					}
				else alert(`${xhr.status}: ${xhr.statusText}`);
			};
			
			xhr.onerror = () => {alert(`Ошибка сети. Сервер не отдал код ошибки.`);};*/
	}