function formatTime(t) {
		function pl(testnum) {
			return (testnum!=1?'s':'');
		}
		var s = t/1000,
		m = s/60|0, s = (s-m*60).toFixed(2),
		h = m/60|0, m = m-h*60,
		d = h/24|0, h = h-d*24;

		return ['<div>'+ 
			d + ' day'+pl(d),
			h + ' hour'+pl(h),
			m +' minute'+pl(m),
			s + ' second'+pl(s)
			+'</div>'].join('</div><div>');
}

	
function startTimer(endTime) {
	var duration = endTime - (new Date).getTime();
	timerTick(duration,endTime);
}

function timerTick(d,et) {
	if (d <= 100){
		self.postMessage(false);
	} else {
		var next = d-10;
		var wait = et - (new Date).getTime() - next;
		self.postMessage(formatTime(next));
		setTimeout(function() {
				timerTick(next,et);
			}, (wait>0)?wait:0);
	}
}

self.addEventListener('message', function(e) {
	startTimer(e.data);
}, false);