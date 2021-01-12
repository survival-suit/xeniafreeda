function divCopy(divToCopy)
	{
		let divText = divToCopy.innerHTML;

		const modifyCopy = (e) => 
			{
		     	e.clipboardData.setData('text/plain',  divText  );
		     	document.execCommand('copy');
		     	e.preventDefault();
			};

		document.addEventListener('copy', modifyCopy);
		
	}