function slowHide(elemSlowHide, time)
	{
		elemSlowHide.style.opacity = 0;
		elemSlowHide.style.transition = time;
		/*
		elemSlowHide.addEventListener('transitionend', () => { elemSlowHide.hidden = true
			}, {once: true});
		*/	
		window.requestAnimationFrame
		(
  			() => window.requestAnimationFrame
  				(
  					() => { setTimeout(function(){ elemSlowHide.hidden = true; }, time); }
  				)
		)		
	}