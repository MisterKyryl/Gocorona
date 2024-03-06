"use strict"

document.addEventListener('DOMContentLoaded', function() {
	// Проверяем наличие фрагмента URL #open или #close
	if (window.location.hash === "#open") {
	document.body.classList.add('_lock');
	} else if (window.location.hash === "#close") {
	document.body.classList.remove('_lock');
	}
});

window.addEventListener('popstate', function(event) {
	// Проверяем наличие фрагмента URL #open или #close при каждом изменении URL
	if (window.location.hash === "#open") {
	document.body.classList.add('_lock');
	} else if (window.location.hash === "#close") {
	document.body.classList.remove('_lock');
	}
});