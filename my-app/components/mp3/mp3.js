const song = document.getElementById("song");
const playBtn = document.querySelector(".play-inner");
const playMusic = document.getElementById("play");
const nextBtn = document.querySelector(".fa-angle-double-right");
const prevBtn = document.querySelector(".fa-angle-double-left");
let isPlaying = true;
let indexSong = 0;
const musics = ["MusicNo1.mp3", "Music1.mp3", "Music2.mp3", "Music3.mp3"];
song.setAttribute("src", `./music/${musics[indexSong]}`);
playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", function () {
  changeSong(1);
});
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});

function playPause() {
  if (isPlaying) {
    song.play();
    playMusic.classList.add("fa-pause");
    playMusic.classList.remove("fa-play");
  } else {
    song.pause();
    playMusic.classList.add("fa-play");
    playMusic.classList.remove("fa-pause");
  }
  isPlaying = !isPlaying;
}

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
