function tryAgain()
	{
		clearInterval(divStringInterval);//остановка интервала мерцания div-текста
		//прячем div с текстом
		slowHide(document.getElementById("string"),"1.8s");
		//прячем кнопку скопировать
		slowHide(document.getElementById("copybtn"),"1.8s");
		//прячем кнопку попробовать снова
		slowHide(document.getElementById("refreshbtn"),"1.8s");

		document.getElementById("refreshbtn").addEventListener('transitionend', () => 
			{
			//показываем кнопку получить ответ
			slowShow(document.getElementById("mainbtn"),slowShow);
			//запуск мерцания div-кнопки 
			divButtonInterval = setInterval(() => divFlicker(document.getElementById("mainbtn")), 2000); 
			}, {once: true})
		
	}