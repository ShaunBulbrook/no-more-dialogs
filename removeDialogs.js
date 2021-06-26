

const secondsToWaitUntilExecution = 1; //Ensures that script runs after any async activities

const enableScrolling = () => {
	//shoot to enable this change after any other site script has finished running
	setTimeout(() => {
		document.body.style.overflowY="visible";
		document.body.style.border="5px solid green";
		console.log('or here?');
	}, secondsToWaitUntilExecution) 

}


const removeDialogs = () => {
	setTimeout(() => {
		const dialogs = document.body.getElementsByClassName('fc-consent-root');
		[...dialogs].forEach((element) => {
		console.log('woop', element)
			element.setAttribute('style', 'display: none !important;')
		})
	}, secondsToWaitUntilExecution)
}

removeDialogs();
enableScrolling();
