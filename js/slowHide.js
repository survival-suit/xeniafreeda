function slowHide(elemSlowHide)
	{
		elemSlowHide.style.opacity = 0;
		elemSlowHide.style.transition = "1.5s";
		elemSlowHide.addEventListener('transitionend', () => { elemSlowHide.hidden = true
			}, {once: true})
	}