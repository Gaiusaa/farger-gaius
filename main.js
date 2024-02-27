// Variables
const buttons = {
    "red": document.querySelector("#red"),
    "green": document.querySelector("#green"),
    "blue": document.querySelector("#blue"),
    "yellow": document.querySelector("#yellow"),
};

const content = document.querySelector("#content");

const result = document.querySelector("#result");
const defaultMessage = "Click on Simon's color(s)!";
const resultTime = 500;
const successTime = 1000;
const failTime = 1500;
let waiting = false;
let letUserInteract = false;

let currentPosition = 0;
let colorArray = [];

// Functions
let wait = (time, text) => {
    setTimeout(() => {
        result.innerHTML = text
        waiting = false;
    }, time);
}

function display() {
    const baseTime = 1000;

    colorArray.forEach((element, index) => {
        setTimeout(() => {
            console.log(element)
            let button = buttons[element]
            button.style.opacity = "0.5";
            setTimeout(() => {
                button.style.opacity = "1";
            }, 500)
        }, (baseTime * index))
    });

    setTimeout(() => {
        letUserInteract = true;
    }, (baseTime * colorArray.length) + 1000)
}

function selectColor() {
    letUserInteract = false;
    let number = Math.floor(Math.random() * 4);
    
    switch(number) {
        case 0:
            colorArray.push("red");
            break;
        case 1:
            colorArray.push("blue");
            break;
        case 2:
            colorArray.push("green");
            break;
        case 3:
            colorArray.push("yellow");
            break;
        default:
            colorArray.push("red");
    }

    display()
}

function onClick(event) {
    if (waiting === false && letUserInteract === true) {
        waiting = true;
        const element = event.target;
        let comment = "";

        if (element.id === colorArray[currentPosition]) {
            currentPosition += 1;
            comment = "You clicked the right color!";

            if (currentPosition === colorArray.length) {
                setTimeout(() => {
                    selectColor();
                    currentPosition = 0;
                }, successTime)
            }
        } else {
            currentPosition = 0;
            colorArray.length = 0;

            setTimeout(() => {
                selectColor();
            }, failTime)

            comment = "You clicked the wrong color!";
        }
        result.innerHTML = comment

        console.log(comment)
        wait(resultTime, defaultMessage);
    }
}

selectColor()

content.addEventListener("click", () => onClick(event))