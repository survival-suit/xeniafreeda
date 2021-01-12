function divCopy(divToCopy)
	{
		//let divText = 2*document.getElementById("mainbtn").innerHTML;
		let divText = divToCopy.innerHTML;
		alert(divText);

		const modifyCopy = (e) => 
			{
		     	e.clipboardData.setData('text/plain',  divText  );
		     	document.execCommand('copy');
		     	e.preventDefault();
			};

		document.addEventListener('copy', modifyCopy);
		
	}