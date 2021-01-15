function slowShow(elemSlowShow, time)
	{

		elemSlowShow.hidden = false;
		elemSlowShow.style.opacity = 0;
		elemSlowShow.style.transition = time;
 
		window.requestAnimationFrame
		(
  			() => window.requestAnimationFrame
  				(
  					() => { elemSlowShow.style.opacity = 1 }
  				)
		)
	}