
var time = 1000;
var display = document.getElementById("timer");

function formatTime(t) {
	function p(n) {
		return (n<10?'0':'') + n;
	}

	
	var ms = t % 1000,
	s = (t-ms)/1000,
	ms = p(ms/10|0),
	m = s/60|0,
	s = p(s-m*60),
	h = m/60|0,
	m = p(m-h*60),
	d = h/24|0,
	h = p(h-d*24);


	return [`<div>${d} days`,`${h} hours`,`${m} minutes`,`${s}.${ms} seconds`].join('</div><div>');
}

function updateTimer(time) {
	display.innerHTML = formatTime(time);
}

function startTimer(endTime) {
	var duration = endTime - (new Date).getTime();
	timerTick(duration,endTime);
}

function timerTick(d,et) {
	
	var next = d-10;
	var wait = et - (new Date).getTime() - next;
	updateTimer(d);
	setTimeout(function()
		{
			timerTick(next,et);
		}, (wait>0)?wait:0);
}

startTimer((new Date(2016,5,24,17)).getTime());