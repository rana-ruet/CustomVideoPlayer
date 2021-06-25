const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timespan = document.getElementById("timespan");

// functions

const toggleVideoStatus = function () {
	video.paused ? video.play() : video.pause();
};

const updatePlayIcon = function () {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
	}
};

const stopVideo = function () {
	video.currentTime = 0;
	video.pause();
};

const updateProgress = function () {
	progress.value = (video.currentTime / video.duration) * 100;

	let mins = String(Math.floor(video.currentTime / 60)).padStart(2, "0");
	let sec = String(Math.floor(video.currentTime % 60)).padStart(2, "0");

	timespan.innerHTML = `${mins}:${sec}`;
};

const setVideoProgress = function () {
	video.currentTime = (+progress.value * video.duration) / 100;
};
//  Event Listeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);

document.addEventListener("keypress", (e) => {
	if (e.code !== "Space") return;
	toggleVideoStatus();
});
