(function() {
	var time = 1000;
	var display = document.getElementById("timer");

	var worker = new Worker('worker.js')

	worker.addEventListener('message', function(e) {
		display.innerHTML = e.data;
	}, false);

	worker.postMessage((new Date(2016,5,24,17)).getTime());


})();