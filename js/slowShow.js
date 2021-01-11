function slowShow(elemSlowShow)
	{

		elemSlowShow.hidden = false;
		elemSlowShow.style.opacity = 0;
		elemSlowShow.style.transition = "3s";
 
		window.requestAnimationFrame
		(
  			() => window.requestAnimationFrame
  				(
  					() => { elemSlowShow.style.opacity = 1 }
  				)
		)
	}