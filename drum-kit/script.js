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

const loadWaveLogic = (beat) => {
    beat.paused ? beat.play() : beat.currentTime = 0;
}

const buttonsArray = [...buttons]
    .map((button, idx) => {
        const beat = new Audio(wavesPathsArray[idx]);
        button.onclick = (beat) => {
            loadWaveLogic(beat);
        }

        document.addEventListener('keydown', function(event){
            const buttonLetter = button.getElementsByTagName('p').item(0).innerText.toLowerCase();
            if(event.key ===  buttonLetter){
                button.classList.add('activeButton');
                loadWaveLogic(beat);
            }
        })

        document.addEventListener('keyup', function(event){
            button.classList.remove('activeButton');  
        });
    });