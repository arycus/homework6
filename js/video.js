var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	// document.getElementById("volume").innerHTML = "100"
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
	console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = video.playbackRate * 0.8;
  	console.log("Speed is "+ video.playbackRate);
}  

function increaseSpeed() {
	video.playbackRate = video.playbackRate * 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	let time = video.currentTime
	let future = video.currentTime + 60
	video.currentTime = future
	if(video.ended){
		video.currentTime = 0
		video.playbackRate = 1
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if(video.muted){
		  console.log("Changing to Unmuted");
		  video.muted = false;
		  document.querySelector("#mute").innerHTML ="Mute"
	  }else{
		console.log("Changing to Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	  }
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	video.volume = volume / 100

	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100);
	// video.volume = vol
}
       

function gray() { 
	video.classList.add("grayscale")
	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale")
	console.log("In color") 
}
