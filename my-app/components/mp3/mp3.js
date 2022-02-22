const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
const playMusic = document.getElementById("play");
const nextBtn = document.querySelector(".fa-angle-double-right");
const prevBtn = document.querySelector(".fa-angle-double-left");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const aroundSong = document.querySelector(".fa-sync-alt");

let isAroundSong = false;
let isPlaying = true;
let indexSong = 0;
// always run function displayTimer
let timer = setInterval(displayTimer, 500);

// data
const musics = ["MusicNo1.mp3", "Music1.mp3", "Music2.mp3", "Music3.mp3"];

// set first song
song.setAttribute("src", `./music/${musics[indexSong]}`);

// Play / Pause song
playBtn.addEventListener("click", playPause);

function playPause() {
  if (isPlaying) {
    song.play();
    playMusic.classList.add("fa-pause");
    playMusic.classList.remove("fa-play");
    timer;
  } else {
    song.pause();
    playMusic.classList.add("fa-play");
    playMusic.classList.remove("fa-pause");
  }
  isPlaying = !isPlaying;
  displayTimer();
}

// Next song
nextBtn.addEventListener("click", function () {
  changeSong(1);
});

// Previous song
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});

// Function login change song
function changeSong(dir) {
  if (dir == 1) {
    // next song
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
  } else if (dir == -1) {
    // prev song
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
  }
  song.setAttribute("src", `./music/${musics[indexSong]}`);
  isPlaying = true;
  playPause();
}

// Function show time
function displayTimer() {
  console.log(song.duration, song.currentTime);
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  if (!duration) {
    remainingTime.textContent = "00.00";
  } else {
    remainingTime.textContent = formatTimer(currentTime);
  }
  durationTime.textContent = formatTimer(duration);
}

// format time
function formatTimer(number) {
  let minutes = Math.floor(number / 60);
  let seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// Change input range by time
rangeBar.addEventListener("change", handleChangeTime);
function handleChangeTime() {
  song.currentTime = rangeBar.value;
}

// Event ended song
song.addEventListener("ended", function () {
  if (isAroundSong) {
    changeSong(1);
  } else {
    playPause();
  }
});
aroundSong.addEventListener("click", function () {
  isAroundSong = !isAroundSong;
  if (isAroundSong) {
    aroundSong.style.color = "#0091FF";
  } else {
    aroundSong.style.color = "black";
  }
});
// run next song
// song.addEventListener("ended", handleEndedSong);
// function handleEndedSong() {
//   changeSong(1);
// }
