const buttons = document.getElementsByClassName('button');

let beat = new Audio('./assets/boom.wav');

const buttonsArray = [...buttons]
    .map((button) => {
        button.onclick = () => {
            console.log(button.innerHTML + ' clicked!');
            
            // button press eeds some delay/loop action
            // each button different sound
            beat.play();
        }
});