const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const playImage = "./assets/Eye_of_Cthulhu_(First_Phase).gif";
const pauseImage = "./assets/Eye_of_Cthulhu_(Second_Phase).gif";

music.volume = 0.05;

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.src = playImage;
    } else {
        music.pause();
        musicButton.src = pauseImage;
    }
}