const buttons = document.getElementsByClassName('button');

const loadWaveLogic = (beat) => {
    beat.paused ? beat.play() : beat.currentTime = 0;
}

const buttonsArray = [...buttons]
    .map(button => {
        const soundName = button.getElementsByTagName('span').item(0).innerText;
        const beat = new Audio('./assets/' + soundName + '.wav');
        button.onclick = () => {
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