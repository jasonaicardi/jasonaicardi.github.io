(function() {
	var time = 1000;
	var display = document.getElementById("timer");

	function formatTime(t) {
		function pl(testvar,name) {
			return testvar + ' ' + name + (testvar!==1?'s':'');
		}
		var s = t/1000,
		m = s/60|0,
		s = s-m*60,
		h = m/60|0,
		m = m-h*60,
		d = h/24|0,
		h = h-d*24;

		return ['<div>'+pl(d,'day'),pl(h,'hour'),pl(m,'minute'),pl(s.toFixed(2),'second')+'</div>'].join('</div><div>');
	}

	function startTimer(endTime) {
		var duration = endTime - (new Date).getTime();
		timerTick(duration,endTime);
	}

	function timerTick(d,et) {
		
		var next = d-10;
		var wait = et - (new Date).getTime() - next;
		display.innerHTML = formatTime(d);
		setTimeout(function()
			{
				timerTick(next,et);
			}, (wait>0)?wait:0);
	}

	startTimer((new Date(2016,5,24,17)).getTime());

})();