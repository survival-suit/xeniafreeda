function tryAgain()
	{
		
		//прячем div с текстом
		slowHide(document.getElementById("string"),"2s");
		setTimeout(
				function()
					{
					//прячем кнопку скопировать
					slowHide(document.getElementById("copybtn"),"1.4s");
				}, 500);
		setTimeout(
				function()
					{
					//прячем кнопку попробовать снова
					slowHide(document.getElementById("refreshbtn"),"1.2s");
				}, 800);
		/*
		document.getElementById("refreshbtn").addEventListener('transitionend', () => 
			{
			//показываем кнопку получить ответ
			slowShow(document.getElementById("mainbtn"),"4s");
			//запуск мерцания div-кнопки 
			divButtonInterval = setInterval(() => divFlicker(document.getElementById("mainbtn")), 2000); 
			}, {once: true})
		*/
		setTimeout(
				function()
					{
						//показываем кнопку получить ответ
						slowShow(document.getElementById("mainbtn"),"4s");
						//запуск мерцания div-кнопки 
						divButtonInterval = setInterval(() => divFlicker(document.getElementById("mainbtn")), 2000);
					}, 6000);

		clearInterval(divStringInterval);//остановка интервала мерцания div-текста
	}