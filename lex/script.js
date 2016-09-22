var request = new XMLHttpRequest(),
	lines = [],
	messagediv = document.getElementById("message"),
	btn = document.getElementById("more");


function newMessage(){
	messagediv.innerHTML = lines[Math.floor(Math.random()*lines.length)];
}

function startTimer(){
	setInterval(newMessage,9000);
}


request.onload = function() {
	lines = this.responseText.split('\n');
	btn.onclick = newMessage;
	btn.disabled = false;
	newMessage();
	startTimer();
}

request.open('GET','list.txt',true);
request.send();

