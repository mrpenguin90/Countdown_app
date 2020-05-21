const vowelPicker = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "I", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "U", "U", "U", "U", "U"]
const constPicker = ["B", "B", "C", "C", "C", "D", "D", "D", "D", "D", "D", "F", "F", "G", "G", "G", "H", "H", "J", "K", "L", "L", "L", "L", "L", "M", "M", "M", "M", "N", "N", "N", "N", "N", "N", "N", "N", "P", "P", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "S", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "T", "T", "T", "V", "W", "X", "Y", "Z"]
let conundrum = "";
let output = document.getElementById('output');
const audio = new Audio('snd/clock.mp3');
const image = document.getElementById('swapImage');


// Generates the random vowel/constanant location in the array
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
// Actual wordGen
function generator(choice) {
    const vowelAudio = new Audio('snd/vowel.ogg');
    const consonantAudio = new Audio('snd/consonant.mp3')
    if (choice === "vowel") {
        conundrum = conundrum + vowelPicker[getRandomInt(0, vowelPicker.length)];
        vowelAudio.play();
    } else {
        conundrum = conundrum + constPicker[getRandomInt(0, constPicker.length)];
        consonantAudio.play()
    }
    // Output result to HTML
    conundrumOutput.innerHTML = conundrum;
};

// Start Countdown
async function startCountdown() {
    if (image.src.match("img/clock_30.gif")) {
        image.src = "img/clock_30_img.png";
    } else {
        image.src = "img/clock_30.gif";
        audio.play();
    }

};

// Stop Countdown
function stopCountdown() {
    image.src = "img/clock_30_img.png";
    audio.pause();
    audio.currentTime = 0.0;
};