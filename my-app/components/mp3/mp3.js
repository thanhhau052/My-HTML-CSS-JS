const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
const playMusic = document.getElementById("play");
const nextBtn = document.querySelector(".fa-angle-double-right");
const prevBtn = document.querySelector(".fa-angle-double-left");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const aroundSong = document.querySelector(".fa-sync-alt");
const musicTitle = document.querySelector(".music-title");
const musicImg = document.querySelector(".music-img img");
const musicThumbnail = document.querySelector(".music-img");
const musicRandom = document.querySelector(".fa-random");
const musicRepeatNumber = document.querySelector(".song-repeat-number");
let isRandomSong = false;
let isRepeatSong = false;
let isPlaying = true;
let indexSong = 0;
let countRepeat = 0;
// always run function displayTimer
let timer = setInterval(displayTimer, 500);
let songsHeard = [];

// data
const musics = [
  {
    id: 1,
    title: "music 0",
    file: "MusicNo1.mp3",
    img: "./img/img-1.jpg",
  },
  {
    id: 2,
    title: "music 1",
    file: "Music1.mp3",
    img: "./img/img-2.jpg",
  },
  {
    id: 3,
    title: "music 2",
    file: "Music2.mp3",
    img: "./img/img-3.jpg",
  },
  {
    id: 4,
    title: "music 3",
    file: "Music3.mp3",
    img: "./img/img-4.jpg",
  },
];
// Default begin
init(indexSong);

// Play / Pause song
playBtn.addEventListener("click", playPause);

function playPause() {
  if (!songsHeard.includes(indexSong)) {
    songsHeard.push(indexSong);
  }
  if (isPlaying) {
    song.play();
    playMusic.classList.add("fa-pause");
    playMusic.classList.remove("fa-play");
    musicThumbnail.classList.add("is-play");
    timer;
  } else {
    song.pause();
    playMusic.classList.add("fa-play");
    playMusic.classList.remove("fa-pause");
    musicThumbnail.classList.remove("is-play");
  }
  showRepeatSong();
  if (countRepeat) {
    countRepeat--;
  } else {
    isRepeatSong = false;
    changeStatusRepeat();
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
  if (isRandomSong) {
    while (true) {
      indexSong = Math.floor(Math.random() * musics.length);
      if (!songsHeard.includes(indexSong)) {
        break;
      }
    }
  }

  init(indexSong);
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
  if (songsHeard.length == musics.length && !isRepeatSong && isRandomSong) {
    isPlaying = false;
    playPause();
    songsHeard = [];
    changeStatusRandom();
    song.currentTime = 0;
    return;
  }
  if (isRepeatSong) {
    // C1
    // song.currentTime = 0;
    // song.play();
    // C2
    isPlaying = true;
    playPause();
  } else {
    changeSong(1);
  }
});

// CSS and status Repeat song
aroundSong.addEventListener("click", function () {
  if (countRepeat <= 3) {
    countRepeat++;
  }
  if (countRepeat == 4) {
    isRepeatSong = false;
    changeStatusRepeat();
    countRepeat = 0;
  } else {
    isRepeatSong = true;
    changeStatusRepeat();
  }
  showRepeatSong();
});
function changeStatusRepeat() {
  if (isRepeatSong) {
    aroundSong.style.color = "#0091FF";
  } else {
    aroundSong.style.color = "black";
  }
}
function showRepeatSong() {
  if (countRepeat == 0) {
    musicRepeatNumber.textContent = "";
    return;
  }
  musicRepeatNumber.textContent = countRepeat;
}
// Random song
musicRandom.addEventListener("click", changeStatusRandom);
function changeStatusRandom() {
  isRandomSong = !isRandomSong;
  if (isRandomSong) {
    musicRandom.style.color = "#0091FF";
  } else {
    musicRandom.style.color = "black";
  }
}
// show data musics
function init(indexSong) {
  // set first song
  song.setAttribute("src", `./music/${musics[indexSong].file}`);
  musicImg.setAttribute("src", `${musics[indexSong].img}`);
  musicTitle.textContent = `${musics[indexSong].title}`;
}
