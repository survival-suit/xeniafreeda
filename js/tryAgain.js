function tryAgain()
	{
		//debugger;
		//прячем div с текстом
		slowHide(document.getElementById("string"), 4000);
		slowHide(document.getElementById("copybtn"), 4000);
		slowHide(document.getElementById("refreshbtn"), 4000);
		/*
		document.getElementById("string").style.opacity = 0;
		document.getElementById("string").style.transition = 4;

		document.getElementById("copybtn").style.opacity = 0;
		document.getElementById("copybtn").style.transition = 4;		

		document.getElementById("refreshbtn").style.opacity = 0;
		document.getElementById("refreshbtn").style.transition = 4;

		window.requestAnimationFrame
		(
  			() => window.requestAnimationFrame
  				(
  					() => { setTimeout(function()
								{
  							document.getElementById("string").hidden = true;
  							document.getElementById("copybtn").hidden = true; 
  							document.getElementById("refreshbtn").hidden = true;
  							}, 4000);
  							
  							}
  				)
		)		*/
		/*
		slowHide(document.getElementById("string"),"4s");
		slowHide(document.getElementById("copybtn"),"4s");
		slowHide(document.getElementById("refreshbtn"),"4s");
		*/
		/*setTimeout(
				function()
					{
					//прячем кнопку скопировать
					slowHide(document.getElementById("copybtn"),"2s");
				}, 300);
		setTimeout(
				function()
					{
					//прячем кнопку попробовать снова
					slowHide(document.getElementById("refreshbtn"),"2s");
				}, 600);*/
				
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
					}, 4800);

		clearInterval(divStringInterval);//остановка интервала мерцания div-текста
	}