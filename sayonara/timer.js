(function() {
	var time = 1000;
	var display = document.getElementById("timer");

	var worker = new Worker('worker.js')

	worker.addEventListener('message', function(e) {
		display.innerHTML = (e.data)?e.data:'<iframe width="960" height="720" src="https://www.youtube.com/embed/8oVj7fgpRlk?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=8oVj7fgpRlk&modestbranding=1" frameborder="0" allowfullscreen></iframe>';

	}, false);

	worker.postMessage((new Date(2016,5,24,15,38,25)).getTime());


})();