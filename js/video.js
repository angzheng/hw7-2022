var video;

// Initialize the video element and turn off autoplay and 
// turn off looping.

window.addEventListener("load", function() {
  console.log("Good job opening the window");
  video=document.getElementById("player1");
  video.autoplay = false;
  console.log("Auto play is set to" + video.autoplay);
  video.loop = false;
  console.log("Loop is set to " + video.autoplay);
  video.load();

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
  video.play();
  var volume = document.getElementById("slider").value;
  document.getElementById("volume").innerHTML = volume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
  video.pause();
});

// Slow the current video speed by 10% each time the button is clicked
// and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function() {
  var speed = document.getElementById("player1").playbackRate;
  document.getElementById("player1").playbackRate = speed * 0.90;
	console.log("Slowed Down Video to " + document.getElementById("player1").playbackRate);
});

// Increase the current video speed each time the button is clicked
// and log the new speed to the console. Change it by an amount 
// proportional to the slow down.
document.querySelector("#faster").addEventListener("click", function() {
  var speed = document.getElementById("player1").playbackRate;
  document.getElementById("player1").playbackRate = speed / 0.90;
  console.log("Sped Up Video to " + document.getElementById("player1").playbackRate);
});

// Advance the current video by 10 seconds. If the video length has
// been exceeded go back to the start of the video.
// Log the current location of the video.


document.querySelector("#skip").addEventListener("click", function() {
  var currTime = document.getElementById("player1").currentTime;
  if (currTime >= document.getElementById("player1").duration) {
    document.getElementById("player1").currentTime = 0;
  }
  else {
    document.getElementById("player1").currentTime += 10;
  }
  console.log("Skip ahead");
  console.log("Current Timestamp: " + currTime);
});

// Mute/unmute the video and update the text in the button
document.getElementById("mute").addEventListener("click", function() {
  var mute_button = document.getElementById("mute");
  if (video.muted == true) {
    video.muted = false;
    mute_button.innerHTML = "Mute"
    console.log("Unmute");
  }
  else {
    video.muted = true;
    mute_button.innerHTML = "Unmute"
    console.log("Mute");
  }
});

// Change the volume based on the slider and update the volume information
document.getElementById("slider").addEventListener("change", function() {
  var volume = document.getElementById("slider").value;
  document.getElementById("volume").innerHTML = volume + "%";
  video.volume = volume / 100;
});

// Utilize the existing oldSchool class on the video element
document.getElementById("vintage").addEventListener("click", function() {
  video.classList.add('oldSchool');
});

// Utilize the existing oldSchool class on the video element
document.getElementById("orig").addEventListener("click", function() {
  video.classList.remove('oldSchool');
});