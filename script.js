console.log("Welcome to Jamify");

// State
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let isPlaying = false;

// DOM Elements
const masterPlay = document.getElementById('masterPlay');
const myProgressBar = document.getElementById('myProgressBar');
const gif = document.getElementById('gif');
const masterSongName = document.getElementById('masterSongName');
const playerCover = document.getElementById('playerCover');
const currentTimeEl = document.getElementById('currentTime');
const totalDurationEl = document.getElementById('totalDuration');
const songGrid = document.getElementById('songGrid');
const searchInput = document.getElementById('searchInput');

const aboutModal = document.getElementById("aboutModal");
const aboutLink = document.getElementById("aboutLink");
const closeModal = document.getElementById("closeModal");
const closeButton = document.getElementById("closeButton");

// Data
const songs = [
    {songName: "Shwasat Raja", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "O Raje", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Maay Bhavani", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Raja Aala", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Chakar Shivbach Honar", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Bagtos Ky Mujra Kar", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Aale Maratha", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
];

// Formatting time helper
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Render Skeletons
function renderSkeletons() {
    songGrid.innerHTML = '';
    for(let i=0; i<songs.length; i++) {
        songGrid.innerHTML += `
            <div class="music-card skeleton-card">
                <div class="skeleton skeleton-img"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text short"></div>
            </div>
        `;
    }
}

// Render Actual Songs
function renderSongs(filterText = "") {
    songGrid.innerHTML = '';
    const lowerFilter = filterText.toLowerCase();
    
    songs.forEach((song, i) => {
        if(song.songName.toLowerCase().includes(lowerFilter)) {
            const card = document.createElement('div');
            card.classList.add('music-card');
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${song.coverPath}" alt="${song.songName}">
                    <div class="play-overlay" data-index="${i}">
                        <i class="fas fa-play" data-index="${i}"></i>
                    </div>
                </div>
                <div class="song-title">${song.songName}</div>
                <div class="song-artist">Jamify Mix</div>
            `;
            songGrid.appendChild(card);
        }
    });

    // Attach listeners to new cards
    document.querySelectorAll('.play-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            // Prevent event from bubbling up if we had other listeners on card
            e.stopPropagation(); 
            const idx = parseInt(e.currentTarget.getAttribute('data-index'));
            playSong(idx);
        });
    });
}

// Initial Load Simulation
renderSkeletons();
setTimeout(() => {
    renderSongs();
}, 1000); // 1s delay for skeleton effect

// Search Logic
searchInput.addEventListener('input', (e) => {
    renderSongs(e.target.value);
});

// Audio Playback Logic
function updatePlayerUI() {
    masterSongName.innerText = songs[songIndex].songName;
    playerCover.src = songs[songIndex].coverPath;
    
    if (isPlaying) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}

function playSong(idx) {
    if (songIndex === idx && isPlaying) {
        // Pause if clicking same song
        audioElement.pause();
        isPlaying = false;
        updatePlayerUI();
        return;
    }
    
    songIndex = idx;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    isPlaying = true;
    updatePlayerUI();
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        isPlaying = true;
    } else {
        audioElement.pause();
        isPlaying = false;
    }
    updatePlayerUI();
});

audioElement.addEventListener('timeupdate', () => { 
    if (audioElement.duration) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100; 
        myProgressBar.value = progress;
        currentTimeEl.innerText = formatTime(audioElement.currentTime);
        totalDurationEl.innerText = formatTime(audioElement.duration);
    }
});

audioElement.addEventListener('loadedmetadata', () => {
    totalDurationEl.innerText = formatTime(audioElement.duration);
});

audioElement.addEventListener('ended', () => {
    document.getElementById('next').click();
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex >= songs.length - 1) ? 0 : songIndex + 1;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    isPlaying = true;
    updatePlayerUI();
});

document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex <= 0) ? songs.length - 1 : songIndex - 1;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    isPlaying = true;
    updatePlayerUI();
});

// Modal Logic
const openModal = () => { aboutModal.style.display = "flex"; };
const closeM = () => { aboutModal.style.display = "none"; };

aboutLink.addEventListener('click', openModal);
closeModal.addEventListener('click', closeM);
closeButton.addEventListener('click', closeM);

window.addEventListener('click', (event) => {
    if (event.target == aboutModal) {
        closeM();
    }
});
