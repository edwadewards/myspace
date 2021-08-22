const profileSong = document.querySelector('.profile-song');
const playBtn = document.querySelector('#play');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');

function loadSong(song) {
  audio.src = `${song}.mp3`
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration
}

function playSong() {
  profileSong.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play()
}

function pauseSong() {
  profileSong.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')

  audio.pause()
}

playBtn.addEventListener('click', () => {
  const isPlaying = profileSong.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)