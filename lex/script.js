var request = new XMLHttpRequest(),
	lines = [],
	running = false,
	id = 0,
	messagediv = document.getElementById("message"),
	nextBtn = document.getElementById("next"),
	playpauseBtn = document.getElementById("playpause");


function newMessage(){
	messagediv.innerHTML = lines[Math.floor(Math.random()*lines.length)];
}

function toggle(){
	if(running){
		stopTimer();
	} else {
		startTimer();
	}
}

function nextMsg(){
	newMessage();
	if(running) startTimer();
}

function startTimer(){
	clearInterval(id);
	id = setInterval(newMessage,6000);
	running = true;
	updateButton();
}

function stopTimer(){
	clearInterval(id);
	running = false;
	updateButton();
}

function updateButton(){
	playpauseBtn.firstChild.innerHTML = (running)?"pause":"play_arrow";
}

request.onload = function() {
	lines = this.responseText.split('\n');
	nextBtn.onclick = nextMsg;
	playpauseBtn.onclick = toggle;
	nextBtn.disabled = false;
	playpauseBtn.disabled = false;
	newMessage();
	startTimer();
}

request.open('GET','list.txt',true);
request.send();

