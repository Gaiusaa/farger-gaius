// Variables
const buttons = {
    red: document.querySelector("#red"),
    green: document.querySelector("#green"),
    blue: document.querySelector("#blue"),
    yellow: document.querySelector("#yellow"),
};

const result = document.querySelector("#result");
const defaultMessage = "Click on the wheel to get a color!";
const resultTime = 3000;
let waiting = false;

let color;

// Functions
let wait = (time, text) => {
    if (waiting === false) {
        waiting = true;
        setTimeout(() => {
            result.innerHTML = text;
            waiting = false;
        }, time);
    } else {
        return;
    }
}

function onClick(newColor) {
    if (newColor === color) {
        result.innerHTML = `You picked ${color} again!`;
    } else {
        color = newColor;
        result.innerHTML = `You picked ${color}!`;
    }
    wait(resultTime, defaultMessage);
}

buttons.red.addEventListener("click", () => onClick("red"));
buttons.green.addEventListener("click", () => onClick("green"));
buttons.blue.addEventListener("click", () => onClick("blue"));
buttons.yellow.addEventListener("click", () => onClick("yellow"));