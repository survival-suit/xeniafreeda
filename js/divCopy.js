function divCopy(divToCopy)
	{
		//debugger;
		let divText = divToCopy.innerHTML;
		/*
		const modifyCopy = (e) => 
			{
		     	e.clipboardData.setData('text/plain',  divText  );
		     	document.execCommand('copy');
		     	console.log('copied');
		     	e.preventDefault();
			};

		document.addEventListener('copy', modifyCopy);
		*/
		/*

		var range = document.createRange();
        range.selectNode(divToCopy);
        alert(range);
        //alert(range.selectNodeContents());
		window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        */
	}