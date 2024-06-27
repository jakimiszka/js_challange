const buttons = document.getElementsByClassName('button');
const wavesPathsArray = [
    './assets/boom.wav',
    './assets/clap.wav',
    './assets/hihat.wav',
    './assets/kick.wav',
    './assets/openhat.wav',
    './assets/ride.wav',
    './assets/snare.wav',
    './assets/tink.wav',
    './assets/tom.wav'
];

const buttonsArray = [...buttons]
    .map((button, idx) => {
        button.onclick = () => {
            const beat = new Audio(wavesPathsArray[idx]);
            beat.paused ? beat.play() : beat.currentTime = 0;
        }
});