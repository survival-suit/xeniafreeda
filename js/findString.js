function findString(elemDissipate)
	{
		elemDissipate.style.opacity = 0;
		elemDissipate.style.transition = "1.5s";
		elemDissipate.addEventListener('transitionend', () => { elemDissipate.hidden = true
			}, {once: true})
	}