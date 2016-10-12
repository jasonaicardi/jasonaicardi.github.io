var request = new XMLHttpRequest(),
	lines = [],
	nextIndex = 0,
	running = false,
	id = 0,
	messagediv = document.getElementById("message"),
	nextBtn = document.getElementById("next"),
	playpauseBtn = document.getElementById("playpause");

function shuffleArray(array) {

	for (let i = array.length - 1; i > 0; i--) {

		let j = Math.floor(Math.random() * (i + 1));

		[array[i],array[j]] = [array[j],array[i]];
	}

	return array;
}

function newMessage(){
	messagediv.innerHTML = lines[nextIndex];
	nextIndex = (nextIndex === (lines.length-1))? 0 : nextIndex + 1;
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
	lines = shuffleArray(this.responseText.split('\n'));	

	nextBtn.onclick = nextMsg;
	playpauseBtn.onclick = toggle;
	nextBtn.disabled = false;
	playpauseBtn.disabled = false;
	newMessage();
	startTimer();
}

request.open('GET','list.txt',true);
request.send();

