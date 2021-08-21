(function(){
	let closeButton = document.getElementById('close-button');
	let nav = document.getElementById('nav');

	closeButton.addEventListener('click', () => {
		if(closeButton.classList.contains('fa-times')) {
			closeButton.classList.replace('fa-times', 'fa-bars');
			nav.classList.remove('nav-display');
		} else {
			closeButton.classList.replace('fa-bars', 'fa-times');
			nav.classList.add('nav-display');
		}
	});
})();